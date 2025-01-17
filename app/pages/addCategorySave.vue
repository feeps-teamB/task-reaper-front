<template>
  <modal>
    <TextRead
    label="カテゴリ名"
    id="name"
    :value="form.name"
    />
    <TextRead
    label="カラー"
    id="color"
    :value="form.color"
    />
    <TextRead
    label="ID"
    id="teamId"
    :value="form.teamId"
    />
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
import TextRead from '@/components/TextRead'
import SubmitButton from '@/components/SubmitButton.vue'
import BuckButton from '@/components/BuckButton.vue'


// ルーターとルートを取得
const router = useRouter()
const route = useRoute()

// クエリからフォームデータを取得
const form = ref(route.query)

// 保存処理
const submitForm = async () => {
  try {
    await $fetch('http://localhost:8080/addCategorySave', {
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
  position: absolute;
  top: 500px;
  left:85px;
  display: flex; /* フレックスボックスで子要素を横並びに */
  justify-content: center; /* 子要素を横方向で中央揃え */
  gap: 43px; /* ボタン間のスペースを設定 */
  margin-top: 20px; /* 見栄えのため上部に余白を追加 */
}
</style>