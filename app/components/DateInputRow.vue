<template>
    <div class="date-input-row">
      <DateInput
        id="startDate"
        label="開始日"
        :value="startDate"
        @input="$emit('update:startDate', $event.target.value)"
      />
      <DateInput
        id="endDate"
        label="終了日"
        :value="endDate"
        @input="$emit('update:endDate', $event.target.value)"
      />
    </div>
  </template>
  
  <script setup>
  defineProps({
    startDate: String,
    endDate: String,
  })
  
  defineEmits(['update:startDate', 'update:endDate'])
  </script>
  
  
<style scoped>
.date-input-row {
    display: flex;
    justify-content: space-between;
    align-items: center;   
}
.separator {
    display: flex;
    width: 36px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    
    color: #2F5E39;
    text-align: center;
    -webkit-text-stroke-width: 0.5;
    -webkit-text-stroke-color: #E3EBF6;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>
