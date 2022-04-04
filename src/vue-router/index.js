import install from './install'
import createMatcher from './create-matcher'
import HashHistory from './history/hashHistory'
import BrowserHistory from './history/browserHistory'
class VueRouter {
  constructor(options) {
    // 一. 创建路由匹配器：该方法具有两个功能，1. 匹配功能   2. 新增路由功能addRoutes
    this.matcher = createMatcher(options.routes || [])

    // 二. 创建路由管理：根据mode是hash还是history选择不同的模式
    this.mode = options.mode || 'hash'
    switch (this.mode) {
      case 'hash':
        this.history = new HashHistory(this)
        break
      case 'history':
        this.history = new BrowserHistory(this)
        break
    }

    this.beforeHooks = []
  }

  match(location) {
    return this.matcher.match(location)
  }

  // 接收当前vue的根实例，指代的是最外层的那个new Vue()
  init(app) {
    const history = this.history
    // 初始化的是需要根据当前路径，实现页面跳转逻辑
    let setupHashListener = () => {
      history.setupListener() // hashchange
    }
    // 跳转路径 进行监控
    history.transitionTo(history.getCurrentLocation(), setupHashListener)

    // 只要current发生变化 就触发此函数
    history.listen((route) => {
      app._route = route // 更新视图的操作，当current变化后再次更新_route属性
    })
  }

  push(location) {
    window.location.hash = location
  }
  beforeEach(fn) {
    this.beforeHooks.push(fn)
  }
}

VueRouter.install = install

export default VueRouter
