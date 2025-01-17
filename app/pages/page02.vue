<template>
    <div class="calendar-container">
      <!-- ヘッダー -->
      <header class="calendar-header">
        <div class="logo">Task-Reaper</div>
        <input class="search-bar" type="text" placeholder="Search..." />
        <div class="menu-icon">☰</div>
      </header>
  
      <div class="calendar-layout">
        <!-- サイドバー -->
        <aside class="calendar-sidebar">
          <div class="year-selector">
            <button @click="previousYear">&lt;</button>
            <span>{{ currentYear }}年</span>
            <button @click="nextYear">&gt;</button>
          </div>
          <div class="month-selector">
            <button
              v-for="(month, index) in months"
              :key="month"
              :class="{ active: index + 1 === currentMonth }"
              @click="setMonth(index + 1)"
            >
              {{ month }}
            </button>
          </div>
          <div class="actions">
            <button>Add</button>
            <button>Teams</button>
            <button>Category</button>
          </div>
        </aside>
  
        <!-- メインカレンダー -->
        <main class="calendar-main">
          <FullCalendar
            :options = "calendarOptions"
          />
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  import FullCalendar from "@fullcalendar/vue3";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import timeGridPlugin from '@fullcalendar/timegrid'
  
  // 現在の年月
  const currentDate = ref(new Date());
  const currentYear = computed(() => currentDate.value.getFullYear());
  const currentMonth = computed(() => currentDate.value.getMonth() + 1);
  
  //カレンダーオプション
  const calendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin],
  initialView: "dayGridMonth",
  events: [
    { title: "Event 1", start: "2025-01-01" },
    { title: "Event 2", start: "2025-01-02" },
  ],
});

  // 月のリスト
  const months = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ];
  
  // 年月の操作
  const previousYear = () => {
    currentDate.value.setFullYear(currentDate.value.getFullYear() - 1);
    currentDate.value = new Date(currentDate.value);
  };
  const nextYear = () => {
    currentDate.value.setFullYear(currentDate.value.getFullYear() + 1);
    currentDate.value = new Date(currentDate.value);
  };
  const setMonth = (month) => {
    currentDate.value.setMonth(month - 1);
    currentDate.value = new Date(currentDate.value);
  };
  
  // サンプルイベント
  const events = ref([
    { title: "会議", start: `${currentYear.value}-12-03` },
    { title: "タスク1", start: `${currentYear.value}-12-10` },
    { title: "クリスマス", start: `${currentYear.value}-12-25`, color: "green" },
  ]);
  
  // 日付クリック時のハンドラー
  const handleDateClick = (info) => {
    alert(`${info.dateStr} がクリックされました！`);
  };
  </script>
  
  <style scoped>
  /* 全体レイアウト */
  .calendar-container {
    display: flex;
    flex-direction: column;
    font-family: Arial, sans-serif;
    background-color: #e6e6e6;
    height: 100vh;
  }
  
  /* ヘッダー */
  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #4a7c59;
    color: white;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .search-bar {
    flex: 1;
    margin: 0 10px;
    padding: 5px;
    border-radius: 5px;
    border: none;
  }
  
  .menu-icon {
    font-size: 1.5rem;
  }
  
  /* レイアウト */
  .calendar-layout {
    display: flex;
    height: calc(100% - 50px);
  }
  
  /* サイドバー */
  .calendar-sidebar {
    width: 200px;
    background-color: #b3cbb9;
    padding: 10px;
  }
  
  .year-selector {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .month-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  
  .month-selector button {
    width: 45px;
    height: 30px;
    background-color: #4a7c59;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .month-selector button.active {
    background-color: #2e5939;
  }
  
  .actions {
    margin-top: 20px;
  }
  
  .actions button {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #4a7c59;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* メインカレンダー */
  .calendar-main {
    flex: 1;
    padding: 20px;
    background-color: #ffffff;
  }
  </style>
  