<template>
  <div id="about-us" class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-lg-6">
        <img src="" />
      </div>
      <div class="col-xs-12 col-md-6 col-lg-6">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {

    }
  },
}
</script>

<i18n>
{
  "en": {
    "title": "About us"
  },
  "ru": {
    "title": "О нас"
  }
}
</i18n>

<style scoped>
#about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* color: black; */
  background-color: #080808;
  justify-content: center;
  height: 100vh;
}
</style>