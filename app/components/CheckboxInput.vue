<template>
  <div class="checkbox-input">
    <label>
      <input
      type="checkbox"
      :id="id"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      />
      <div class="label">
        {{ label }}
      </div>
    </label>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// Props
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  id: {
    type: String,
    required: false,
    default: ''
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.checkbox-input label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox-input input[type="checkbox"] {
  accent-color: #2f5e39; /* チェックボックスの色 */
}


</style>
