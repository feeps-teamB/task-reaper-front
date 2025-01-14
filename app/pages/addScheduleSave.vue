<template>
  <modal>
    <h2>スケジュール確認</h2>
    <ul>
      <li><strong>タイトル:</strong> {{ form.title }}</li>
      <li><strong>説明:</strong> {{ form.description }}</li>
      <li><strong>開始日:</strong> {{ form.startDate }}</li>
      <li><strong>終了日:</strong> {{ form.endDate }}</li>
      <li><strong>カテゴリ:</strong> {{ categoryName }}</li>
    </ul>
    <div>
      <button @click="submitForm">保存</button>
      <button @click="goBack">戻る</button>
    </div>
    <div v-if="error" style="color: red;">
      <p>{{ error }}</p>
    </div>
  </modal>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import modal from '@/components/modal'
// ルーターとルートを取得
const router = useRouter()
const route = useRoute()

// クエリからフォームデータを取得
const form = ref(route.query)

// 保存処理
const submitForm = async () => {
  try {
    await $fetch('http://localhost:8080/addScheduleSave', {
      method: 'POST',
      body: form.value,
    })
    router.push('/')
  } catch (err) {
    console.error('保存に失敗しました:', err)
    error.value = '保存に失敗しました。後ほど再試行してください。'
  }
}

// 戻る処理
const goBack = () => {
  router.back()
}

// エラー
const error = ref(null)

// カテゴリ名を取得
const categoryName = computed(() => {
  const categories = JSON.parse(localStorage.getItem('categories')) || []
  const category = categories.find(cat => cat.categoryId == form.value.categoryId)
  return category ? category.name : '不明'
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 620px;
  height: auto;
  position: relative;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

button {
  margin-right: 10px;
}
</style>
