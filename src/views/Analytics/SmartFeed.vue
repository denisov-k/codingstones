<template>
  <div id="smart-feed" class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-md-8 col-lg-8">
        <div id="selected-widget-container">
          <keep-alive>
            <component :is="selectedWidget.component"></component>
          </keep-alive>
        </div>
      </div>
      <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="widgets-feed">
          <div class="widgets-search">
            <multiselect class="input" v-model="selectedTags" :options="tags"
                         :multiple="true" label="name" :placeholder="$t('search.placeholder')"
                         trackBy="name" tagPosition="bottom" :closeOnSelect="false" :limit="3"
                         :searchable="false" :limitText="(count) => $t('search.limitText', { count })">
              <template v-slot:tag="{ option, remove }">
                <div class="tag">
                  <span class="option__title" :style="{ color: option.color }">{{ option.name }}</span>
                  <i aria-hidden="true" tabindex="1" class="multiselect__tag-icon" @click="remove(option)"></i>
                </div>
              </template>
            </multiselect>
          </div>
          <div class="widgets-list">
            <feed-item :widget="widget" v-for="(widget, widgetIndex) in widgetsList"
                       :class="[ widget === selectedWidget ? 'selected' : '']" :key="widgetIndex"></feed-item>
            <div class="no-result" v-if="isNoResultShow">{{ $t('search.noResult') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import FeedItem from "@/components/Analytics/SmartFeed/FeedItem";

let Sunburst = () => import('@/components/Analytics/SmartFeed/Sunburst'),
    FlightChart = () => import('@/components/Analytics/SmartFeed/FlightChart'),
    Scatter3D = () => import('@/components/Analytics/SmartFeed/Scatter3D'),
    LineRace = () => import('@/components/Analytics/SmartFeed/LineRace'),
    BubbleChart = () => import('@/components/Analytics/SmartFeed/BubbleChart'),
    BarChart = () => import('@/components/Analytics/SmartFeed/BarChart'),
    Map = () => import('@/components/Analytics/SmartFeed/Map'),
    SankeyChart = () => import('@/components/Analytics/SmartFeed/SankeyChart'),
    Gauge = () => import('@/components/Analytics/SmartFeed/Gauge');

export default {
  name: "SmartFeed",
  components: { FeedItem, Multiselect },
  computed: {
    selectedWidget() {
      return this.widgets[this.selectedWidgetIndex];
    },
    widgetsList() {
      let selectedTags = this.selectedTags.map(item => item.name);

      let filteredWidgets = this.widgets.filter((item, index) =>
          !this.selectedTags.length || item.tags.some(tagIndex => selectedTags.includes(this.tags[tagIndex].name))
      );

      let sortedWidgets = filteredWidgets.sort((a, b) => b.views - a.views);

      return sortedWidgets;
    },
    isNoResultShow() {
      return !this.widgetsList.length || (this.widgetsList.length === 1 && this.widgetsList[0] === this.selectedWidget);
    }
  },
  data: function () {
    const $t = this.$t.bind(this)

    return {
      searchInputValue: "",
      selectedWidgetIndex: 0,
      selectedTags: [],
      tags: [
        { name: $t('tags.diagram'), color: '#2269a2' },
        { name: $t('tags.income'), color: '#ca5d10' },
        { name: $t('tags.3d'), color: '#299d2e' },
        { name: 'tag_4', color: '#9433ab' },
        { name: $t('tags.gauge'), color: '#a7babd' },
        { name: $t('tags.map'), color: '#afd232' },
      ],
      widgets: [
        { component: LineRace, tags: [0, 1], inFavorite: true, views: 79, selectable: true },
        { component: Sunburst, tags: [3], inFavorite: true, views: 85, selectable: true },
        { component: Gauge, tags: [4], inFavorite: false, views: 22, selectable: true },
        { component: Map, tags: [5], inFavorite: false, views: 40, selectable: true },
        { component: FlightChart, tags: [2, 3], inFavorite: false, views: 59, selectable: true },
        { component: BubbleChart, tags: [0, 3], inFavorite: true, views: 116, selectable: true },
        { component: BarChart, tags: [0, 1], inFavorite: false, views: 34, selectable: true },
        { component: Scatter3D, tags: [0, 2], inFavorite: false, views: 37, selectable: true },
        { component: SankeyChart, tags: [0, 3], inFavorite: false, views: 26, selectable: true },
      ],
    }
  },
  methods: {
    selectWidget(widget) {
      this.selectedWidgetIndex = this.widgets.indexOf(widget);
    },
    onTagClick(id) {
      const tag = this.tags[id];

      if (!this.selectedTags.includes(tag))
        this.selectedTags.push(tag);
    },
    onFavoriteButtonClick(widget) {
      widget.inFavorite = !widget.inFavorite;
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "Active widget",
    "subtitle": "Available data",
    "search": {
      "placeholder": "Search by tags",
      "limitText": "and {count} more",
      "noResult": "No result more"
    },
    "tags": {
      "diagram": "Diagram",
      "income": "Income",
      "gauge": "Gauge",
      "3d": "3D",
      "map": "Map"
    }
  },
  "ru": {
    "title": "Активный виджет",
    "subtitle": "Доступные данные",
    "search": {
      "placeholder": "Поиск по тегам",
      "limitText": "и {count} ещё",
      "noResult": "Результатов больше нет"
    },
    "tags": {
      "diagram": "Диаграмма",
      "income": "Доход",
      "gauge": "Измеритель",
      "3d": "3D",
      "map": "Карта"
    }
  }
}
</i18n>

<style lang="scss" scoped>
  $text-color: #aeaeae;
  $container-color: #00000070;

  #smart-feed {
    display: flex;
    width: 100%;
    /*height: 80vh;*/
    box-sizing: border-box;
    padding: 1%;
    background-color: #373737;
    background-image: url("@/assets/analytics/smart_feed/background.png");
    background-position: center;

    .row {
      /*width: 100%;*/
      /*margin: 0;*/
    }

    .title {
      font-size: 1rem;
      color: $text-color;
      margin: 20px 10px;
    }
    .subtitle {
      font-size: 1rem;
      color: $text-color;
      margin: 20px 10px;
    }
    .widget-container /deep/ {
      height: 75vh;
      margin: 0.7rem;
      padding: 0;

      .widget {
        background-color: $container-color;
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
    }
    .widget-container.expanded /deep/ {
      .widget {
        background-color: #1f1f1f;
      }
    }
  }



  .widgets-search /deep/ {
    margin: 1rem 0;

    :focus-visible {
      outline: unset;
    }
    .input {
      position: relative;
      width: 100%;
      background-color: $container-color;
      color: $text-color;
      border-radius: 5px;
      border: unset;
      font-size: 1rem;
      box-sizing: border-box;
      cursor: pointer;
      padding: 5px 30px 5px 5px;
    }
    .multiselect__select {
      position: absolute;
      right: 10px;
      width: 10px;
      height: 10px;
      top: 50%;
      transform: translate(0%, -50%);
      transition: transform .2s ease;
    }
    .multiselect__select:before {
      position: relative;
      right: 0;
      top: 65%;
      margin-top: 4px;
      border-style: solid;
      border-width: 5px 5px 0;
      border-color: #fbfbfb transparent transparent;
      content: "";
    }
    .multiselect__tags {
      padding: 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      .multiselect__strong {
        margin-left: 5px;
      }
      .multiselect__placeholder {
        padding: 2px 3px;
      }
    }
    .multiselect__element {
      margin: 1px 0;
    }
    .multiselect__element:first-child {
      margin-top: 0;
    }
    .multiselect__element:last-child {
      margin-bottom: 0;
    }
    .multiselect__element:has(.multiselect__option--selected) {
      background-color: green;
    }
    .multiselect__element:hover {
      background-color: #292929;
    }
    .multiselect__content-wrapper {
      background: #000000eb;
      width: 100%;
      position: absolute;
      left: 0;
      z-index: 1001;
      border-radius: 0 0 5px 5px;
      top: calc(100% - 5px);
      color: white;
    }
    .multiselect__content {
      width: 100%;
      list-style-type: none;
      padding-inline-start: 0;
      margin: auto;
    }
    .multiselect__tags-wrap {
      display: flex;
      flex-wrap: wrap;
    }
    .multiselect__strong {

    }
    .multiselect__option {
      display: flex;
      cursor: pointer;
      padding: 5px;
      box-sizing: border-box;
    }
    .multiselect__option--selected {
      background: #103b1b;
    }
    .tag {
      background-color: #0f0f0f;
      margin: 3px;
      padding: 3px 5px;
      border-radius: 5px;
      display: flex;
      height: fit-content;
      align-items: center;

      .option__title {

      }
      .option__title:first-child {
        margin-left: 0;
      }
      .option__title:last-child {
        margin-right: 0;
      }
      .multiselect__tag-icon {
        font-weight: 700;
        font-style: normal;
        width: 16px;
        text-align: center;
        transition: all .2s ease;
        border-radius: 5px;
        height: 16px;
        margin: 0 0 0 2px;
        display: flex;
        justify-content: center;
      }
      .multiselect__tag-icon:after {
        content: "\D7";
        color: #5f5f5f;
        line-height: 16px;
      }
      .multiselect__tag-icon:hover {
        background-color: #0000004f;
      }
    }
  }

  .widgets-feed {
    max-height: 75vh;
    display: flex;
    flex-direction: column;
  }
  .widgets-list {
    overflow: auto;
    /*margin: 10px 0 0 0;*/
    display: flex;
    flex-direction: column;

    .no-result {
      width: 100%;
      background-color: #0000008c;
      color: #dadada;
      padding: 8px 15px;
      border-radius: 5px;
      box-sizing: border-box;
    }

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: black;
      border-radius: 25px;
    }

    &::-webkit-scrollbar-thumb {
      background: #4e4e4e;
      border-radius: 25px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .widgets-search {
      /*margin: 10px;*/
    }
    .widgets-list /deep/ {
      /*margin: 10px;*/
      white-space: nowrap;
      flex-direction: row;

      .widget-container {
        width: 350px;
        height: 300px;
        display: inline-flex;
      }
    }
  }
</style>