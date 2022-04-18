const options = {
    color: ['#538f2a', '#00aac0', '#c26d27'],
    grid: {
        top: 40,
        right: 20,
        bottom: 20,
        left: 20,
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Profit', 'Expenses', 'Income'],
        textStyle: {
            color: '#dadada'
        }
    },
    xAxis: [
        {
            type: 'value'
        }
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    ],
};

export default options;