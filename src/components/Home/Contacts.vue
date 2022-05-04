<template>
  <div id="contacts">
    <inline-svg :src="require('@/assets/welcome/contacts/send.svg')" />
    <span>{{ $t('title') }}</span>
    <a :href="`mailto:${email}`">{{ email }}</a>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  data() {
    return {
      email: 'contact@codingstones.ru'
    }
  },
}
</script>

<i18n>
  {
    "en": {
      "title": "Contact with us by email"
    },
    "ru": {
      "title": "Свяжитесь с нами по электронной почте"
    }
  }
</i18n>

<style scoped>
  #contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* color: black; */
    background-color: #080808;
    justify-content: center;
    height: 100vh;
  }
  a {
    font-size: 1.25rem;
    color: #335cd2;
    text-decoration: none;
  }
  svg {
    fill: #b5b5b5;
    height: 17.5%;
  }
  span {
    font-size: 1.75rem;
    margin: 2% 0;
  }
</style>