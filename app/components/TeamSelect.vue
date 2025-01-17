<template>
    <div class="container">
        <div @click="selectTeam" style="cursor: pointer;" class="select-text">
            <label>
                <span>{{ teamName }}</span>
            </label>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    teamName: String,
    teamId: [String, Number], // teamIdがNumberまたはString型として受け取られる
})

const emit = defineEmits()

const selectTeam = () => {
    emit('update:modelValue', props.teamId) // props.teamIdを正しく参照
}
</script>


<style scoped>
.container {
    margin-bottom: 10px;
}

label {
    color: #2F5E39;
    text-align: left;
    -webkit-text-stroke-width: 0.5;
    -webkit-text-stroke-color: #E3EBF6;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}

.select-text {
    width: 500px;
    height: 57px;
    border-radius: 12.5px;
    border: 1px solid #2F5E39; 
    background: #E3EBF6;
    box-shadow: 4px 4px 4px 0px rgba(47, 71, 94, 0.50);
    
    display: flex; /* Flexbox を有効化 */
    align-items: center; /* 縦方向中央揃え */
    
    color: #2F5E39;
    text-align: left;
    -webkit-text-stroke-width: 0.5;
    -webkit-text-stroke-color: #E3EBF6;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
</style>