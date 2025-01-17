<template>
    <modal>
      <h2>Team-Select</h2>
      <div v-for="team in teams" :key="team.teamId">
        <TeamSelect
        :teamName="team.name"
        :teamId="team.teamId"
        v-model="selectedTeamId"
        />
      </div>
      <div v-if="error" style="color: red;">{{ error }}</div>
    </modal>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import modal from '@/components/modal'
  import TeamSelect from '@/components/TeamSelect'
  
  // ルートとルーターを取得
  const router = useRouter()
  const route = useRoute()
  
  // チーム一覧データと選択されたIDを管理
  const teams = ref([])
  const selectedTeamId = ref(null)
  const error = ref(null)
  
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
  
  // 選択されたチームIDで即座に遷移する処理
  watch(selectedTeamId, (newTeamId) => {
    if (newTeamId) {
      router.push(`/addCategory/${newTeamId}`)
    }
  })
  
  // 初期化処理
  onMounted(fetchTeams)
  </script>
  <style scoped>
  
  h2 {
    display: flex;
    align-items: center; /* 縦方向の中央揃え */
    justify-content: center; /* 横方向の中央揃え */
    
    color: #2F5E39;
    
    text-align: center;
    -webkit-text-stroke-width: 0.5;
    -webkit-text-stroke-color: #E3EBF6;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
  }
  
  </style>