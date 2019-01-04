<template>
    <div class="top-apps-chart" :style="{width: width, height: height}">
        Top Clients
    </div>
</template>

<script>
    import 'echarts/theme/dark'
    import 'echarts/theme/infographic'
    import 'echarts/theme/macarons'
    import 'echarts/theme/roma'
    import 'echarts/theme/shine'
    import 'echarts/theme/vintage'

    export default {
        props: {
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '300px'
            }
        },
        data() {
            return {
                chart: null,
                option: {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        width: '40',
                        orient: 'vertical',
                        icon: 'circle',
                        left: 'left',
                        textStyle: {
                            color: '#fff',
                        },
                        data: ['11.0.0.2','10.125.20.99','10.75.20.99','10.74.221.252','10.74.5.220', '10.74.43.50', '10.124.31.114', '10.74.28.20', '10.124.31.152', '64.104.169.90']
                    },
                    series : [
                        {
                            name: 'Application',
                            type: 'pie',
                            radius : '65%',
                            center: ['60%', '50%'],
                            data:[
                                {value:1342, name:'11.0.0.2'},
                                {value:245, name:'10.125.20.99'},
                                {value:1201, name:'10.75.20.99'},
                                {value:134, name:'10.74.221.252'},
                                {value:675, name:'10.74.5.220'},
                                {value:680, name:'10.74.43.50'},
                                {value:879, name:'10.124.31.114'},
                                {value:249, name:'10.74.28.20'},
                                {value:241, name:'10.124.31.152'},
                                {value:657, name:'64.104.169.90'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            }
        },
        created() {
            
        },
        mounted() {
            this.initChart()
            window.addEventListener('resize', () => {
                this.chart.resize()
            })
        },
        methods: {
            initChart() {
                this.chart = this.$echarts.init(this.$el, 'macarons')
                this.chart.setOption(this.option)
            }
        }
    }
</script>

<style lang="less" scoped>
    .top-apps-chart {
        padding: 15px;
        color: #fff;
        background-color: #30363c;
    }
</style>

