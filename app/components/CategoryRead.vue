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
  align-items: center; /* 縦方向の中央揃え */
  justify-content: center; /* 横方向の中央揃え */
  margin-bottom: 15px;
}

label {
  margin-right: 10px; /* ラベルとセレクトボックスの間の余白 */
  color: #2F5E39;
  font-size: 20px;
  font-weight: 900;
}

.display {
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

/* select option {
  text-align: center;
  background: #E3EBF6;
  font-family: Inter;
  font-size: 20px;
  font-weight: 900;
} */

</style>