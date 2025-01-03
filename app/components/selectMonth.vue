<template>
    
        <div v-for="month in 12" :key="month">
            {{ month }}月
        </div>
    
</template>

<script>

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
</style>