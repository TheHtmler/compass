<template>
  <div class="user-info">
    <div class="info">
      <p class="name">{{ nickName }}</p>
      <Icon type="md-contact" />
    </div>
    <div class="user-list">
      <ul>
        <li><Icon type="md-information-circle" />Profile</li>
        <li><Icon type="md-settings" />Setting</li>
        <li><Icon type="md-power" />Logout</li>
      </ul>
    </div>
  </div>
</template>

<script>
import SStorage from 'utils/SStorage'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    nickName() {
      return this.$store.getters.userInfoData.username
    }
  },
  created() {
    // this.username = SStorage.getItem('userInfoObj').username
    // console.log(SStorage.getItem('userInfoObj'))
    console.log(this.$store.getters.userInfoData)
  }
}
</script>

<style lang="less" scoped>
.user-info {
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 10px;

  .info {
    display: flex;
    align-items: center;

    .ivu-icon-md-contact {
      font-size: 30px;
    }

    .name{
      padding: 0 10px;
      font-size: 16px;
    }

  }


  .user-list{
    position: absolute;
    top: 40px;
    right: 0;
    background: #353c42;
    z-index: 99;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    li {
      padding: 6px 30px 6px 10px;
      color: #5b6773;
      font-size: 12px;

      &:hover {
        background: #30363c;
        color: #fff;
        cursor: pointer;
      }

      .ivu-icon{
        padding-right: 5px;
        vertical-align: text-top;
        font-size: 14px;
      }

    }

  }

}
</style>

