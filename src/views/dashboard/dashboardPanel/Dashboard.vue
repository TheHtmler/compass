<template>
    <div class="dashboard">
        <div class="row">
            <div class="section-7">
                <div class="header">Clients Location</div>
                <clients-location></clients-location>
            </div>
        </div>
        <div class="row">
            <div class="section-5 section-left">
                <div class="header">Top 10 Applications - Pie</div>
                <top-apps></top-apps>
            </div>
            <div class="section-5">
                <div class="header table-header">Top 10 Applications - Table</div>
                <qoe-table :columns="columns" :tableData="tableData1"></qoe-table>
            </div>
        </div>
        <div class="row">
            <div class="section-5 section-left">
                <div class="header">Top 10 Clients - Pie</div>
                <top-clients></top-clients>
            </div>
            <div class="section-5">
                <div class="header table-header">Top 10 Clients - Table</div>
                <qoe-table :columns="columns" :tableData="tableData2"></qoe-table>
            </div>
        </div>
    </div>
</template>

<script>
    // import topApps from './TopApplications.vue'
    // import topClients from './TopClients.vue'
    // import clientsLocation from './ClientsLocation.vue'
    // import qoeTable from 'components/table/Table.vue'

    export default {
        data() {
            return {
                columns: [
                    {
                        title: 'APPLICATION',
                        key: 'name'
                    },
                    {
                        title: 'INGRESS BYTES',
                        key: 'ingress_bytes',
                        renderHeader: (h, params) => {
                            return h('div', [
                                h('span', 'INGRESS'),
                                h('br', ''),
                                h('span', 'BYTES')
                            ])
                        }
                    },
                    {
                        title: 'EGRESS BYTES',
                        key: 'egress_bytes',
                        renderHeader: (h, params) => {
                            return h('div', [
                                h('span', 'EGRESS'),
                                h('br', ''),
                                h('span', 'BYTES')
                            ])
                        }
                    },
                    {
                        title: 'INGRESS PACKETS',
                        key: 'ingress_packets',
                        renderHeader: (h, params) => {
                            return h('div', [
                                h('span', 'INGRESS'),
                                h('br', ''),
                                h('span', 'PACKETS')
                            ])
                        }
                    },
                    {
                        title: 'EGRESS PACKETS',
                        key: 'egress_packets',
                        renderHeader: (h, params) => {
                            return h('div', [
                                h('span', 'EGRESS'),
                                h('br', ''),
                                h('span', 'PACKETS')
                            ])
                        }
                    }
                ],
                tableData1: [
                    {
                        name: 'Terracotta',
                        ingress_bytes: '10.483GB',  
                        egress_bytes: '10.483GB',  
                        ingress_packets: '32655515',
                        egress_packets: '32655515',
                    },
                    {
                        name: 'DNA Center',
                        ingress_bytes: '594.638MB',  
                        egress_bytes: '594.638MB',  
                        ingress_packets: '5383902',
                        egress_packets: '5383902',
                    },
                    {
                        name: 'Findit',
                        ingress_bytes: '290.649MB',  
                        egress_bytes: '290.649MB',  
                        ingress_packets: '2725573',
                        egress_packets: '2725573',
                    },
                    {
                        name: 'Meraki',
                        ingress_bytes: '78.681MB',  
                        egress_bytes: '78.681MB',  
                        ingress_packets: '1058397',
                        egress_packets: '1058397',
                    },
                    {
                        name: 'Live Action',
                        ingress_bytes: '73.406MB',  
                        egress_bytes: '73.406MB',  
                        ingress_packets: '171363',
                        egress_packets: '171363',
                    },
                    {
                        name: 'QoE',
                        ingress_bytes: '372.232MB',  
                        egress_bytes: '372.232MB',  
                        ingress_packets: '212134',
                        egress_packets: '212134',
                    },
                    {
                        name: 'Jabber',
                        ingress_bytes: '32.321MB',  
                        egress_bytes: '32.321MB',  
                        ingress_packets: '132341',
                        egress_packets: '132341',
                    },
                    {
                        name: 'WebEx',
                        ingress_bytes: '234.765MB',  
                        egress_bytes: '234.765MB',  
                        ingress_packets: '234111',
                        egress_packets: '234111',
                    },
                    {
                        name: 'Spark',
                        ingress_bytes: '364.384MB',  
                        egress_bytes: '364.384MB',  
                        ingress_packets: '232341',
                        egress_packets: '232341',
                    },
                    {
                        name: 'AnyConnect',
                        ingress_bytes: '7876.233MB',  
                        egress_bytes: '7876.233MB',  
                        ingress_packets: '123342',
                        egress_packets: '123342',
                    }
                ],
                tableData2: [
                    {
                        name: '11.0.0.2',
                        ingress_bytes: '10.483GB',  
                        egress_bytes: '10.483GB',  
                        ingress_packets: '32655515',
                        egress_packets: '32655515',
                    },
                    {
                        name: '10.125.20.99',
                        ingress_bytes: '594.638MB',  
                        egress_bytes: '594.638MB',  
                        ingress_packets: '5383902',
                        egress_packets: '5383902',
                    },
                    {
                        name: '10.75.20.99',
                        ingress_bytes: '290.649MB',  
                        egress_bytes: '290.649MB',  
                        ingress_packets: '2725573',
                        egress_packets: '2725573',
                    },
                    {
                        name: '10.74.221.252',
                        ingress_bytes: '78.681MB',  
                        egress_bytes: '78.681MB',  
                        ingress_packets: '1058397',
                        egress_packets: '1058397',
                    },
                    {
                        name: '10.74.5.220',
                        ingress_bytes: '73.406MB',  
                        egress_bytes: '73.406MB',  
                        ingress_packets: '171363',
                        egress_packets: '171363',
                    },
                    {
                        name: '10.74.43.50',
                        ingress_bytes: '372.232MB',  
                        egress_bytes: '372.232MB',  
                        ingress_packets: '212134',
                        egress_packets: '212134',
                    },
                    {
                        name: '10.124.31.114',
                        ingress_bytes: '32.321MB',  
                        egress_bytes: '32.321MB',  
                        ingress_packets: '132341',
                        egress_packets: '132341',
                    },
                    {
                        name: '10.74.28.20',
                        ingress_bytes: '234.765MB',  
                        egress_bytes: '234.765MB',  
                        ingress_packets: '234111',
                        egress_packets: '234111',
                    },
                    {
                        name: '10.124.31.152',
                        ingress_bytes: '364.384MB',  
                        egress_bytes: '364.384MB',  
                        ingress_packets: '232341',
                        egress_packets: '232341',
                    },
                    {
                        name: '64.104.169.90',
                        ingress_bytes: '7876.233MB',  
                        egress_bytes: '7876.233MB',  
                        ingress_packets: '123342',
                        egress_packets: '123342',
                    }
                ]
            }
        },
        components: {
            topApps: resolve => require(['./TopApplications.vue'], resolve),
            qoeTable: resolve => require(['components/table/Table.vue'], resolve),
            topClients: resolve => require(['./TopClients.vue'], resolve),
            clientsLocation: resolve => require(['./ClientsLocation.vue'], resolve)
        }
    }
</script>

<style lang="less" scoped>
    @import '~assets/less/media.less';

    .dashboard {

        .header {
            padding: 10px 20px;
            font-size: 14px;
            border-bottom: 2px solid #3282d4;
            color: #fff;
            background-color: #2A3034;

            &.table-header{
                margin-right: 4px;
            }
        }

        .row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;

            @media @tablet {
                flex-direction: column;
            }

            @media @mobile {
                flex-direction: column;
            }

            .section-5 {
                width: 50%;
                
                @media @tablet {
                    width: 100%;
                    margin-bottom: 10px;
                }

                @media @mobile {
                    width: 100%;
                    margin-bottom: 10px;
                }
            
                &.section-left {
                    margin-right: 15px;

                    @media @tablet {
                        margin-right: 0;
                        padding-right: 4px;
                    }

                    @media @mobile {
                        margin-right: 0;
                        padding-right: 4px;
                    }
                }
            }

            .section-7 {
                width: 100%;
            }
        }

    }
</style>
