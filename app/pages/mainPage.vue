<template>
  <div class = "main">
    <div class = "selectContainer">
      <div class = "monthGrid">
      <SelectMonth />
      </div>
      <SelectButton />
    </div>
    <div class = "calendar">
      <FullCalendar :options="calendarOptions" />
    </div>
  </div>
</template>

<script>
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import SelectMonth from '@/components/selectMonth'
  import SelectButton from '@/components/selectButton'
  
  export default {
    name: 'mainPage',
    components: {
      FullCalendar,
      SelectMonth,
      SelectButton
    },
    data() {
      return {
        calendarOptions: {
          plugins: [dayGridPlugin, timeGridPlugin],
          initialView: 'dayGridMonth',
          events: [
          { title: 'Event 1', start: '2024-12-01', end: '2024-12-01'},
          { title: 'Event 2', date: '2024-12-29' }
          ]
        },
        calendar: null
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.calendar = this.$refs.fullcalendar.getApi();
        getYear(this.calendar);
      });
    },
    methods: {
      getYear(calendar){
        if (calendar) {
        const currentDate = calendar.getDate(); // 現在の中央日付を取得
        const year = currentDate.getFullYear(); // 年を取得
        console.log('現在の年:', year);
        return year;
        }else{
          console.log("カレンダーが初期化されていません");
        }
      }
    }
  }
</script>

<style>

.monthGrid{
    width: 20%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
}

.monthGrid > div{
    font-size: 1rem;
}

.main{
  display: flex;
  justify-content: space-between;
}

.selectContainer{
  width: 100%;
  display: flex;
  flex-direction: column;
}

.calendar{
  width: 40%;
  height: 40%;
  position: absolute;
  margin: 0 auto;
  top: 250px;
  right: 500px;
}

.fc{
  font-size: 0.8rem;
}
</style>