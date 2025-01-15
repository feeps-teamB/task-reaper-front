<template>
  <modal>
    <h2>新規スケジュール作成</h2>
    <form @submit.prevent="goToConfirm">
      <div>
        <label for="title">スケジュールタイトル</label>
        <input type="text" id="title" v-model="form.title" required />
      </div>
      <div>
        <label for="description">スケジュールの詳細説明</label>
        <textarea id="description" v-model="form.description" required></textarea>
      </div>
      <div>
        <label for="startDate">開始日</label>
        <input type="date" id="startDate" v-model="form.startDate" required />
      </div>
      <div>
        <label for="endDate">終了日</label>
        <input type="date" id="endDate" v-model="form.endDate" required />
      </div>
      <div>
        <label for="category">カテゴリ</label>
        <select id="category" v-model="form.categoryId" required>
          <option v-for="category in categories" :key="category.categoryId" :value="category.categoryId">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div>
        <button type="submit">確認画面へ</button>
      </div>
    </form>
    <div v-if="error" style="color: red;">
      <p>{{ error }}</p>
    </div>
  </modal>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import modal from '@/components/modal'

// ルーターとルートを取得
const router = useRouter()
const route = useRoute()

// フォームデータ
const form = ref({
  title: '',
  description: '',
  startDate: '',
  endDate: '',
  categoryId: null,
})

// カテゴリデータとエラーメッセージ用の変数
const categories = ref([])
const error = ref(null)

// 確認画面へ遷移
const goToConfirm = () => {
  router.push({
    name: 'addScheduleSave',
    query: {
      title: form.value.title,
      description: form.value.description,
      startDate: form.value.startDate,
      endDate: form.value.endDate,
      categoryId: form.value.categoryId,
    }
  })
}

// カテゴリデータの取得
onMounted(async () => {
  try {
    const response = await $fetch(`http://localhost:8080/addSchedule/view/${route.params.id}`)
    categories.value = response
  } catch (err) {
    console.error('カテゴリ情報の取得に失敗しました:', err)
    error.value = 'カテゴリ情報の取得に失敗しました。後ほど再試行してください。'
  }
})
</script>

<style scoped>
form div {
  margin-bottom: 10px;
}

input, textarea, select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
}
</style>