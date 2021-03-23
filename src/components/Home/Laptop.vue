<template>
  <div class="laptop">
    <img src="@/assets/laptop.svg">
    <div class="laptop-screen">
      <div class="browser">
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Laptop"
}
</script>

<style scoped>
  .laptop {
    display: flex;
    position: relative;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
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
    top: 3%;
    bottom: 10.5%;

    background-color: black;
  }
  .browser {
    background-image: url('../../assets/browser.svg');

    height: 100%;
  }
</style>