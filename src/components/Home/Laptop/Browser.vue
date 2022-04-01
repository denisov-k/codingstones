<template>
  <div class="browser">
    <div class="analyst-screen"></div>
  </div>
</template>

<script>
export default {
  name: "Browser"
}
</script>

<style scoped>
  .browser {
    background-image: url("@/assets/welcome/browser.svg");
    height: 100%;
    position: relative;
  }
  .analyst-screen {
    position: absolute;
    top: 7%;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(236 238 240);
  }
</style>