<template>
    <div class="main-content">
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="less">
    @import '~assets/less/media.less';

    .main-content{
        // flex: 1 1 auto;
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

        }
    }
</style>

