module.exports = {
  tooltip: {
    position: 'top',
    extraCssText: "white-space:pre-wrap; max-width:400px;",
    appendToBody: true,
  },
  dataZoom: [
    {
      show: true,
      yAxisIndex: 0,
      start: 90,
      end: 100,
      showDetail: false,
      right: 20
    },
    {
      type: 'inside',
      yAxisIndex: 0,
      zoomOnMouseWheel: false,
      moveOnMouseWheel: true,
    },
  ],
  grid: {
    top: 10,
    left: 30,
    right: 80,
    bottom: 10,
    containLabel: true
  },
  xAxis: {
    type: "value",
    /*name: 'Количество ошибок всего',*/
    axisLabel: {
      formatter(item) {
        return item.toLocaleString();
      }
    },
    nameLocation: "middle",
    nameTextStyle: {
      padding: [20, 0, 0, 0]
    }
  }
}