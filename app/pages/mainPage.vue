<template>
  <div class = "header">
    <Header />
  </div>
  <div class = "main">
    <div class = "selectContainer">
      <SelectMonth />
      <SelectButton />
    </div>
    <div>
      <FullCalendarComp />
    </div>  
  </div>
</template>

<script>
  import FullCalendarComp from '@/components/FullCalendarComp'
  import SelectMonth from '@/components/SelectMonth'
  import SelectButton from '@/components/SelectButton'
  import Header from '@/components/Header'
  
  export default {
    name: 'mainPage',
    components: {
      FullCalendarComp,
      SelectMonth,
      SelectButton,
      Header
    }
  }
</script>

<style scoped>
.header{
  background-color: #E3EBF6;
}

.main{
  display: flex;
  justify-content: space-between;
  padding: 6vh;
  background-color: #7FA08B;
}

.selectContainer{
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>

