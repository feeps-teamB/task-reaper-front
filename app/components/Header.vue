<template>
  <div class = "header-container">
      <img class = "logo" src="@/static/images/logo.png" alt="Logo" />
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

.header-container{
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>