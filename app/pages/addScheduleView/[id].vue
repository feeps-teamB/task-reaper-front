<template>
    <div class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">×</button>
        <h2>新規スケジュール作成</h2>
        <form @submit.prevent="submitForm">
          <div>
            <label for="title">スケジュールタイトル</label>
            <input type="text" id="title" v-model="form.title" required />
          </div>
          <div>
            <label for="description">スケジュールの詳細説明</label>
            <textarea id="description" v-model="form.description" required></textarea>
          </div>
          <div>
            <label for="startDate">開始日</label>
            <input type="date" id="startDate" v-model="form.startDate" required />
          </div>
          <div>
            <label for="endDate">終了日</label>
            <input type="date" id="endDate" v-model="form.endDate" required />
          </div>
          <div>
            <label for="category">カテゴリ</label>
            <select id="category" v-model="form.categoryId" required>
              <option v-for="category in categories" :key="category.categoryId" :value="category.categoryId">
                {{ category.name }}
              </option>
            </select>
          </div>
          <div>
            <button type="submit">保存</button>
          </div>
        </form>
        <div v-if="error" style="color: red;">
          <p>{{ error }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  // ルーターを取得
  const router = useRouter()
  
  // フォームデータ
  const form = ref({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    categoryId: null,
  })
  
  // カテゴリデータとエラーメッセージ用の変数
  const categories = ref([])
  const error = ref(null)
  
  // モーダルを閉じる処理
  const closeModal = () => {
    // モーダルを閉じるために別のページへ移動（例: ホームに戻る）
    router.push('/')
  }
  
  // フォーム送信処理
  const submitForm = async () => {
    try {
      // APIにPOSTリクエストを送信
      await $fetch('http://localhost:8080/addScheduleSave', {
        method: 'POST',
        body: form.value,
      })
      // 成功したらホームに遷移
      router.push('/')
    } catch (err) {
      console.error('スケジュール作成に失敗しました:', err)
      error.value = 'スケジュールの作成に失敗しました。後ほど再試行してください。'
    }
  }
  
  // カテゴリデータの取得
  onMounted(async () => {
    try {
      const response = await $fetch('http://localhost:8080/addSchedule/view/1')  // カテゴリ情報のAPI
      categories.value = response
    } catch (err) {
      console.error('カテゴリ情報の取得に失敗しました:', err)
      error.value = 'カテゴリ情報の取得に失敗しました。後ほど再試行してください。'
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
  
  
  form div {
    margin-bottom: 10px;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
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
  