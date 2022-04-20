const options = {
  tooltip: {
    formatter: "{b}: {c}",
    extraCssText: "white-space:pre-wrap; max-width:400px;",
    confine: true,
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ],
  grid: {
    top: 50,
    right: 20,
    bottom: 20,
    left: 20,
    containLabel: true,
  },
};

export default options;