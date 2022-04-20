const options = {
  color: ['#39b99b', '#8b539a'],
  legend: {
    data: ['Allocated Budget', 'Actual Spending'],
    textStyle: {
      color: '#dadada'
    }
  },
  radar: {
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ],
    center: ['50%', '50%'],
    radius: '60%',
    splitNumber: 4,
    shape: 'circle',
    axisName: {
      /*formatter: '【{value}】',*/
      color: '#428BD4'
    },
    splitArea: {
      areaStyle: {
        /*color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowBlur: 10*/
      }
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(134,134,134,0.8)'
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(134,134,134,0.8)'
      }
    }
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ],
      splitArea: {
        areaStyle: {
          color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10
        }
      },
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