<template>
  <div id="smart-feed" class="container">
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
            <div class="feed-item" v-for="(widget, widgetIndex) in widgetsList" :key="widgetIndex"
                 :class="[ widget === selectedWidget ? 'selected' : '',
                  widget.selectable ? 'selectable' : '' ]">

              <component  :is="widget.component" @click.native="selectWidget(widget)" ref="widgets">
              </component>
              <div class="widget-footer">
                <div class="tags">
                  <div class="tag" v-for="(tagId, tagIndex) in widget.tags" :key="tagIndex"
                       :style="{ color: tags[tagId].color }" @click="onTagClick(tagId)">
                    {{ tags[tagId].name }}
                  </div>
                </div>
                <div class="views">
                  <inline-svg :src="require('@/assets/analytics/smart_feed/views-icon.svg')" />
                  <span class="views-count">{{ widget.views }}</span>
                </div>
                <div class="favorite-button" :class="[ widget.inFavorite ? 'active' : '']">
                  <inline-svg :src="require('@/assets/analytics/smart_feed/favorite-icon.svg')" />
                </div>
              </div>
            </div>
            <div class="no-result" v-if="isNoResultShow">{{ $t('search.noResult') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

let FlightChart = () => import('@/components/Analytics/SmartFeed/FlightChart'),
    Scatter3D = () => import('@/components/Analytics/SmartFeed/Scatter3D'),
    LineRace = () => import('@/components/Analytics/SmartFeed/LineRace'),
    BubbleChart = () => import('@/components/Analytics/SmartFeed/BubbleChart'),
    BarChart = () => import('@/components/Analytics/SmartFeed/BarChart'),
    Map = () => import('@/components/Analytics/SmartFeed/Map'),
    SankeyChart = () => import('@/components/Analytics/SmartFeed/SankeyChart'),
    Gauge = () => import('@/components/Analytics/SmartFeed/Gauge');

export default {
  name: "SmartFeed",
  components: { Multiselect },
  computed: {
    selectedWidget() {
      return this.widgets[this.selectedWidgetIndex];
    },
    widgetsList() {
      let selectedTags = this.selectedTags.map(item => item.name);

      let filteredWidgets = this.widgets.filter((item, index) =>
          !this.selectedTags.length || item.tags.some(tagIndex => selectedTags.includes(this.tags[tagIndex].name))
      );

      let favoriteWidgets = [],
          nonFavoriteWidgets = [];

      for (let i = 0; i < filteredWidgets.length; i++) {
        if (filteredWidgets[i].inFavorite)
          favoriteWidgets.push(filteredWidgets[i])
        else
          nonFavoriteWidgets.push(filteredWidgets[i]);
      }

      let sortedWidgets = [
        ...favoriteWidgets.sort((a, b) => b.views - a.views),
        ...nonFavoriteWidgets.sort((a, b) => b.views - a.views)
      ];

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
  created() {
    this.getTitles();
  },
  methods: {
    selectWidget(widget) {
      this.selectedWidgetIndex = this.widgets.indexOf(widget);
    },
    getTitles() {

    },
    onTagClick(id) {
      const tag = this.tags[id];

      if (!this.selectedTags.includes(tag))
        this.selectedTags.push(tag);
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
  $text-color: #fefefe;
  $container-color: #00000085;

  #smart-feed {
    padding: 1%;
    background-color: white;
    background-image: url("@/assets/analytics/smart_feed/background.png");
    background-position: center;

    .title {
      color: $text-color;
      margin: 20px 10px;
    }
    .subtitle {
      color: $text-color;
      margin: 20px 10px;
    }
  }

  .widget-container.expanded /deep/ {
    .widget {
      background-color: #121212;
    }
  }
  .widget-container /deep/ {
    height: 600px;

    .widget {
      background-color: $container-color;
    }
    .widget-header {
      .title {
        color: $text-color;
      }

      .button {
        fill: $text-color;
      }
    }
  }

  .widgets-search /deep/ {
    margin: 10px 0;

    .input {
      position: relative;
      width: 100%;
      background-color: $container-color;
      color: #dadada;
      border-radius: 5px;
      border: unset;
      font-size: 14px;
      box-sizing: border-box;
      cursor: pointer;
      padding: 8px 30px 8px 8px;
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
      color: #999;
      margin-top: 4px;
      border-style: solid;
      border-width: 5px 5px 0;
      border-color: #999 transparent transparent;
      content: "";
    }
    .multiselect__tags {
      font-size: 14px;
      padding: 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
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
      background-color: #1c1c1c;
      margin: 5px;
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

  .widgets-list::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  .widgets-list::-webkit-scrollbar-track {
    background-color: black;
    border-radius: 25px;
  }

  .widgets-list::-webkit-scrollbar-thumb {
    background: #4e4e4e;
    border-radius: 25px;
  }

  .widgets-feed {
    max-height: 610px;
    display: flex;
    flex-direction: column;
  }
  .widgets-list /deep/ {
    overflow: auto;
    /*margin: 10px 0 0 0;*/
    display: flex;
    flex-direction: column;

    .feed-item.selectable {
      .widget-content {
        pointer-events: none;
        zoom: 0.75;
      }
      .expanded .widget-content {
        zoom: 1;
      }
    }
    .feed-item {
      margin: 5px 10px 5px 0;

      .widget-container {
        margin: 0;
        height: 300px;
        cursor: pointer;

        .widget:hover {
          background-color: #00000063;
        }

        .widget-buttons {
          display: none;
        }
      }
      .widget-footer {
        display: flex;
        margin: 4px 0;

        .tags {
          display: inline-flex;

          .tag {
            display: inline-block;
            background-color: $container-color;
            border-radius: 5px;
            font-size: 10px;
            padding: 3px 5px;
            margin: 0 2px;
            cursor: pointer;
          }
          .tag:first-child {
            margin-left: 0;
          }
          .tag:last-child {
            margin-right: 0;
          }
          .tag:hover {
            background-color: #00000063;
          }
        }
        .favorite-button {
          width: 20px;
          background-color: $container-color;
          border-radius: 5px;
          padding: 2px 1px;
          margin-right: 0;
          margin-left: 5px;
          display: flex;
          align-items: center;
          cursor: pointer;

          svg {
            fill: #8484844a;
            width: 100%;
            height: 14px;
          }
        }
        .favorite-button.active {
          svg {
            fill: #941414;
          }
        }
        .favorite-button:hover {
          svg {
            fill: #ae495b;
          }
        }
        .views {
          display: inline-flex;
          align-items: center;
          margin-right: 0;
          margin-left: auto;
          background-color: $container-color;
          border-radius: 5px;
          padding: 2px 4px;

          svg {
            fill: #fefefe;
            width: 100%;
            height: 14px;
          }

          .views-count {
            font-size: 10px;
            color: #fefefe;
            margin-left: 3px;
          }
        }
      }
    }
    .feed-item.selected {
      display: none;
    }
    .feed-item:first-child {
      margin-top: 0;
    }
    .feed-item:last-child {
      margin-bottom: 0;
    }
    .no-result {
      width: 100%;
      background-color: #0000008c;
      color: #dadada;
      padding: 8px 15px;
      border-radius: 5px;
      box-sizing: border-box;
    }
  }

  @media only screen and (max-width: 1024px) {
    .widgets-search {
      margin: 10px;
    }
    .widgets-list /deep/ {
      margin: 10px;
      white-space: nowrap;
      flex-direction: row;

      .widget-container {
        width: 350px;
        height: 400px;
        display: inline-flex;
      }
      .feed-item {
        margin: 0 5px 10px 5px;
      }
      .feed-item:last-child {
        margin: 0 0 10px 5px;
      }
      .feed-item:first-child {
        margin: 0 5px 10px 0;
      }
    }
  }
</style>