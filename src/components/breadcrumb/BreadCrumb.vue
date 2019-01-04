<template>
    <div class="breadcrumb">{{$route.meta.breadCrumbName}}</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .breadcrumb {
        flex: 1 1 auto;
        padding: 8px 10px;
        font-size: 18px;
        color: #fff;
    }
</style>

