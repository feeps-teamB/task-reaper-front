<template>
  <modal>
    <div v-if="schedule">
      <CategoryRead
      label="カテゴリ"
      id="form-title"
      :value="schedule.category.name"
      />  
      <TextRead
      label="タイトル"
      id="form-title"
      :value="schedule.title"
      />
      <div class="date-row">
        <DateRead
        id="startDate"
        label="開始日"
        :value="schedule.startDate"
        />
        <DateRead
        id="endDate"
        label="終了日"
        :value="schedule.endDate"
        />
      </div>
      <TextRead
      label="概要"
      id="form-title"
      :value="schedule.description"
      />
      <p class="status">{{ schedule.isCompleted ? '完了' : '未完了' }}</p>
      <!-- 編集画面へ移動するボタン -->
      <div class="button-container">
        <BuckButton class="buck-button" type="button" @click="goBack">戻る</BuckButton>
        <SubmitButton class="submit-button" type="submit" @click="goToEdit">編集</SubmitButton>
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
import TextRead from '@/components/TextRead'
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
form {
  display: flex;
  flex-direction: column;
  height: 465px; /* 親要素の高さを100%に */
}

.submit-button {
  margin-top: auto; /* ボタンを一番下に寄せる */
}

.date-row {
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
.status{
  text-align: center;
  color: #2F5E39;
  text-align: center;
  -webkit-text-stroke-width: 0.5;
  -webkit-text-stroke-color: #E3EBF6;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>