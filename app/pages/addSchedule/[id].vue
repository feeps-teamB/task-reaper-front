<template>
  <modal>
    <form @submit.prevent="goToConfirm">
      <CategorySelect
      id="category"
      label="カテゴリ"
      :options="categories"
      v-model="form.categoryId"
      />
      <TextInput
      id="title"
      label="タスク名"
      v-model="form.title"
      />
      <div class="date-input-row">
        <DateInput
        id="startDate"
        label="開始日"
        v-model="form.startDate"
        />
        <DateInput
        id="endDate"
        label="終了日"
        v-model="form.endDate"
        />
      </div>
      <TextInput
      id="description"
      label="概要"
      v-model="form.description"
      />
      <div class="button-container">
        <BuckButton class="buck-button" type="button">戻る</BuckButton>
        <SubmitButton class="submit-button" type="submit">作成</SubmitButton>
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
import TextInput from '@/components/TextInput.vue'
import DateInput from '@/components/DateInput.vue'
import CategorySelect from '@/components/CategorySelect.vue'
import SubmitButton from '@/components/SubmitButton.vue'
import BuckButton from '@/components/BuckButton.vue'

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
form {
  display: flex;
  flex-direction: column;
  height: 465px; /* 親要素の高さを100%に */
}

.submit-button {
  margin-top: auto; /* ボタンを一番下に寄せる */
}

.date-input-row {
  display: flex;
  justify-content: space-between;
  align-items: center;   
}
.separator {
  display: flex;
  width: 36px;
  height: 57px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  
  color: #2F5E39;
  text-align: center;
  -webkit-text-stroke-width: 0.5;
  -webkit-text-stroke-color: #E3EBF6;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.button-container {
  display: flex; /* フレックスボックスで子要素を横並びに */
  justify-content: center; /* 子要素を横方向で中央揃え */
  gap: 43px; /* ボタン間のスペースを設定 */
  margin-top: 20px; /* 見栄えのため上部に余白を追加 */
}
</style>