const options = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      label: {
        show: true
      }
    }
  },
  calculable: true,
  legend: {
    data: ['Growth', 'Budget 2011', 'Budget 2012'],
    itemGap: 5
  },
  grid: {
    top: 70,
    right: 20,
    bottom: 50,
    left: 20,
    containLabel: true,
  },
  yAxis: [
    {
      type: 'value',
      name: 'Budget (million USD)',
      /*axisLabel: {
        formatter: function (a) {
          a = +a;
          return isFinite(a) ? echarts.format.addCommas(+a / 1000) : '';
        }
      }*/
    }
  ],
  dataZoom: [
    {
      show: true,
      start: 94,
      end: 100,
      left: 40,
      right: 40
    },
    {
      type: 'inside'
    }
  ]
};

export default options;