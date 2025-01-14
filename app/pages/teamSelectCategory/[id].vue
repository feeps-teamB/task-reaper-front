<template>
    <modal>
        <h2>チーム選択</h2>
        <form @submit.prevent="goToCategoryForm">
            <div v-for="team in teams" :key="team.teamId">
                <label>
                    <input
                    type="radio"
                    name="team"
                    :value="team.teamId"
                    v-model="selectedTeamId"
                    />
                    {{ team.name }}
                </label>
            </div>
            <button type="submit" :disabled="!selectedTeamId">次へ</button>
        </form>
        <div v-if="error" style="color: red;">
            <p>{{ error }}</p>
        </div>
    </modal>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import modal from '@/components/modal'

const route = useRoute()
const router = useRouter()

const teams = ref([])
const selectedTeamId = ref(null)
const error = ref(null)

const goToCategoryForm = () => {
    router.push(`/addCategory?teamId=${selectedTeamId.value}`)
}

onMounted(async () => {
    const userId = route.params.id
    try {
        const response = await $fetch(`http://localhost:8080/teamSelect/view/${userId}`)
        teams.value = response
    } catch (err) {
        console.error('チーム情報の取得に失敗しました:', err)
        error.value = 'チーム情報の取得に失敗しました。後ほど再試行してください。'
    }
})
</script>