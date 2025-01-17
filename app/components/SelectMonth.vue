<template>
    <div class = "container-border">
        <div class = "select-month-header">
            <button class = "image-button" @click = "gotoPrev">
                <img src = "@/static/images/prevPolygon.svg" />
            </button>
            <h3>{{ sharedYear }}</h3>
            <button class = "image-button" @click = "gotoNext">
                <img src = "@/static/images/nextPolygon.svg" />
            </button>
        </div>
        <div class = "month-container">
            <div class = "month" v-for="month in 12" :key="month">
                <button @click = "gotoMonth(month)">{{ month }}月</button>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'; 
import { useSharedData } from '~/stores/useSharedData';

export default{
    data(){
        return {
            sharedDataStore: useSharedData()
        };
    },
    computed: {
        sharedYear(){
            return this.sharedDataStore.sharedYear;
        }
    },
    methods: {
        //指定した年月へ移動
        gotoMonth(month){
            const targetYear = this.sharedDataStore.sharedYear;
            const targetMonth = month.toString().padStart(2, '0');
            const targetDate = `${targetYear}-${targetMonth}-01`;
            this.sharedDataStore.calendar.gotoDate(targetDate);
        },
        //一月前に戻る
        gotoPrev(){
            this.sharedDataStore.sharedYear --;
        },
        //一月後に進む
        gotoNext(){
            this.sharedDataStore.sharedYear ++;
        }
    }
}
</script>

<style scoped>
.image-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 1vh;
}

.image-button img {
  width: 100%;  /* 画像をボタン内でフィットさせる */
  height: auto; /* アスペクト比を保ったまま高さを自動調整 */
}

.select-month-header{
    display: flex;
    justify-content: space-between;
}

.month-container{
    width:80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 6vw;
}

.container-border{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    box-shadow: 4px 4px 4px rgba(47, 71, 94, 0.50);
    border-radius: 12.50px;
    border: 1px white solid;
    margin: 1vh;
    align-items: center;
    justify-content: center;
}

.month-container .month{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70%;
}

.month button{
    font-size: 1.5vw;
    width: 4vw;
    height: 7vh;
    color: white;
    background: none;
    border: none;
}

h3{
    color: white;
}

</style>