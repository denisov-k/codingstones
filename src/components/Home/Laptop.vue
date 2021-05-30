<template>
  <div class="laptop-layout">
    <div class="laptop">
      <img src="@/assets/laptop.svg">
      <div class="laptop-screen">
        <div class="browser">
          <div class="analyst-screen"></div>
        </div>
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
  .laptop-layout {
    text-align: -webkit-center;
  }
  .laptop {
    background-image: url('../../assets/laptop.svg');

    display: flex;
    position: relative;
    justify-content: center;
    max-width: 1000px;
    margin: 0 5%;
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

    background-color: white;
  }
  .browser {
    background-image: url('../../assets/browser.svg');
    height: 100%;
    position: relative;
  }
  .analyst-screen {
    position: absolute;
    top: 7%;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #999ffc;
  }

</style>