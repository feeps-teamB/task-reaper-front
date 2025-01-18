<template>
  <label for="color">カラー</label>
  <div style="display: flex; align-items: center; gap: 10px;" class="color-box">
    <!-- カラーパレット -->
    <input type="color" v-model="selectedColor" />

    <!-- カラーコード -->
    <input type="text" v-model="selectedColor" placeholder="#000000" class="color-text"/>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: '#000000', // デフォルトのカラーコード
    },
  },
  data() {
    return {
      selectedColor: this.modelValue,
    };
  },
  watch: {
    // selectedColorが変わったら親コンポーネントに通知
    selectedColor(newColor) {
      this.$emit('update:modelValue', newColor);
    },
  },
};
</script>

<style scoped>
.text-input-container {
    margin-bottom: 10px;
}

label{
    color: #2F5E39;
    text-align: left;
    
    -webkit-text-stroke-width: 0.5;
    -webkit-text-stroke-color: #E3EBF6;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
.color-box{
    width: 500px;
    height: 57px;
    border-radius: 12.5px;
    border: 1px solid #2F5E39; 
    background: #E3EBF6;
    box-shadow: 4px 4px 4px 0px rgba(47, 71, 94, 0.50);
    

}
.color-text{
  border: none;
  outline: none;
  background-color: #E3EBF6;
  color: #2F5E39;
    text-align: left;
    -webkit-text-stroke-width: 0.5;
    -webkit-text-stroke-color: #E3EBF6;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
</style>