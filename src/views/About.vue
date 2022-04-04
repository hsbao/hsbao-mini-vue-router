<template>
  <div>
    <div>about page</div>
    <div class="nav">
      <router-link to="/about/a">a模块</router-link>
      <router-link to="/about/b">b模块</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
