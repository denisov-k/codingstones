<template>
  <default-k-p-i title="Количество дубликатов" :value="value"></default-k-p-i>
</template>

<script>
import ApiService from "@/services/api";
import DefaultKPI from "@/components/App2/DefaultKPI";

let apiURL = 'api/app2/page_2/kpi_5?format=collapsed';

export default {
  name: "KPI5",
  components: {
    DefaultKPI
  },
  data() {
    return {
      value: ""
    }
  },
  mounted() {
    ApiService.request(apiURL).then(res => {
      this.value = Number(res.data[0][0]).toLocaleString();
    })
  }
}
</script>

<style scoped>

</style>