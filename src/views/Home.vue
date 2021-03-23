<template>
  <main>
    <h1>Тестовый заголовок</h1>
    <h2>Новая эра в области аналитики</h2>
    <laptop></laptop>
  </main>
</template>

<script>
import Laptop from "@/components/Home/Laptop";

export default {
  name: "Home",
  components: {
    Laptop
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

<style scoped>
  h1 {
    font-size: 20px;
    margin: 0;
  }
  h2 {
    font-size: 56px;
    margin: 20px 30px;
  }
</style>
