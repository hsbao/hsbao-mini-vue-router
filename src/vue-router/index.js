import install from './install'
import createMatcher from './create-matcher'
class VueRouter {
  constructor(options) {
    // 一. 创建路由匹配器：该方法具有两个功能，1. 匹配功能   2. 新增路由功能addRoutes
    this.matcher = createMatcher(options.routes || [])

    // 二. 创建路由管理：根据mode是hash还是history选择不同的模式
  }

  // 接收当前vue的根实例，指代的是最外层的那个new Vue()
  init(app) {
    console.log(111)
    this.app = app
  }
}

VueRouter.install = install

export default VueRouter
