<template>
  <div class="widget-buttons">
    <div class="button" v-for="(extraButton, ind) in extraButtons" v-on:click="extraButton.onClick" v-bind:key="ind">
      <inline-svg :src="extraButton.icon" />
    </div>

    <div class="button" v-on:click="onexportImage" v-if="pdfExport">
      <inline-svg :src="require('@/assets/widget/image.svg')" />
    </div>
    <div class="button" v-on:click="onExportXLS" v-if="exportURL">
      <inline-svg :src="require('@/assets/widget/table.svg')" />
    </div>
    <div class="button" v-on:click="onExpandClick">
      <inline-svg :src="require('@/assets/widget/expand.svg')" v-if="!expanded" />
      <inline-svg :src="require('@/assets/widget/collapse.svg')" v-else />
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

import * as FileSaver from 'file-saver';

export default {
  name: "WidgetDataExport",
  props: {
    title: String,
    exportURL: {
      type: String,
      required: false
    },
    pdfExport: {
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
    onExpand: Function
  },
  data() {
    return {
      expanded: false,
    }
  },
  methods: {
    onexportImage: function () {
      this.pdfExport();
    },
    onExpandClick: function () {
      this.$parent.$el.classList.toggle("expanded");
      this.expanded = !this.expanded;

      const timeout = this.$parent.$el.classList.contains('expanded') ? 350 : 0;

      this.onExpand && setTimeout(() => {
        this.onExpand();
      }, timeout);
    },
    onExportXLS: function () {
      this.loading = true;

      api.request(this.exportURL + '?format=xlsx', {}, null, 'get', { responseType: 'blob' }).then( res  => {

        let blob = new Blob([res.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),
            filename = (this.title || this.$route.meta.title) + '.xlsx';

        FileSaver.saveAs(blob, filename);

        this.loading = false;
      })
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.widget-buttons {
  border-radius: 18px;
  /*background-color: white;*/
  display: inline-flex;
  float: right;
  margin: 0 10px;
}
.button {
  width: 16px;
  height: 16px;
  padding: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.button:hover {
  background-color: #00000025;
  border-radius: 10px;
}
.button:not(:last-child) {
  /*border-right: 1px solid #e3e3e3;*/
}
.button svg {
  height: 100%;
  width: 100%;
}
</style>