<template>
  <div class="laptop">
    <img src="@/assets/laptop.svg">
    <div class="laptop-screen"></div>
  </div>
</template>

<script>
export default {
name: "Laptop"
}
</script>

<style scoped>
  .laptop {
    /*height: 72vh;*/
    display: flex;
    position: relative;
    justify-content: center;
    margin: 0 70px;
  }
  .laptop img {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .laptop-screen {
    position: absolute;
    left: 11.5%;
    right: 11.5%;
    top: 20px;
    bottom: 66px;
    background-color: #335cd2;
  }
</style>