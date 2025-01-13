<template>
    <div class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">×</button>
        <h2>スケジュール詳細</h2>
        <div v-if="schedule">
          <h3>{{ schedule.title }}</h3>
          <p><strong>説明:</strong> {{ schedule.description }}</p>
          <p><strong>開始日:</strong> {{ schedule.startDate }}</p>
          <p><strong>終了日:</strong> {{ schedule.endDate }}</p>
          <p><strong>ステータス:</strong> {{ schedule.isCompleted ? '完了' : '未完了' }}</p>
          <div>
            <p :style="{ color: schedule.category.color }"><strong>カテゴリ:</strong> {{ schedule.category.name }}</p>
          </div>
        </div>
        <div v-else-if="error">
          <p style="color: red;">{{ error }}</p>
        </div>
        <div v-else>
          <p>ロード中...</p>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  // ルートとルーターを取得
  const route = useRoute()
  const router = useRouter()
  
  // スケジュールデータとエラーメッセージ用の変数
  const schedule = ref(null)
  const error = ref(null)
  
  // モーダルを閉じる処理
  const closeModal = () => {
    // モーダルを閉じるために別のページへ移動（例: ホームに戻る）
    router.push('/')
  }
  
  // データの取得
  onMounted(async () => {
    const scheduleId = route.params.id
    try {
      const response = await $fetch(`http://localhost:8080/scheduleDetail/view/${scheduleId}`)
      schedule.value = response
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