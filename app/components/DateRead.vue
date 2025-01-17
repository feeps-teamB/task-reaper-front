<template>
    <div class="display-container">
        <label :for="id">{{ label }}</label>
        <div class="display" :id="id">
            {{ value }}
        </div>
    </div>
</template>
<script setup>
defineProps({
    label: String,
    id: String,
    value: String
})
</script>

<style scoped>
.display-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.display {
    width: 218px;
    height: 56px;
    border-radius: 12.5px;
    border: 1px solid #2F5E39;
    background: #E3EBF6;

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
    padding-left: 10px;
    box-shadow: 4px 4px 4px 0px rgba(47, 71, 94, 0.50);
}

label {
    color: #2F5E39;
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 5px;
}

</style>
