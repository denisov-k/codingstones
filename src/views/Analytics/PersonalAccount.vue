<template>
  <div id="personal-account">
    <div class="sidebar">
      <profile :userdata="userdata"></profile>
      <navigation :pages="pages"></navigation>
    </div>
    <div class="main">
      <h3>{{ $t('title', { name: userdata.firstname }) }}</h3>
      <span class="subtitle">{{ $t('subtitle', { weekday, date }) }}</span>
      <line-chart></line-chart>
    </div>
  </div>
</template>

<script>
import TreeChart from "@/components/Analytics/PersonalAccount/TreeChart";
import PieChart from "@/components/Analytics/PersonalAccount/PieChart";
import BarChart from "@/components/Analytics/PersonalAccount/BarChart";
import Profile from "@/components/Analytics/PersonalAccount/Profile";
import Heatmap from "@/components/Analytics/PersonalAccount/Heatmap";
import Navigation from "@/components/Analytics/PersonalAccount/Navigation";
import LineChart from "@/components/Analytics/PersonalAccount/LineChart";

export default {
  name: "PersonalAccount",
  components: {
    Heatmap,
    Profile,
    Navigation,
    LineChart,
    TreeChart,
    PieChart,
    BarChart,
  },
  data: () => {
    return {
      title: 'Пример аналитического экрана',
      subtitle: 'Ещё один заголовок',
      pages: [
        { name: 'General' },
        { name: 'Team' },
        { name: 'Events' },
      ],
      userdata: {
        firstname: 'Bess',
        surname: 'Willis',
        description: 'willisbs@gmail.com',
        avatar: require('@/assets/analytics/personal_account/avatar.jpg'),
        stats: [
          { name: 'blood', value: '-B' },
          { name: 'height', value: '170' },
          { name: 'weight', value: '60' },
        ]
      }
    }
  },
  computed: {
    weekday() {
      let date = new Date();
      return date.toLocaleString(window.navigator.language, { weekday: 'long' });
    },
    date() {
      const date = new Date();
      return date.toLocaleDateString(window.navigator.language, { dateStyle: 'long' });
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "Hello, {name}",
    "subtitle": "Today is {weekday}, {date}"
  },
  "ru": {
    "title": "Привет, {name}",
    "subtitle": "Сегодня {weekday}, {date}"
  }
}
</i18n>

<style lang="scss" scoped>
  $text-color: #545454;

  #personal-account {
    width: 100%;
    box-sizing: border-box;
    padding: 1%;
    background-color: #d5dadf;
    /*background-image: url("@/assets/analytics/personal_account/background.png");*/
    flex-direction: row;

    .title {
      color: $text-color;
      margin: 20px 10px;
    }
    .subtitle {
      color: $text-color;
      margin: 20px 10px;
    }
    .widget-container /deep/ {
      margin: 0.7rem;

      .widget {
        background-color: unset;
        border: 1px solid #00000052;
      }
      .widget-header {
        .title {
          font-size: 1rem;
          color: $text-color;
        }
        .button {
          height: 1rem;
          padding: 0 0.4rem;
          fill: $text-color;
        }
      }

      &.expanded .widget {
        background-image: url("@/assets/analytics/personal_account/background.png");
      }
    }
    .sidebar {
      width: 15rem;
    }
    .main {
      flex: 1;
      text-align: left;

      h3 {
        font-size: 1.25rem;
        margin: 0.7rem;
      }
      .subtitle {
        font-size: 1rem;
        margin: 0.7rem;
      }
    }
  }
</style>