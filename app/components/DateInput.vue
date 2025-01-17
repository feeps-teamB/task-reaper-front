<template>
  <div class="date-input-container">
    <label :for="id">{{ label }}</label>
    <input
    type="date"
    :id="id"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  id: String,
  modelValue: String, // v-model対応
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.date-input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

input {
  width: 218px;
  height: 56px;
  border-radius: 12.5px;
  border: 1px solid #2F5E39;
  background: #E3EBF6;
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
