import History from './base'

const ensureSlash = () => {
  // window.location.href.slice('#')[1]
  if (window.location.hash) {
    return
  }
  window.location.hash = '/'
}

export default class HashHistory extends History {
  constructor(route) {
    super(route)
    this.route = route

    // 如果使用hashHistory 默认如果没有hash 应该跳转到 首页 #/
    ensureSlash()
  }

  getCurrentLocation() {
    return window.location.hash.slice(1)
  }

  setupListener() {
    window.addEventListener('hashchange', () => {
      // 监听hash变化，再次执行匹配操作
      this.transitionTo(this.getCurrentLocation())
    })
  }
}
