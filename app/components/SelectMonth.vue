<template>
    <p>{{ sharedYear }}</p>
    <div class = "month-container">
        <div class = "month" v-for="month in 12" :key="month">
            <button>{{ month }}月</button>
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
    }
}
</script>

<style>
.month-container{
    width: 50%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 6vw;
}

.month-container .month{
    font-size: 1vw;
}
</style>
