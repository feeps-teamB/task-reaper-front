<template>
  <label for="color">カラー</label>
  <div style="display: flex; align-items: center; gap: 10px;">
    <!-- カラーパレット -->
    <input type="color" v-model="selectedColor" />

    <!-- カラーコード -->
    <input type="text" v-model="selectedColor" placeholder="#000000"/>
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
