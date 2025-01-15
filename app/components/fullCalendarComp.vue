<template>
  <div class = "calendar-container">
    <div class = "calendar-header">
      <h1 id="custom-month"></h1>
    </div>
    
    <FullCalendar ref = "fullCalendar" :options="calendarOptions" />
  </div>
</template>
  
<script>
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import { useSharedData } from '@/stores/useSharedData';
  import { toRaw } from "vue";
  

  export default {
    name: "fullCalendarComp",
    components: {
      FullCalendar,
    },
    data() {
      return {
        sharedDataStore: useSharedData(),
        data: [],
        calendarOptions: {
          plugins: [dayGridPlugin, timeGridPlugin],
          initialView: 'dayGridMonth',
          events: [
            { title: 'Event 1', start: '2025-01-01' },
            { title: 'Event 2', start: '2025-01-02' },
            //{ title: this.data[0].title, start: this.data[0].startDate, end: this.data[0].endDate}
          ],
          locale: 'ja',
          datesSet: this.handleDatesSet,
          headerToolbar: false
        },
        calendar: null
      };
    },
    async mounted() {
      $fetch('http://localhost:8080/calendar/view/1/2024/12').then((res) => {
        this.data = res;
        console.log("ok");
        this.updateCalendarEvents();
        //console.log(this.calendarOptions.events);
      })
  },
  methods: {
    handleDatesSet(info) {
      const month = info.view.currentStart.toLocaleString('default', { month: 'long' });
      const year = info.view.currentStart.getFullYear();

      this.sharedDataStore.updateData(year); // 年をストアに更新
      document.getElementById('custom-month').textContent = month;
      
    },
    updateCalendarEvents() {
      // `data` を使用してカレンダーイベントを更新
      //console.log(this.data);
      const events = this.data.map((item) => ({
        title: item.title,
        start: item.startDate,
        end: item.endDate,
      }));

      //console.log(events);
      //console.log(this.calendarOptions.events);

      this.calendarOptions = {
        ...this.calendarOptions,
        events: events, // 新しいイベントを設定
      };
      
      this.$nextTick(() => {
      console.log(this.calendarOptions);
      const calendarApi = this.$refs.fullCalendar.getApi();
      //scalendarApi.refetchEvents();
    });
    },
    getSchedules(){
        
    }
    /*getYear(calendar) {
      if (calendar) {
        const currentDate = calendar.getDate();
        return currentDate.getFullYear();
      } else {
        console.error("カレンダーが初期化されていません");
      }
    },
    checkCalendar(){
        if (this.$refs.fullCalendar) {
          console.log("カレンダーが初期化されました");
          this.calendar = this.$refs.fullCalendar.getApi();
          this.year = this.getYear(this.calendar);
          console.log(this.year);
        } else {
          console.log("カレンダーがまだ初期化されていません。再試行します。");
        }
    },
    updateSharedData(){
        this.sharedDataStore.updateData(this.year);
    }
        */
  }
  };
</script>

<style>
.calendar-container{
  height: 70vh;
  width: 50vw;
  margin: 0 auto;
  margin-right: 10vw;
  
}  

.calendar-container .fc{
  height: 100%;
  width: 100%;
  font-size: 0.8rem;
}

.calendar-header{
  display: flex;
  color: white;
  justify-content: center;
}
</style>
  