<template>
  <header class="layouts--header">
    <div class="header-content">
      <div class="logo">
        <span>CodingStones</span>
      </div>
      <div class="links">
        <span>Обзор</span>
        <span class="solid">Купить</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  created: function () {

  }
}
</script>

<style scoped>
  .layouts--header {
    display: flex;
    position: sticky;
    justify-content: center;
    top: 0;
    background-color: #080808c7;
    z-index: 10;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    margin: 0 3%;
  }

  .logo {
    display: flex;
    height: 50px;
    margin: 0 5px;
    color: white;
    opacity: 0.92;
    font-weight: 600;
    font-size: 21px;
    align-self: center;
  }
  .logo span {
    align-self: center;
  }

  .links {
    font-size: 14px;
    color: #b7b7b7;
    align-self: center;
  }
  .links > * {
    cursor: pointer;
    padding: 4px 10px;
    margin: 0 5px;
  }
  .links > .solid {
    border-radius: 15px;
    background-color: #335cd2;
    color: white;
  }
</style>