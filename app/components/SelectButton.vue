<template>
    <div class = "button-container">
        <a class = "button" href = "/teamSelectSchedule/1">Add</a>
        <a class = "button" href = "/teamDetail/1">Teams</a>
        <a class = "button" href = "/teamSelectCategory/1">Category</a>
    </div>
</template>

<style scoped>
.button-container{
    width: 80%;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 4px 4px rgba(47, 71, 94, 0.50);
    border-radius: 12.50px;
    border: 1px white solid;
    margin: 1vh;
}

.button{
    display: flex;
    padding: 1vw;
    margin: 1vw;
    font-size: 1vw;
    border: 1px;
    border-radius: 10px;
    color: white;
    background-color: #2F5E39;
    justify-content: center;
    text-decoration: none;
}
</style>