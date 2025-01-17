<template>
    <div class="text-input-container">
        <label :for="id">{{ label }}</label>
        <br/>
        <input
        type="text"
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        required
        />
    </div>
</template>

<script setup>
defineProps({
    label: String,
    id: String,
    modelValue: String,
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.text-input-container {
    margin-bottom: 10px;
}

label{
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
input{
    width: 500px;
    height: 57px;
    border-radius: 12.5px;
    border: 1px solid #2F5E39; 
    background: #E3EBF6;
    box-shadow: 4px 4px 4px 0px rgba(47, 71, 94, 0.50);
    
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
