<template>
        <div class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">×</button>
      <h2>チーム選択</h2>
      <form @submit.prevent="submitSelection">
        <div v-for="team in teams" :key="team.teamId">
          <label>
            <input
              type="radio"
              name="team"
              :value="team.teamId"
              v-model="selectedTeamId"
            />
            {{ team.name }}
          </label>
        </div>
        <div v-if="error" style="color: red;">{{ error }}</div>
        <div class="actions">
          <button type="button" @click="closeModal">キャンセル</button>
          <button type="submit" :disabled="!selectedTeamId">確定</button>
        </div>
      </form>
    </div>
</div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  
  // ルートとルーターを取得
  const router = useRouter()
  const route = useRoute()
  
  // チーム一覧データと選択されたIDを管理
  const teams = ref([])
  const selectedTeamId = ref(null)
  const error = ref(null)
  
    // モーダルを閉じる処理
    const closeModal = () => {
    // モーダルを閉じるために別のページへ移動（例: ホームに戻る）
    router.push('/')
  }

  
  // チーム一覧を取得する処理
  const fetchTeams = async () => {
    const id = route.params.id // URLの[id]パラメータを取得
    try {
      const response = await $fetch(`http://localhost:8080/teamSelect/view/${id}`)
      teams.value = response
    } catch (err) {
      console.error('チーム情報の取得に失敗しました:', err)
      error.value = 'チーム情報の取得に失敗しました。後ほど再試行してください。'
    }
  }
  
  // 選択されたチームIDで遷移する処理
  const submitSelection = () => {
    if (selectedTeamId.value) {
      router.push(`/addScheduleView/${selectedTeamId.value}`)
    }
  }
  
  // 初期化処理
  onMounted(fetchTeams)
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
  