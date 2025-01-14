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
  height: 659px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}
</style>