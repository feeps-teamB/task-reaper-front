<template>
    <modal>
        <h2>カテゴリ保存確認</h2>
        <ul>
            <li><strong>カテゴリ名:</strong> {{ form.name }}</li>
            <li><strong>カテゴリカラー:</strong> <span :style="{ color: form.color }">{{ form.color }}</span></li>
            <li><strong>チームID:</strong> {{ form.teamId }}</li>
        </ul>
        <button @click="submitForm">保存</button>
        <button @click="goBack">戻る</button>
        <div v-if="error" style="color: red;">
            <p>{{ error }}</p>
        </div>
    </modal>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import modal from '@/components/modal'

const router = useRouter()
const route = useRoute()

const form = ref({
    name: route.query.name || '',
    color: route.query.color || '',
    teamId: route.query.teamId || null,
})

const error = ref(null)



const goBack = () => {
    router.push({
        path: '/addCategory',
        query: { ...form.value },
    })
}

const submitForm = async () => {
    try {
        await $fetch('http://localhost:8080/addCategorySave', {
            method: 'POST',
            body: form.value,
        })
        alert('カテゴリが正常に保存されました！')
        router.push('/')
    } catch (err) {
        console.error('カテゴリの保存に失敗しました:', err)
        error.value = 'カテゴリの保存に失敗しました。後ほど再試行してください。'
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}

button {
    margin-right: 10px;
}
</style>
