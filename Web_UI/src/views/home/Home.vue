<template>
    <div class="wrapper">
        <v-sider></v-sider>
        <v-main></v-main>
    </div>
</template>

<script>
    import vSider from 'views/home/Sider'
    import vMain from 'views/home/main/Main'

    export default {
        components: {
            vSider,
            vMain
        }
    }
</script>

<style lang="less" scoped>
    @import '~assets/less/media.less';

    .wrapper {
        display: flex;
        position: absolute;
        margin-bottom: 10px;
        width: 100%;
        height: 100%;
        min-height: 100%;
        border-radius: 5px;
        background-color: #353c42;
        box-shadow: 0 3px 20px #000;
        background-clip: content-box;
        overflow: hidden;

        @media @mobile {
            flex-direction: column;
        }

        .top-menu {
            display: none;
            padding: 15px;
            background-color: #272c30;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;

            @media @mobile {
                display: block;
            }

            .ivu-icon-ios-menu {
                padding: 3px;
                font-size: 26px;
                border-radius: 4px;
                color: #fff;
                background-color: #3c5059;
            }
        }
    }
</style>
