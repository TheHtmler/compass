<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  } 
</script>

<style lang="less" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    min-width: 320px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    color: #88939C;
    border: 10px solid transparent;

    &:before{
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #94525A;
      background: radial-gradient(farthest-corner at 95% 10%, #94525A, #181528);
    }
  }
</style>
