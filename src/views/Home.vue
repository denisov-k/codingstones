<template>
  <main>
    <h1>Тестовый заголовок</h1>
    <h2>Новая эра в области аналитики</h2>
    <laptop></laptop>
    <div style="width: 300px; height: 300px;"></div>
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

<style>
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 60px;
  }

</style>
