const options = {
    //color: ['#c23531','#5E6F7B', '#3192CB', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    tooltip: {
        formatter: "{b}: {c}",
        extraCssText: "white-space:pre-wrap; max-width:400px;",
        confine: true,
    },
    series: [],
    legend: {
        icon: 'circle',
        type: 'scroll',
        /*left: 20,
        right: 20,*/
        padding: [0, 25],
        bottom: 15,
        orient: "horizontal"
    },
};

export default options;