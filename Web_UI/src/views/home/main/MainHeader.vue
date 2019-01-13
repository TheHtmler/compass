<template>
    <div class="main-header">
          <div class="navbar panel">
              <bread-crumb></bread-crumb>
              <user-info></user-info>
          </div>
    </div>
</template>

<script>
    import breadCrumb from 'components/breadcrumb/BreadCrumb'
    import userInfo from 'components/userInfo/UserInfo'

    export default {
        data() {
            return {
                
            }
        },
        components: {
            breadCrumb,
            userInfo
        }
    }
</script>

<style lang="less">
    @import '~assets/less/media.less';

    .main-header {

        .navbar {
            display: flex;
            justify-content: space-between;
            box-shadow: 0px 2px 10px rgba(0,0,0,0.3);

        }

        .panel {
            background-color: #30363c;
        }
    }
</style>

