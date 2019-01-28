<template>
  <div class="tab-wrapper">

    <Table  :columns="columns"
            :data="tableData"
            no-data-text="No Data Text" align="center"></Table>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      default: () => {
        return []
      }
    },
    tableData: {
      default: () => {
        return []
      }
    },
  }
}
</script>

<style lang="less">
  .tab-wrapper {
        overflow-y: auto;
        height: 100%;
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





