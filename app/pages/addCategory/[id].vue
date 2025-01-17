<template>
  <modal>
    <form @submit.prevent="goToConfirm">
      <TextInput
        id="name"
        label="カテゴリ名"
        v-model="form.name"
      />
      <ColorPalet v-model="form.color" />
      <div class="button-container">
        <BuckButton class="buck-button" type="button">戻る</BuckButton>
        <SubmitButton class="submit-button" type="submit">作成</SubmitButton>
      </div>
    </form>
    <div v-if="error" style="color: red;">
      <p>{{ error }}</p>
    </div>
  </modal>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import modal from '@/components/modal'
  import TextInput from '@/components/TextInput.vue'
  import SubmitButton from '@/components/SubmitButton.vue'
  import BuckButton from '@/components/BuckButton.vue'
  import ColorPalet from '@/components/ColorPalet.vue'

  // ルーターとルートを取得
  const router = useRouter()
  const route = useRoute()

  // フォームデータ
  const form = ref({
    name: '',
    color: '',
    teamId: null, // 初期値は null
  })

  // チームIDをURLから取得してフォームデータにセット
  onMounted(() => {
    form.value.teamId = route.params.id // ここでURLのIDを取得
  })

  // 確認画面へ遷移
  const goToConfirm = () => {
    router.push({
      name: 'addCategorySave',
      query: {
        name: form.value.name,
        color: form.value.color,
        teamId: form.value.teamId, // 取得したteamIdを送信
      }
    })
  }
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

.date-input-row {
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
  