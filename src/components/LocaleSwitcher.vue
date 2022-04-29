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
  margin: 0 5px;
}
select {
  font-size: inherit;
  background-color: #080808;
  color: wheat;
  border-radius: 4px;
}
</style>