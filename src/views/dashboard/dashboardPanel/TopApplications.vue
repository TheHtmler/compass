<template>
    <div class="top-apps-chart" :style="{width: width, height: height}">
        Top apps
    </div>
</template>

<script>
    import echarts from 'utils/echarts'
    import 'echarts/theme/macarons'
    import SStorage from 'utils/SStorage'

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
                this.chart = echarts.init(this.$el, 'macarons')
                this.chart.setOption(this.option)
                this.chart.on('click', (param) => {
                    console.log(param)
                    this.$router.push({
                        path: '/dashboard/graph_detail',
                    })
                    SStorage.setItem('detailData', {
                        name: param.name
                    })
                    this.$store.dispatch('DeliverData', {
                        name: param.name
                    })
                })
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

