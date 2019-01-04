<template>
    <div class="top-apps-chart" :style="{width: width, height: height}">
        Top apps
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
            },
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
                        data: ['Terracotta','DNA Center','Findit','Meraki','Live Action', 'QoE', 'Jabber', 'WebEx', 'Spark', 'AnyConnect']
                    },
                    series : [
                        {
                            name: 'Application',
                            type: 'pie',
                            radius : '65%',
                            center: ['60%', '50%'],
                            data:[
                                {value:1548, name:'Terracotta'},
                                {value:310, name:'DNA Center'},
                                {value:234, name:'Findit'},
                                {value:135, name:'Meraki'},
                                {value:221, name:'Live Action'},
                                {value:680, name:'QoE'},
                                {value:342, name:'Jabber'},
                                {value:459, name:'WebEx'},
                                {value:231, name:'Spark'},
                                {value:521, name:'AnyConnect'}
                            ],
                            // roseType: 'radius',
                            // animationType: 'scale',
                            // animationEasing: 'elasticOut',
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

