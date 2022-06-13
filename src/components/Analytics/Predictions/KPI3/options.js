const options = {
  color: '#161616',
  tooltip: {
    show: false,
    confine: false,
    position: [0, 'right'],
    trigger: 'axis'
  },
  xAxis: [
    {
      type: 'value',
      min: 0,
      max: 1,
      show: false
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: -0.4,
      max: 1.4,
      show: false
    }
  ],
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 0,
  },
};

export default options;