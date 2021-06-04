<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view :key="defaultViewKey" class="content"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>

export default {
  computed: {
    defaultViewKey: function() {
      return this.$route.name;
    }
  },
  created: function () {
  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style>
@font-face {
  font-family: "SF Pro";
  src: url('./assets/SFProDisplay-Regular.woff2');
}

html, body {
  height: 100%;
  overflow: hidden;
}
body {
  margin: auto;
  background-color: #080808;
}

#app {
  font-family: "SF Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.content {

}
</style>