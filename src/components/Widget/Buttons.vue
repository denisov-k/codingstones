<template>
  <div class="widget-buttons">
    <div class="export-button" v-for="(extraButton, ind) in extraButtons" v-on:click="extraButton.onClick" v-bind:key="ind">
      <v-icon :name="extraButton.icon.name" :scale="extraButton.icon.scale || 1"
              :width="extraButton.icon.width || 16" :height="extraButton.icon.height || 16" />
    </div>

    <div class="export-button" v-on:click="onexportImage" v-if="pdfExport"><v-icon name="file-image" /></div>
    <div class="export-button" v-on:click="onExportXLS" v-if="exportURL"><v-icon name="table" /></div>
    <div class="export-button" v-on:click="onExpandClick">
      <v-icon v-if="!expanded" name="expand" />
      <v-icon v-else name="compress" />
    </div>
  </div>
</template>

<script>

import Icon from 'vue-awesome/components/Icon';

import api from "@/services/api";

import * as FileSaver from 'file-saver';

export default {
  name: "WidgetDataExport",
  components: {
    'v-icon': Icon
  },
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
.export-button {
  color: #c5ced2;
  height: 100%;
  padding: 6px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
}
.export-button:hover {
  color: #7aa3b5;
}
.export-button:not(:last-child) {
  /*border-right: 1px solid #e3e3e3;*/
}
</style>