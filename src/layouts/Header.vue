<template>
  <header class="layouts--header">
    <div class="logo">
      <span>CodingStones</span>
    </div>
    <div class="links">
      <span>Обзор</span>
      <span class="solid">Купить</span>
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
    position: sticky;
    display: flex;
    /*width: -webkit-fill-available;*/
    height: 50px;
    left:0;
    right:0;
    top:0;


    background-color: #141416db;
    justify-content: space-between;
    padding: 0 25%;
    z-index: 1;
  }
  .logo {
    display: flex;
    height: 50px;
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