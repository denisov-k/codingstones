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
    "description": "We are developing software products in the field of Business Intelligence and Data management. We are approached by companies seeking to improve the efficiency of their business."
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
  padding: 15vh 0;
  box-sizing: border-box;
  background-color: #080808;
  justify-content: center;
  min-height: 100vh;
}
h3 {
  font-size: 2rem;
  display: inline-flex;
  margin: 0;
  float: left;
}
.description {
  text-align: left;
  font-size: 1.25rem;
  margin: 4% 0;
  color: #e0e0e0;
}

.row {
  width: 100%;
  margin: 0;
}

.row > div:nth-child(2) > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 10%;
}

img {
  width: 80%;
  border-radius: 1rem;
  box-shadow: 4px 4px 0 1px #173f84;
  margin: 0 10% 10%;
}
</style>