<template>
  <modal>
    <h2>{{ `${year}/${month}/${day}` }}</h2>
    <div v-for="dayDetail in dayDetails" :key="dayDetail.scheduleId">
      <!-- カテゴリ名に色を適用 -->
      <div :style="{ color: dayDetail.category.color, fontSize: '18px' }">
        {{ dayDetail.category.name }}
      </div>
      <ScheduleSelect :dayDetail="dayDetail" v-model="selectedScheduleId" />
    </div>
    <div v-if="error" style="color: red">{{ error }}</div>
  </modal>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import modal from "@/components/modal";
import ScheduleSelect from "~/components/ScheduleSelect";

// ルートとルーターを取得
const router = useRouter();
const route = useRoute();

// チーム一覧データと選択されたIDを管理
const dayDetails = ref([]);
const selectedScheduleId = ref(null);
const error = ref(null);

// 年・月・日を管理
const year = ref(route.params.year);
const month = ref(route.params.month);
const day = ref(route.params.day);

// チーム一覧を取得する処理
const fetchDayDetails = async () => {
  const year = route.params.year;
  const month = route.params.month;
  const day = route.params.day;

  try {
    const response = await $fetch(
      `http://localhost:8080/calendar/view/1/${year}/${month}`,
      { params: { day } } // クエリパラメータを渡す
    );
    dayDetails.value = response;
  } catch (err) {
    console.error("日付詳細情報の取得に失敗しました:", err);
    error.value =
      "日付詳細情報の取得に失敗しました。後ほど再試行してください。";
  }
};

// 選択されたスケジュールIDで即座に遷移する処理
watch(selectedScheduleId, (newScheduleId) => {
  if (newScheduleId) {
    router.push(`/scheduleDetail/${newScheduleId}`);
  }
});

// 初期化処理
onMounted(fetchDayDetails);
</script>
<style scoped>
h2 {
  display: flex;
  align-items: center; /* 縦方向の中央揃え */
  justify-content: center; /* 横方向の中央揃え */

  color: #2f5e39;

  text-align: center;
  -webkit-text-stroke-width: 0.5;
  -webkit-text-stroke-color: #e3ebf6;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
}
</style>
