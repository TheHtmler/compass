<template>
    <div class="sider-wrapper">
        <div class="logo">QoE</div>
        <div class="menu">
            <Menu :active-name="$route.meta.menuActive" width="auto" :theme="'dark'">
                <MenuItem name="Dashboard">
                    <router-link tag="div" to="/dashboard" class="menu-item">
                        <Icon type="md-pie" size="16" />
                        Dashboard
                    </router-link>
                </MenuItem>
                <MenuItem name="Visualize">
                    <router-link tag="div" to="/visualize" class="menu-item">
                        <Icon type="md-color-palette" size="16" />
                        Visualize
                    </router-link>
                </MenuItem>
                <MenuItem name="Logs">
                    <router-link tag="div" to="/logs" class="menu-item">
                        <Icon type="md-paper" size="16" />
                        Logs
                    </router-link>
                </MenuItem>
                <MenuItem name="Management">
                    <router-link tag="div" to="/management" class="menu-item">
                        <Icon type="md-cog" size="16" />
                        Management
                    </router-link>
                </MenuItem>
            </Menu>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            // console.log(this.$route.name)
        }
    }
</script>

<style lang="less" scoped>
    @import '~assets/less/media.less';

    .sider-wrapper{
        width: 200px;
        background-color: #30363c;

        @media @mobile {
            display: none;
        }

        .logo{
            text-align: center;
            height: 75px;
            line-height: 75px;
            font-size: 36px;
            color: #fff;
            background-color: #272c30;
        }

        .menu{
            
            .ivu-menu{
                background: none;

                .ivu-menu-item {
                    padding: 0;
                    border-left: 2px solid transparent;
                    color: #5b6773;

                    .menu-item{
                        padding: 14px 24px;
                    }

                    &:hover{
                        color: #fff;
                        background: none;
                    }
                
                    &.ivu-menu-item-active{
                        border-left: 2px solid #3282d4;
                        color: #fff;
                        background: none;
                    }
                }

            }
        }
    }    
</style>

