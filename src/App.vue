<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.nav {
  display: flex;
  align-items: center;
}
.nav a {
  margin-right: 20px;
}
</style>
