<template>
  <modal>
    <div v-if="team">
      <TextRead
      label="チーム名"
      id="form-title"
      :value="team.name"
      />
      <TextRead
      label="概要"
      id="form-title"
      :value="team.description"
      />
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
import TextRead from '@/components/TextRead'

// ルートとルーターを取得
const route = useRoute()

// スケジュールデータとエラーメッセージ用の変数
const team = ref(null)
const error = ref(null)

// データの取得
onMounted(async () => {
  const teamId = route.params.id
  try {
    const response = await $fetch(`http://localhost:8080/teamsDetail/view/${teamId}`)
    team.value = response
  } catch (err) {
    console.error('スケジュール情報の取得に失敗しました:', err)
    error.value = 'スケジュール情報の取得に失敗しました。後ほど再試行してください。'
  }
})
</script>

<style scoped>
/*なぜかこれ消すとバグる */
</style>