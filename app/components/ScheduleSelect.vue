<template>
  <div class="container">
    <div @click="selectSchedule" class="select-text">
      <label>
        <span class="schedule-title">{{ dayDetail.title }}</span>
        <span class="schedule-dates">{{
          `${formatDate(dayDetail.startDate)} - ${formatDate(
            dayDetail.endDate
          )}`
        }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  dayDetail: Object,
  scheduleId: [String, Number], // scheduleIdがNumberまたはString型として受け取られる
});

const emit = defineEmits();

const selectSchedule = () => {
  emit("update:modelValue", props.dayDetail.scheduleId); // props.schedleIdを正しく参照
};

// 日付を MM/DD 形式に変換する関数
const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("ja-JP", {
    month: "2-digit",
    day: "2-digit",
  });
  return formattedDate;
};
</script>

<style scoped>
.container {
  margin-bottom: 10px;
  display: flex;
  justify-content: center; /* 横方向に中央揃え */
}

label {
  color: #2f5e39;
  text-align: left;
  -webkit-text-stroke-width: 0.5;
  -webkit-text-stroke-color: #e3ebf6;
  font-family: Inter;
  font-size: 20px;
  font-weight: 900;
  line-height: normal;
}

.select-text {
  width: 100%; /* コンテナ全体の幅を使用 */
  max-width: 500px; /* 最大幅を500pxに制限 */
  height: 57px;
  border-radius: 12.5px;
  border: 1px solid #2f5e39;
  background: #e3ebf6;
  box-shadow: 4px 4px 4px 0px rgba(47, 71, 94, 0.5);

  display: flex; /* Flexbox を有効化 */
  align-items: center; /* 縦方向中央揃え */
  justify-content: space-between; /* アイテムを左右に配置 */

  color: #2f5e39;
  text-align: left;
  font-family: Inter;
  font-size: 20px;
  font-weight: 900;
  line-height: normal;

  padding: 0 15px; /* 左右の余白を追加 */
}

.schedule-title {
  font-size: 18px; /* タイトルのフォントサイズ */
}

.schedule-dates {
  font-size: 16px; /* 日付のフォントサイズ */
  color: #555555; /* 日付の色を少しグレーに */
  margin-left: 5px; /* タイトルとの間に少し余白 */
}
</style>
