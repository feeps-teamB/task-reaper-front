<template>
  <modal>
    <h2>スケジュール詳細</h2>
    <div v-if="category">
      <p><strong>チーム名:</strong> {{ category.team.name }}</p>
      <p><strong>カテゴリ:</strong> {{ category.name }}</p>
      <div>
        <p :style="{ color: category.color }"><strong>RGB:</strong> {{ category.color }}</p>
      </div>
    </div>
    <div v-else-if="error">
      <p style="color: red;">{{ error }}</p>
    </div>
    <div v-else>
      <p>ロード中...</p>
    </div>
  </modal>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import modal from '@/components/modal'

// ルートとルーターを取得
const route = useRoute()
const router = useRouter()

// スケジュールデータとエラーメッセージ用の変数
const category = ref(null)
const error = ref(null)

// データの取得
onMounted(async () => {
  const categoryId = route.params.id
  try {
    const response = await $fetch(`http://localhost:8080/categoryDetail/view/${categoryId}`)
    category.value = response
  } catch (err) {
    console.error('スケジュール情報の取得に失敗しました:', err)
    error.value = 'スケジュール情報の取得に失敗しました。後ほど再試行してください。'
  }
})
</script>

<style scoped>
/*なぜかこれ消すとぶっ壊れる */
</style>