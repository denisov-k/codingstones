module.exports = {
  //color: "#006699",
  tooltip: {
    formatter: function(item) {
      return `${item.marker}${item.seriesName}, ${item.name}\nОшибочных строк: ${item.value.toFixed(0)}`;
    },
    position: 'top',
    extraCssText: "white-space:pre-wrap; max-width:400px;",
    confine: true,
  },
  grid: {
    top: 20,
    right: 30,
    bottom: 45,
    left: '10px',
    containLabel: true,
  },
  yAxis: {
    type: "value",
    name: '',
    nameLocation: "middle",
    nameTextStyle: {
      padding: [0, 0, 40, 0],
    },
    axisLabel: {
      //formatter: "{value}",
      formatter: (value) => value / 1000
    },
  },
  legend: {
    icon: 'circle',
    type: 'scroll',
    /*left: 20,
    right: 20,*/
    padding: [0, 25],
    bottom: 15,
    orient: "horizontal"
  },
}
