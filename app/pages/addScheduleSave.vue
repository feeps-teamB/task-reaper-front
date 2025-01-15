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

// カテゴリIDを使ってカテゴリ情報を取得
const category = ref(null)
const categoryName = computed(() => {
  if (!category.value) {
    return 'カテゴリ情報が読み込まれていません'
  }
  return category.value.name || '不明'
})

onMounted(async () => {
  const categoryId = form.value.categoryId
  try {
    const response = await $fetch(`http://localhost:8080/categoryDetail/view/${categoryId}`)
    category.value = response
  } catch (err) {
    console.error('カテゴリ情報の取得に失敗しました:', err)
    error.value = 'カテゴリ情報の取得に失敗しました。後ほど再試行してください。'
  }
})
</script>

<style scoped>
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