<template>
  <div class="select-container">
    <label :for="id" class="select-label">{{ label }}</label>
    <select
      :id="id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      required
      class="select-box"
    >
      <option
        v-for="option in options"
        :key="option.categoryId"
        :value="option.categoryId"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  id: String,
  modelValue: [String, Number], // 型に応じて変更
  options: {
    type: Array,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.select-container {
  display: flex;
  align-items: center; /* 縦方向の中央揃え */
  justify-content: center; /* 横方向の中央揃え */
  margin-bottom: 15px;
}

.select-label {
  margin-right: 10px; /* ラベルとセレクトボックスの間の余白 */
  color: #2F5E39;
  font-size: 20px;
  font-weight: 900;
}

.select-box {
  width: 220px;
  height: 40px;
  border-radius: 12.5px;
  border: 1px solid #2F5E39;
  background: #E3EBF6;
  color: #2F5E39;
  font-size: 20px;
  font-weight: 900;
  padding-left: 10px;
  -webkit-text-stroke-width: 0.5;
  -webkit-text-stroke-color: #E3EBF6;
  box-shadow: 4px 4px 4px 0px rgba(47, 71, 94, 0.50);
}

select option {
  text-align: center;
  background: #E3EBF6;
  font-family: Inter;
  font-size: 20px;
  font-weight: 900;
}
</style>
