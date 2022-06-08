<template>
  <div class="feed-item" :class="[ widget.selectable ? 'selectable' : '' ]">

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
      <div class="favorite-button" :class="[ widget.inFavorite ? 'active' : '']"
           @click="onFavoriteButtonClick(widget)">
        <inline-svg :src="require('@/assets/analytics/smart_feed/favorite-icon.svg')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedItem",
  props: {
    widget: Object,
  },
  computed: {
    tags() {
      return this.$parent.tags;
    }
  },
  mounted() {

  },
  methods: {
    selectWidget(widget) {
      return this.$parent.selectWidget(widget);
    },
    onTagClick(id) {
      return this.$parent.onTagClick(id);
    },
    onFavoriteButtonClick(widget) {
      return this.$parent.onFavoriteButtonClick(widget);
    }
  }
}
</script>

<style lang="scss" scoped>
  $text-color: #aeaeae;
  $container-color: #00000070;

  .feed-item.selectable /deep/ {
    .widget-content {
      pointer-events: none;
      zoom: 0.75;
    }
    .expanded .widget-content {
      zoom: 1;
    }
  }
  .feed-item /deep/ {
    margin: 0.5rem 0.5rem 0.5rem 0;

    .widget-container {
      margin: 0;
      height: 25rem;
      cursor: pointer;

      .widget {
        background-color: $container-color;
      }
      .widget:hover {
        background-color: #00000091;
      }
      .widget-header {
        .title {
          font-size: 1rem;
          color: $text-color;
          margin: 0.75rem;
        }

        .widget-buttons {
          display: none;

          .button {
            fill: $text-color;
          }
        }
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
          fill: #a53c3c;
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
          fill: #9d9d9d;
          width: 100%;
          height: 14px;
        }

        .views-count {
          font-size: 10px;
          color: #9d9d9d;
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

  @media only screen and (max-width: 1024px) {
    .feed-item {
      margin: 0 0.5rem 0.5rem 0.5rem;
    }
    .feed-item:last-child {
      margin: 0 0 0.5rem 0.5rem;
    }
    .feed-item:first-child {
      margin: 0 0.5rem 0.5rem 0;
    }
  }
</style>