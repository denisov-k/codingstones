<template>
  <div id="about-us" class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-lg-6">
        <img src="@/assets/about_us/worker.jpg" />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-6">
        <div>
          <h3>{{ $t('title') }}</h3>
          <span class="description">{{ $t('description') }}</span>
        </div>
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
    "title": "About us",
    "description": ""
  },
  "ru": {
    "title": "О нас",
    "description": "Мы занимаемся разработкой программных продуктов в области бизнес-аналитики и управления данными. К нам обращаются компании, стремящиеся повысить эффективность своего бизнеса."
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
h3 {
  font-size: 25px;
  display: inline-flex;
  margin: 25px 0;
  float: left;
  line-height: 25px;
}
.description {
  text-align: left;
  font-size: 14px;
}

.row {
  width: 100%;
  margin: 0;
}

.row > div:nth-child(2) > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 25px;
}

img {
  width: calc(100% - 50px);
  border-radius: 10px;
  box-shadow: 4px 4px 0px 1px #173f84;
  margin: 25px;
}
</style>