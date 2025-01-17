<template>
    <div class = "calendar-container-border">
        <div class = "calendar-container">
            <div class = "calendar-header">
                <h1 id="custom-month"></h1>
                <h2 v-if = "errorMessage">{{ errorMessage }}</h2>
            </div>
            <FullCalendar ref = "fullCalendar" :options="calendarOptions" />
        </div>
    </div>
</template>
  
<script>
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import { useSharedData } from '@/stores/useSharedData';

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
          events: [],
          locale: 'ja',
          datesSet: this.handleDatesSet,
          eventClick: this.handleEventClick,
          headerToolbar: false,
          eventContent: (info) => {
            const url = `/scheduleDetail/${info.event._def.publicId}`;
            const wrapper = document.createElement("div");
            wrapper.innerHTML = `<nuxt-link to="${url}">${info.event.title}</nuxt-link>`;
            return { domNodes: [wrapper] }; // DOMノードを返す
          }
        },
        calendar: null,
        events: null,
        errorMessage: null
      };
    },
    async mounted() {
      this.getFullCalendar();
      this.fetchEvents();
    },
    methods: {
      //カレンダー情報取得
      getFullCalendar(){
        this.$nextTick(() => {
          if (this.$refs.fullCalendar) {
            this.calendar = this.$refs.fullCalendar.getApi();
            this.sharedDataStore.setCalendar(this.calendar);
          } else {
            console.error('カレンダーの参照が取得できません');
          }
        });
      },
      //年と月情報取得
      handleDatesSet(info) {
        const month = info.view.currentStart.toLocaleString('default', { month: 'long' });
        const year = info.view.currentStart.getFullYear();
        this.sharedDataStore.updateData(year);
        document.getElementById('custom-month').textContent = month;
      },
      //スケジュール取得してカレンダーに表示
      async fetchEvents() {
        try {
          const response = await fetch('http://localhost:8080/calendar/view/1/2024/12');
          const data = await response.json();
          data.forEach(event => {
            this.calendar.addEvent({
              id: event.scheduleId,
              start: event.startDate,
              title: event.title,
              end: event.endDate
            });
          });
        } catch (error) {
          this.errorMessage = error;
        }
      },
      //クリック時のスケジュール情報取得
      handleEventClick(info){
        const eventInfo = info.event;
        console.log('イベントタイトル:', eventInfo.title);
        console.log('開始日時:', eventInfo.start);
        console.log('ID:', eventInfo.id); 
      },
    }
  };
</script>

<style>
.calendar-container-border{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 4px 4px 4px rgba(47, 71, 94, 0.50);
    border-radius: 12.50px;
    border: 1px white solid;
}

.calendar-container{
    height: 70vh;
    width: 60vw;
    margin-right: 5vw;
    margin-left: 5vw;
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

.fc-event-main a{
    text-decoration: none;
    color: black;
}
</style>