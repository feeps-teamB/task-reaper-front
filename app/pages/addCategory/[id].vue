<template>
    <modal>
        <h2>カテゴリ追加</h2>
        <form @submit.prevent="goToConfirmation">
            <div>
                <label for="name">カテゴリ名</label>
                <input type="text" id="name" v-model="form.name" required />
            </div>
            <div>
                <label for="color">カテゴリカラー</label>
                <input type="color" id="color" v-model="form.color" required />
            </div>
            <button type="submit">次へ</button>
        </form>
    </modal>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import modal from '@/components/modal'

const router = useRouter()
const route = useRoute()

const form = ref({
    name: '',
    color: '#000000',
    teamId: route.query.teamId || null,
})

const goToConfirmation = () => {
    router.push({
        path: '/addCategorySave',
        query: { ...form.value },
    })
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
}
</style>

