<template>
    <div class = "header-container">
        <img class = "logo" src="@/static/images/logo.png" alt="Logo" />
        <input class = "search-box" type = "text">
        <div class="menu-container">
            <button class="menu-rectangle">
            <div class="menu-lines">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </button>
        </div>
    </div>
    <div class = "border"></div>
</template>

<script>
  export default{
    name: "header"
  }
</script>

<style scoped>
.logo{
    padding-top: 1vw;
    width: 20%;
}

.border{
    width: 100%;
    height: 100%;
    background: #E3EBF6;
    box-shadow: 4px 4px 4px rgba(47, 71, 94, 0.50);
    border-radius: 12.50px;
    border: 1px #2F5E39 solid
}

.header-container{
    display:flex;
    justify-content: center;
    align-items: center;
}

.search-box{
    margin-left: 6vw;
    margin-right: 6vw;
    height: 4vh;
    width: 50vw;
    border-radius: 5px;
}

.menu-lines{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-lines span {
  display: block;
  width: 30px; /* 線の幅 */
  height: 10px; /* 線の高さ */
  border-radius: 2px; /* 角を少し丸める */
}

/* 親コンテナ */
.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ボタンデザイン */
.menu-rectangle {
  width: 5vh; /* ボタンの幅 */
  height: 5vh; /* ボタンの高さ */
  background-color: #4CAF50; /* 緑色 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.menu-rectangle:hover {
  background-color: #45a049;
}

/* 三本線を配置するためのコンテナ */
.menu-lines {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 3vh; /* 線全体の縦幅 */
}

/* 三本線のスタイル */
.menu-lines span {
  display: block;
  width: 4vh; /* 線の長さ */
  height: 0.5vh; /* 線の太さ */
  background-color: black; /* 線の色 */
  border-radius: 5px; /* 角を丸める */
}
</style>