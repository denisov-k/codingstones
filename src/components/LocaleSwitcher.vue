<template>
  <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data () {
    return { langs: ['ru', 'en'] }
  }
}
</script>

<style scoped>
.locale-switcher {
  display: inline-block;
  margin: 0 0.5vw;
}
select {
  font-size: inherit;
  background-color: #080808;
  color: wheat;
  border-radius: 0.25rem;
  padding: 0.1vh 0.3vw;
}
</style>