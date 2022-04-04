<template>
  <div>
    <div>about page</div>
    <div class="nav">
      <router-link>a模块</router-link>
      <router-link>b模块</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
