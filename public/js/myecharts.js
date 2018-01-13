$.fn.echarts_graph = function( indata ) {

        var _this = $(this);
        // // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart'));

        //var myChart = indata.myChart;
        var rawdata = indata.rawdata;

        function getVirtulData(year) {
            year = year || '2017';
            var date = +echarts.number.parseDate(year + '-01-01');
            var end = +echarts.number.parseDate((+year + 1) + '-01-01');
            var dayTime = 3600 * 24 * 1000;
            var data = [];
            for (var time = date; time < end; time += dayTime) {
                data.push([
                    echarts.format.formatTime('yyyy-MM-dd', time),
                    Math.floor(Math.random() * 20) / 2 
                ]);
            }
            return data;
        }

        function preprocessingData(indata) {
            var newdata = [];
            for (var i=0; i<indata.length; i++) {
                newdata.push([indata[i]['date'], indata[i]['hours']]);
            }
            return newdata;
        }

        //var data = getVirtulData(2017);
        var data = preprocessingData(rawdata);

        option = {
            backgroundColor: '#404a59',

            title: {
                top: 30,
                text: '2017年xxx每天考勤时间',
                subtext: '数据纯属虚构',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: function(val) {
                    return val['data'][0] + ",&nbsp;&nbsp;" + val['data'][1] + "h";
                    // return JSON.stringify(val);
                }
            },
            legend: {
                top: '30',
                left: '100',
                data:['打卡时长', 'Top 10'],
                textStyle: {
                    color: '#fff'
                }
            },
            calendar: [{
                top: 100,
                left: 'center',
                range: ['2017-01-01', '2017-6-30'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#000',
                        width: 4,
                        type: 'solid'
                    }
                },
                yearLabel: {
                    formatter: '{start}  1st',
                    textStyle: {
                        color: '#fff'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#323c48',
                        borderWidth: 1,
                        borderColor: '#111'
                    }
                }
            },
            {
                top: 300,
                left: 'center',
                range: ['2017-07-01', '2017-12-30'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#000',
                        width: 4,
                        type: 'solid'
                    }
                },
                yearLabel: {
                    formatter: '{start}  2nd',
                    textStyle: {
                        color: '#fff'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#323c48',
                        borderWidth: 1,
                        borderColor: '#111'
                    }
                }
            }], 
            series : [
                {
                    name: '打卡时长',
                    type: 'scatter',
                    coordinateSystem: 'calendar',
                    data: data,
                    symbolSize: function (val) {
                        return val[1] * 2;
                        // return val[1] / 500;
                    },
                    itemStyle: {
                        normal: {
                            color: '#00BB00'
                        }
                    }
                },
                {
                    name: '打卡时长',
                    type: 'scatter',
                    coordinateSystem: 'calendar',
                    calendarIndex: 1,
                    data: data,
                    symbolSize: function (val) {
                        // return val[1] / 500;
                        return val[1] * 2;
                    },
                    itemStyle: {
                        normal: {
                            color: '#00BB00'
                        }
                    }
                },
                {
                    name: 'Top 10',
                    type: 'effectScatter',
                    coordinateSystem: 'calendar',
                    calendarIndex: 1,
                    data: data.sort(function (a, b) {
                        return b[1] - a[1];
                    }).slice(0, 10),
                    symbolSize: function (val) {
                        return val[1] * 2;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#28FF28',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                },
                {
                    name: 'Top 10',
                    type: 'effectScatter',
                    coordinateSystem: 'calendar',
                    data: data.sort(function (a, b) {
                        return b[1] - a[1];
                    }).slice(0, 10),
                    symbolSize: function (val) {
                        return val[1] * 2;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#28FF28',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                }
            ]   
        };
        myChart.setOption(option);

        return this;
};
 