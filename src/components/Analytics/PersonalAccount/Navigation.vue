<template>
  <div class="navigation-menu">
    <span v-for="(page, index) in pages" :key="index">{{ page.name }}</span>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    pages: Array
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .navigation-menu {
    padding: 4rem 4rem;
    text-align: left;
    font-size: 1.25rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;

    span {
      padding: 0.5rem 0;
    }
  }
</style>