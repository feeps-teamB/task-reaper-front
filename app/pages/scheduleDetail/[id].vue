<template>
  <modal>
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
           <!-- 編集画面へ移動するボタン -->
          <button @click="goToEdit" class="edit-button">編集</button>
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
  const schedule = ref(null)
  const error = ref(null)
  
    // 編集画面へ遷移する処理
  const goToEdit = () => {
  // チームIDを取得し、編集画面に送る
  const teamId = schedule.value.category.team.teamId
  router.push(`/scheduleEdit/${route.params.id}?teamId=${teamId}`)
}
  console.log('route.params.id:', route.params.id)

  
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
  