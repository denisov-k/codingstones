const options = {
  tooltip: {
    extraCssText: "display: flex; flex-direction: column;white-space:nowrap; max-width:40vw; font-size: 1rem; padding: 0.5rem;",
    formatter: function (params) {
      return `
        <b style="margin-bottom: 0.5rem;">${params[0].axisValueLabel}</b>
        <p style="margin: 0 0 0.5rem;">${params[0].marker} ${params[0].seriesName}:
        <span>${params[0].value}</span></p>
        <p style="margin: 0;">${params[1].marker} ${params[1].seriesName}:
        <span>${params[1].value}</span></p>`
    },
    confine: true,
    trigger: 'axis'
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      // prettier-ignore
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisLabel: {
        fontSize: '0.75rem',
        color: '#b8b8b8'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitNumber: 2,
      axisLabel: {
        fontSize: '0.75rem',
        color: '#b8b8b8'
      },
      splitLine: {
        lineStyle: {
          color: '#575757'
        }
      }
    }
  ],
  grid: {
    top: '7.5%',
    left: '5%',
    right: '5%',
    bottom: '5%',
    containLabel: true,
  },
};

export default options;