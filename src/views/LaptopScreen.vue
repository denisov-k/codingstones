<template>
  <div class="laptop-welcome-screen">
    <h1>Тестовый заголовок</h1>
    <h2>Новая эра в области аналитики</h2>
    <laptop></laptop>
  </div>
</template>

<script>
import Laptop from "@/components/Home/Laptop";

export default {
  components: {
    Laptop
  },
  name: "LaptopScreen"
}
</script>

<style scoped>
  .laptop-welcome-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
</style>