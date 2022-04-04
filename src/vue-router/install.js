import RouterLink from './components/router-link'
import RouterView from './components/router-view'

export let Vue

const install = (_Vue) => {
  Vue = _Vue
  Vue.component('router-link', RouterLink)
  Vue.component('router-view', RouterView)

  Vue.mixin({
    beforeCreate() {
      // 给全部组件增加_routerRoot属性
      if (this.$options.router) {
        this._routerRoot = this
        this._router = this.$options.router

        // 初始化路由
        this._router.init(this)
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot
      }
    }
  })
}

export default install
