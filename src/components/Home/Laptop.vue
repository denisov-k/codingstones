<template>
  <div class="laptop-container">
    <div class="laptop">
      <img src="@/assets/laptop.svg">
      <div class="laptop-screen" v-on:click="nextScreen">
        <div class="desktop" v-show="activeScreenIndex === 0">
          <img src="@/assets/logo.svg">
        </div>
        <div class="messenger" v-show="activeScreenIndex === 1">

        </div>
        <div class="browser" v-show="activeScreenIndex === 2">
          <div class="analyst-screen"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Laptop",
    data: () => {
      return {
        activeScreenIndex: 0,
      }
    },
    methods: {
      nextScreen() {
        this.activeScreenIndex = this.activeScreenIndex >= 2 ? 0 : this.activeScreenIndex + 1;
      }
    }
  }
</script>

<style scoped>
  .laptop-container {
    text-align: -webkit-center;
  }
  .laptop {
    display: flex;
    position: relative;
    justify-content: center;
    max-width: 860px;
    margin: 30px 5%;
    height: inherit;
    user-select: none;
  }
  .laptop > img {
    width: 100%;
    height: 100%;
    /*z-index: 1;*/
    -webkit-user-drag: none;
  }
  .laptop-screen {
    position: absolute;
    left: 11.5%;
    right: 11.5%;
    top: 3%;
    bottom: 10.5%;

    background-color: white;
  }
  .desktop {
    height: 100%;
    background-color: #4c4c4c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .desktop > img {
    max-width: 300px;
    width: 50%;
    -webkit-user-drag: none;
  }
  .messenger {
    height: 100%;
    background-color: #367b8f;
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
    background-color: rgb(236 238 240);
  }

</style>