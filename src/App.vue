<template>
  <div id="app">
    <router-view></router-view>
    <div id="copyright">
        <p>Copyright © 1996 - 2017 Kongin Corporation, All Rights Reserved</p>
        <p>我的博客 版权所有</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}

html,body{
  padding: 0;
  margin: 0;
  background: #E8E8E8;
}

#copyright{
  text-align: center;
  height: 60px;
  padding: 10px 0;
  margin-bottom: 0;
}

#copyright p{
  height: 30px;
  line-height: 30px;
  margin: 0;
  font-size: 10px;
  color: #A8A8A8;
}

li{
  cursor: pointer;
}
</style>
