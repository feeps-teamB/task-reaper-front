<template>
    <div class="readonly-text-container">
        <label :for="id">{{ label }}</label>
        <br />
        <div class="readonly-text" :id="id">
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
.readonly-text-container {
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

.readonly-text {
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


<!-- 使い方
<TextRead
label="入力された名前"
id="readonly-user-name"
:value="name"
/> -->