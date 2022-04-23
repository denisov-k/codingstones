const options = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Rainfall', 'Evaporation'],
    bottom: 15,
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      // prettier-ignore
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  grid: {
    top: 40,
    right: 20,
    bottom: 60,
    left: 20,
    containLabel: true,
  },
};

export default options;