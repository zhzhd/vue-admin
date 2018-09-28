<template>
    <section>
        <p>{{ msg }}</p>
        <RadioGroup v-model="period"  :on-change="handleChangeRadio(period)">
            <Radio v-for="item in periodList" :key="item.value" :label="item.label">{{ item.value }}</Radio>
        </RadioGroup>
        <div v-show="period == 'selfTime'">
            开始日期：<DatePicker type="date" 
                :start-date="new Date(timer)" 
                @on-change="selectDateStart" 
                :editable="false"
                :options="startDateOptions" 
                :clearable="false"
                placeholder="请选择开始日期" style="width: 200px"></DatePicker>
            结束日期：<DatePicker type="date" 
                :start-date="new Date(timer)" 
                @on-change="selectDateEnd" 
                :editable="false" 
                :disabled="endTime"
                :options="endDateOptions" 
                :clearable="false"
                placeholder="请选择结束日期" style="width: 200px"></DatePicker>
        </div>
        <p style="height: 30px;"></p>
        <p>注：只需要统计哪个产品收入最多，哪个的收入最少，支出最多，支出最少，收入/支出的图像即可</p>
        <p>详细的信息可以导出一个excel</p>
        <div id="myChart" :style="{width: '500px', height: '300px'}"></div>
    </section>
</template>
<style lang="less">

</style>
<script>
    let echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/bar')
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    export default {
        data () {
            return {
                msg: '经营状态管理页面 ---> 超级管理员权限',
                period: 'month',       /*时间段*/ 
                periodList: [
                    {
                        value: '按月统计',
                        label: 'month'
                    },
                    {
                        value: '按季度统计',
                        label: 'quarter'
                    },
                    {
                        value: '自定义时间统计',
                        label: 'selfTime'
                    }
                ],
                timer: (new Date()).Format('yyyy,MM,dd'),
                endTime: true,
                startDate: '',
                startDateOptions: {
                    disabledDate (date) {
                        //date 为当天的00:00:00      date = new Date     
                        return date && date.valueOf() > Date.now();
                    }
                },
                endDateOptions: {},
                echartsOption: {
                    title: { text: 'ECharts 入门示例' },
                    tooltip: {},
                    xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [
                        {
                            name: '销量',
                            type: 'bar',
                            data: [5, 20, 36, 10, 10, 20]
                        }
                    ]
                }

            }
        },
        mounted () {
            this.drwaLine();
        },
        methods: {
            drwaLine () {
                let myChart = echarts.init(document.getElementById('myChart'));
                let option = this.echartsOption;
                myChart.setOption(option);
            },
            handleChangeRadio (name) {
                //处理不同的单选来加载不同的echarts图标
                //月：12个月
                //季度：4个季度
                //自定义的话直接return出去
            },
            selectDateStart (start) {
                //开始
                this.endTime = false;
                this.startDate = start;
                this.endDateOptions.disabledDate = date => {
                    if (!date) return;
                    let disableDate = date.valueOf();
                    let START = Date.parse(start);
                    let END = START - 2592000000;
                    return disableDate > START || disableDate < END;
                }
                
            },
            selectDateEnd (end) {
                //结束
                //拿到起始时间和结束的时间去做请求查询
            }
            
            
        }

    }
</script>
