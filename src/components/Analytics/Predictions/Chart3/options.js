const options = {
  //color: ['#c23531','#5E6F7B', '#3192CB', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
  tooltip: {
    formatter: "{c}",
    extraCssText: "white-space:pre-wrap; max-width:40vw; font-size: 1rem; padding: 0.5rem;",
    confine: true,
  },
  series: [],
  legend: {
    icon: 'circle',
    type: 'scroll',
    padding: [0, 0],
    right: '15%',
    top: 'center',
    itemGap: 5,
    itemWidth: 5,
    itemHeight: 5,
    textStyle: {
      fontSize: '0.75rem',
      color: '#b8b8b8'
    },
    orient: "vertical"
  },
};

export default options;