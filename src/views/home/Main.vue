<template>
    <div class="main-wrapper">
        <div class="main">
            <div class="navbar panel">
                <bread-crumb></bread-crumb>
                <Select v-model="timeZone" class="select-time" size="small">
                    <Option v-for="item in timeList" :value="item.value" :key="item.value" :itransfer="true">
                        {{ item.label }}
                    </Option>
                </Select>
            </div>
            
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import breadCrumb from 'components/breadcrumb/BreadCrumb'

    export default {
        data() {
            return {
                timeZone: 'Last 24 hours',
                timeList: [
                    {
                        value: 'Last week',
                        label: 'Last week'
                    }, {
                        value: 'Last 24 hours',
                        label: 'Last 24 hours'
                    }, {
                        value: 'Last 1 hour',
                        label: 'Last 1 hour'
                    }
                ]  
            }
        },
        components: {
            breadCrumb
        }
    }
</script>

<style lang="less">
    @import '~assets/less/media.less';

    .main-wrapper{
        flex: 1 1 auto;
        padding: 15px;
        overflow: auto;
        visibility: hidden;

        @media @mobile {
            visibility: visible;
        }
        
        .main, &:hover, &:focus {
            visibility: visible;
            outline: none;
        }
        
        .main {

            .navbar {
                display: flex;
                justify-content: space-between;
                margin-bottom: 15px;
                box-shadow: 0px 2px 10px rgba(0,0,0,0.3);

                .select-time {
                    width: 150px;
                    padding: 8px 10px;
                    color: #7d8f9a;

                    .ivu-select-selection {
                        background-color: #353c42;
                        border-color: #272c30;
                    }

                    .ivu-select-dropdown {
                        background-color: #353c42;
                        border-color: #272c30;
                        box-shadow: 0 6px 12px rgba(0,0,0,.175);

                        .ivu-select-item {
                            color: #5b6773;

                            &:hover {
                                background-color: #30363c;
                            }

                            &.ivu-select-item-focus {
                                background: none;
                            }
                        
                            &.ivu-select-item-selected {
                                color: #88939C;
                            }
                        }
                    }

                    &.ivu-select-visible {

                        .ivu-select-selection {
                            box-shadow: none;
                            // box-shadow: 0 6px 12px rgba(0,0,0,.175);
                        }
                    }

                }
            }

            .panel {
                background-color: #30363c;
            }

            .panel-1 {
                width: 100%;
                height: 400px;
            }

            .head {
                width: 100%;
                height: 40px;
                line-height: 40px;
                text-align: center;
                margin-bottom: 15px;
            }
        }
    }
</style>

