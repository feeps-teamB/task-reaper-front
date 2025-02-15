<template>
  <div class="calendar-container-border">
    <div class="calendar-container">
      <div class="calendar-header">
        <h1 id="custom-month"></h1>
        <h2 v-if="errorMessage">{{ errorMessage }}</h2>
      </div>
      <FullCalendar ref="fullCalendar" :options="calendarOptions" />
    </div>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useSharedData } from "@/stores/useSharedData";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  name: "fullCalendarComp",
  components: {
    FullCalendar,
  },
  data() {
    return {
      sharedDataStore: useSharedData(),
      data: [],
      //カレンダーオプション設定
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        events: [],
        locale: "ja",
        datesSet: this.handleDatesSet,
        eventClick: this.handleEventClick,
        dateClick: this.handleDateClick,
        headerToolbar: false,
        eventContent: this.setEventContent,
      },
      calendar: null,
      events: null,
      errorMessage: null,
      currentYear: null, // 現在表示中の年
      currentMonth: null, // 現在表示中の月
    };
  },
  async mounted() {
    this.getFullCalendar();
  },
  methods: {
    //カレンダー情報取得
    getFullCalendar() {
      this.$nextTick(() => {
        if (this.$refs.fullCalendar) {
          this.calendar = this.$refs.fullCalendar.getApi();
          this.sharedDataStore.setCalendar(this.calendar);
        } else {
          console.error("カレンダーの参照が取得できません");
        }
      });
    },
    //年と月情報取得
    handleDatesSet(info) {
      const month = (info.view.currentStart.getMonth() + 1)
        .toString()
        .padStart(2, "0");
      const year = info.view.currentStart.getFullYear();

      // 表示されている年月が異なる場合のみデータを取得
      if (this.currentYear !== year || this.currentMonth !== month) {
        this.currentYear = year;
        this.currentMonth = month;

        this.sharedDataStore.updateData(year);
        this.sharedDataStore.updateDate(month);
        document.getElementById("custom-month").textContent = month;

        this.fetchEvents();
      }
    },
    //イベントクリック時のリンク生成
    setEventContent(info) {
      const link = document.createElement("a");
      link.href = `/scheduleDetail/${info.event._def.publicId}`;
      link.textContent = info.event.title;
      link.className = "custom-event-link";
      return { domNodes: [link] };
    },
    //スケジュール取得してカレンダーに表示
    async fetchEvents() {
      try {
        const year = this.currentYear;
        const month = this.currentMonth;

        // 既存のイベントをクリア
        if (this.calendar) {
          this.calendar.getEvents().forEach((event) => event.remove());
        }

        const response = await fetch(
          `http://localhost:8080/calendar/view/1/${year}/${month}`
        );
        const data = await response.json();
        this.calendarOptions;
        data.forEach((event) => {
          this.calendar.addEvent({
            id: event.scheduleId,
            start: event.startDate,
            title: event.title,
            end: event.endDate,
            color: event.category.color,
            contentHeight: "auto",
          });
        });
      } catch (error) {
        this.errorMessage = error;
      }
    },
    //日付クリック時の日付詳細への画面遷移
    handleDateClick(info) {
      const date = info.date;
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const url = `/dayDetail/${year}/${month}/${day}`;
      const router = useRouter();
      router.push(url);
    },
  },
};
</script>

<style scoped>
.calendar-container-border {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 4px 4px rgba(47, 71, 94, 0.5);
  border-radius: 12.5px;
  border: 1px white solid;
  margin: auto;
}

.calendar-container {
  height: 70vh;
  width: 60vw;
  margin-right: 5vw;
  margin-left: 5vw;
}

.calendar-container .fc {
  height: 85%;
  width: 100%;
  font-size: 0.8rem;
}

.calendar-header {
  height: 15%;
  display: flex;
  color: white;
  justify-content: center;
}

::v-deep .custom-event-link {
  text-decoration: none;
  color: black;
}
</style>
