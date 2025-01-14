<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">  
      <div class="modal-header">
        <button class="close-button" @click="closeModal">
          <img src="../static/images/buckbtn.png" alt="TaskReaper" />
        </button>
        <div class="icon">
          <img src="../static/images/icon.png" alt="TaskReaper" />
        </div>
      </div>
      <div class="slot">
      <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// モーダルを閉じて一つ前のページに戻る
const closeModal = () => {
  console.log("親の closeModal が呼ばれました");
  router.back(); // 一つ前の画面に戻る
};

</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background-color: #E3EBF6;
  width: 620px;
  height: 659px;
  stroke-width: 0.5px;
  stroke: #E3EBF6;
  filter: drop-shadow(4px 4px 4px rgba(47, 71, 94, 0.50));
  border-radius:5px;
}
.modal-header{
  height:120px;
  width:100%;
}
.close-button {
  position: absolute;
  top: 22px;
  left: 33px;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  height: 48px;
  width: 48px;
}
.icon{
  position: absolute;
  left: 145px;
  top: 17px;
  width: 337px;
  height: 103px;
}
.slot{
  text-align: center; /* スロット内のテキストを中央揃えにする */
}
</style>
