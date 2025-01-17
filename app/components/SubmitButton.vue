<template>
    <div class="btn-ui">
        <button :type="type" class="form-button">
            <slot />
        </button>
    </div>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
})
</script>

<style scoped>
.form-button {
    width: 204px;
    height: 56px;
    border-radius: 12.5px;
    border: 1px solid #2F5E39;
    background: #2F5E39;
    box-shadow: 4px 4px 4px 0px rgba(47, 71, 94, 0.50);
    
    display: inline-flex; /* インラインブロックにして、テキストが中央揃えになるようにする */
    justify-content: center; /* 水平方向に中央揃え */
    align-items: center; /* 垂直方向に中央揃え */
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #E3EBF6;
    -webkit-text-stroke-width: 1;
    -webkit-text-stroke-color: #2F5E39;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.form-button:hover {
    background-color: #0056b3;
}
.btn-ui{
    display: flex; /* インラインブロックにして、テキストが中央揃えになるようにする */
    justify-content: center; /* 水平方向に中央揃え */
    align-items: center; /* 垂直方向に中央揃え */
}
</style>
