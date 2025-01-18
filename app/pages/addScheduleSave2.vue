<template>
  <modal>
    <CategoryRead
    label="タイトル"
    id="form-title"
    :value="categoryName"
    />  
    <TextRead
    label="タイトル"
    id="form-title"
    :value="form.title"
    />

    <div class="date-row">
      <DateRead
      id="startDate"
      label="開始日"
      :value="form.startDate"
      />
      <DateRead
      id="endDate"
      label="終了日"
      :value="form.endDate"
      />
    </div>
    
    <TextRead
    label="説明"
    id="form-description"
    :value="form.description"
    />
    <p class="status">{{ form.isCompleted === true || form.isCompleted === 'true' ? '完了' : '未完了' }}</p>

    <div class="button-container">
      <BuckButton class="buck-button" type="button" @click="goBack">戻る</BuckButton>
      <SubmitButton class="submit-button" type="submit" @click="submitForm">作成</SubmitButton>
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
import CategoryRead from '@/components/CategoryRead'
import TextRead from '@/components/TextRead'
import DateRead from '@/components/DateRead'
import SubmitButton from '@/components/SubmitButton.vue'
import BuckButton from '@/components/BuckButton.vue'


// ルーターとルートを取得
const router = useRouter()
const route = useRoute()

// クエリからフォームデータを取得
const form = ref(route.query)

// 保存処理
const submitForm = async () => {
  // 送信データを指定
  const requestData = {
    scheduleId: form.value.scheduleId,
    title: form.value.title,
    startDate: form.value.startDate,
    endDate: form.value.endDate,
    categoryId: form.value.categoryId,
    description: form.value.description,
    isCompleted: form.value.isCompleted === undefined ? false : form.value.isCompleted // undefined の場合、false に設定
  }

  try {
    console.log('送信データ:', requestData) // デバッグ用: コンソールに送信内容を表示
    await $fetch('http://localhost:8080/scheduleEdit', {
      method: 'PUT',
      body: requestData,
    })
    router.push('/mainPage')
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