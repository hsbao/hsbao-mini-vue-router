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

        // 如果用户更改了 current 是没有效果的 需要把_route也进行更新
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot
      }
    }
  })

  // 触发路由的属性
  Object.defineProperty(Vue.prototype, '$route', {
    get() {
      return this._routerRoot && this._routerRoot._route
    }
  })

  // 存放的是路由的实例，里面有一些实例上方法: push等等
  Object.defineProperty(Vue.prototype, '$router', {
    get() {
      return this._routerRoot && this._routerRoot._router
    }
  })
}

export default install
