<template>
    <div class="qoe-table">
        <Table
            :columns="columns" 
            :data="tableData" 
            size="small"
            no-data-text="No Data To Display"
            @on-row-click="viewDetail"
        ></Table>
    </div>
</template>

<script>
    import SStorage from 'utils/SStorage'
    
    export default {
        props: {
            columns: {
                default: () => {
                    return []
                }
            },
            tableData: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        methods: {
            viewDetail(rowData) {
                this.$router.push({
                    path: '/dashboard/graph_detail'
                })
                SStorage.setItem('detailData', rowData)
                this.$store.dispatch('DeliverData', rowData)
            }
        }
    }
</script>

<style lang="less">
    .qoe-table {
        overflow-y: auto;
        // padding-bottom: 10px;
        height: 300px;
        background-color: #30363c;
        visibility: hidden;
        
        .ivu-table-wrapper, &:hover, &:focus {
            visibility: visible;
            outline: none;
        }

        .ivu-table-wrapper {
            border: none;
            background-color: #30363c;

            .ivu-table {
                background-color: transparent;

                &:before, &:after {
                    display: none;
                }

                .ivu-table-header {

                    th {
                        color:#FFD3B4;
                        font-weight: bold;
                        background-color: #212c31;
                        border: none;
                    }
                }

                .ivu-table-body {

                    .ivu-table-row {

                        td {
                            border: none;
                            color: #7d8f9a;
                            background-color: transparent!important;
                            border-bottom: 1px solid #5e6870;
                        } 
                    }

                    // .ivu-table-even {

                    //     td {
                    //         background-color: #30363c!important;
                    //     }
                    // }

                    // .ivu-table-odd {

                    //     td {
                    //         background-color: #2A3034!important;
                    //     }
                    // }

                    .ivu-table-row-hover {

                        td {
                            color: #fff;
                            background-color: #485867!important;
                        }
                    }
                }
            }
        }
    }
</style>

