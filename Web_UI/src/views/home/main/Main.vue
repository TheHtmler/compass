<template>
    <div class="main-wrapper">
        <main-header></main-header>
        <main-content></main-content>
    </div>
</template>

<script>
    import mainHeader from 'views/home/main/MainHeader'
    import mainContent from 'views/home/main/MainContent'

    export default {
        data() {
            return {
                
            }
        },
        components: {
            mainHeader,
            mainContent
        }
    }
</script>

<style lang="less">
    @import '~assets/less/media.less';

    .main-wrapper{
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
    }
</style>

