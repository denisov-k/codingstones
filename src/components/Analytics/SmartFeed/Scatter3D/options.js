const options = {
  tooltip: {

  },
  grid3D: {
    viewControl: {
      distance: 250,
      rotateSensitivity: 2.5
    },
    axisLine: {
      lineStyle: {
        color: '#414141'
      }
    },
    axisPointer: {
      lineStyle: {
        color: '#5ca1f5'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#414141'
      }
    },
    axisLabel: {
      textStyle: {
        color: '#838383',
        fontWeight: 600,
        textBorderColor: 'black',
        textBorderWidth: 2
      }
    },
  },
  xAxis3D: {
    type: 'category',
    nameTextStyle: {
      color: '#4690bb'
    }
  },
  yAxis3D: {
    nameTextStyle: {
      color: '#4690bb'
    }
  },
  zAxis3D: {
    nameTextStyle: {
      color: '#4690bb'
    }
  },
  series: [
    {
      type: 'scatter3D',
      symbolSize: 2.5,
      encode: {
        x: 'Country',
        y: 'Life Expectancy',
        z: 'Income',
        tooltip: [0, 1, 2, 3, 4]
      }
    }
  ]
};

export default options;