const options = {
    animationDuration: 3000,
    tooltip: {
        order: 'valueDesc',
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        nameLocation: 'middle'
    },
    yAxis: {
        name: '',
        splitLine: {
            lineStyle: {
                color: '#aeaeae'
            }
        },
    },
    grid: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
        containLabel: true,
    },
};

export default options;