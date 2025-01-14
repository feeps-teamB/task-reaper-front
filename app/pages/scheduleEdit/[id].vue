<template>
<<<<<<< HEAD
    <modal>
        <h2>スケジュール編集</h2>
        <form @submit.prevent="goToConfirm">
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
                <button type="submit">確認画面へ</button>
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
=======
    <div class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">×</button>
        <h2>スケジュール編集</h2>
        <form @submit.prevent="goToConfirm">
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
            <button type="submit">確認画面へ</button>
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
import { useRouter, useRoute } from 'vue-router'
>>>>>>> 898059d (add: スケジュール編集機能実装)

const route = useRoute()
const router = useRouter()

const form = ref({
<<<<<<< HEAD
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    categoryId: null,
=======
  title: '',
  description: '',
  startDate: '',
  endDate: '',
  categoryId: null,
>>>>>>> 898059d (add: スケジュール編集機能実装)
})

const categories = ref([])  // カテゴリを保持する配列
const error = ref(null)

<<<<<<< HEAD
onMounted(async () => {
    const scheduleId = route.params.id
    const teamId = route.query.teamId  // teamIdを取得
    
    try {
        // スケジュール詳細データの取得
        const scheduleResponse = await $fetch(`http://localhost:8080/scheduleDetail/view/${scheduleId}`)
        form.value = {
            title: scheduleResponse.title,
            description: scheduleResponse.description,
            startDate: scheduleResponse.startDate,
            endDate: scheduleResponse.endDate,
            categoryId: scheduleResponse.category.id,  // スケジュールのカテゴリIDをセット
        }
        
        // チームIDに基づくカテゴリの取得
        const categoriesResponse = await $fetch(`http://localhost:8080/addSchedule/view/${teamId}`)
        categories.value = categoriesResponse  // カテゴリデータを格納
        
    } catch (err) {
        console.error('データの取得に失敗しました:', err)
        error.value = 'データの取得に失敗しました。後ほど再試行してください。'
    }
})

// 確認画面へ遷移
const goToConfirm = () => {
    router.push({ name: 'addScheduleSave', query: { ...form.value } })
}
</script>

<style scoped>
form div {
    margin-bottom: 10px;
}

input, textarea, select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
=======
  // モーダルを閉じる処理
  const closeModal = () => {
    // モーダルを閉じるために別のページへ移動（例: ホームに戻る）
    router.push('/')
  }

onMounted(async () => {
  const scheduleId = route.params.id
  const teamId = route.query.teamId  // teamIdを取得
  
  try {
    // スケジュール詳細データの取得
    const scheduleResponse = await $fetch(`http://localhost:8080/scheduleDetail/view/${scheduleId}`)
    form.value = {
      title: scheduleResponse.title,
      description: scheduleResponse.description,
      startDate: scheduleResponse.startDate,
      endDate: scheduleResponse.endDate,
      categoryId: scheduleResponse.category.id,  // スケジュールのカテゴリIDをセット
    }

    // チームIDに基づくカテゴリの取得
    const categoriesResponse = await $fetch(`http://localhost:8080/addSchedule/view/${teamId}`)
    categories.value = categoriesResponse  // カテゴリデータを格納

  } catch (err) {
    console.error('データの取得に失敗しました:', err)
    error.value = 'データの取得に失敗しました。後ほど再試行してください。'
  }
})

  // 確認画面へ遷移
  const goToConfirm = () => {
    router.push({ name: 'addScheduleSave', query: { ...form.value } })
  }
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
  height: auto;
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
>>>>>>> 898059d (add: スケジュール編集機能実装)
}
</style>
