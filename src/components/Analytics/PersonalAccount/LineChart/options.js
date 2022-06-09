const options =  {
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C'
    },
    splitLine: {
      lineStyle: {
        color: '#aeaeae'
      }
    }
  },
  series: [
    {
      name: 'Highest',
      type: 'line',
      smooth: true,
      data: [10, 11, 10, 11, 14, 16, 17],
    }
  ]
};

export default options;