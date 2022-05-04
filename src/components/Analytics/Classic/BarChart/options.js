module.exports = {
  tooltip: {
    extraCssText: "white-space:pre-wrap; max-width:40vw; font-size: 1rem; padding: 0.5rem;",
    confine: true,
  },
  dataZoom: [
    {
      show: true,
      yAxisIndex: 0,
      start: 80,
      end: 100,
      showDetail: false,
      right: 20,
      width: '5%'
    },
    {
      type: 'inside',
      yAxisIndex: 0,
      zoomOnMouseWheel: false,
      moveOnMouseWheel: true,
    },
  ],
  grid: {
    top: '5%',
    left: '5%',
    right: '20%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: {
    type: "value",
    splitNumber: 2,
    /*name: 'Количество ошибок всего',*/
    axisLabel: {
      fontSize: '1rem',
      formatter(item) {
        return item.toLocaleString();
      }
    },
    nameLocation: "middle",
    nameTextStyle: {
      padding: ['20%', 0, 0, 0]
    }
  }
}