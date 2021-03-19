<template>
  <main>
    <h1>Тестовый заголовок</h2>
    <h2>Новая эра в области аналитики</h2>
    <div class="laptop">
      <img src="@/assets/laptop.svg">
    </div>
    <div style="width: 300px; height: 300px;"></div>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {

  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style>
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 60px;
  }
  .laptop {
    height: 1000px;
  }
  .laptop img {
    width: 1300px;
  }
</style>
