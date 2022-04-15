<template>
  <div class="widget-container">
    <div class="widget">
      <div class="widget-header">
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
        <widget-tools :exportURL="exportURL" :onExpand="onResize" :extra-buttons="extraButtons" :title="title"></widget-tools>
      </div>
      <div class="widget-content">
        <loading v-show="isLoading"></loading>
        <slot></slot>
      </div>
      <div class="widget-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import WidgetTools from "@/components/Widget/Buttons";
import Loading from "@/components/Widget/Loading";

export default {
  name: "WidgetContainer",
  components: { WidgetTools, Loading },
  data() {
    return {

    }
  },
  props: {
    title: String,
    subtitle: String,
    isLoading: {
      type: Boolean,
      default: false
    },
    exportURL: {
      type: String,
      required: false
    },
    onResize: {
      type: Function,
      required: false
    },
    extraButtons: {
      type: Array,
      required: false,
      default: () => {
        return []
      }
    },
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped>
.widget-container {
  margin: 10px;
  background-origin: content-box;
}
.widget-container.expanded {
  position: fixed;
  z-index: 10002;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
  background-color: #000000a3;
}
.widget {
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: white;
  overflow: auto;
}
.widget-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: break-spaces;
}
.title {
  font-size: 14px;
  float: left;
  margin: 12px 15px;
  font-weight: 600;
  color: #2a728e;
}
.subtitle {
  font-size: 12px;
  color: #b4b4b4;
}
.widget-content {
  /*background: linear-gradient(0deg, rgba(255,255,255,1) 55%, rgba(233,233,233,1) 100%);*/
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  /*padding: 8px;*/
  height: calc(100% - 0px);
  overflow: hidden;
  position: relative;
}
</style>