import createRouteMap from './create-route-map'
import { createRoute } from './history/base'

const createMatcher = (routes) => {
  /**
   * 处理用户传进来的routes
   * pathList，会把所有的路由组成一个数组 ['/', '/about', '/about/a', '/about/b']
   * pathMap，{ '/': {}, '/about': {}, '/about/a': {}, ... }
   */
  let { pathList, pathMap } = createRouteMap(routes)

  // 通过路径，获取到对应的匹配记录
  function match(location) {
    // 等会要通过用户输   入的路径 获取对应的匹配记录
    let record = pathMap[location] // 获取对应的记录
    // /about/a  => matched:[/about,/a]
    return createRoute(record, {
      path: location
    })
  }

  // 添加路由时，也要重新对用户传进来的routes进行处理
  // 并且基于旧的pathList, pathMap进行处理
  function addRoutes() {
    createRouteMap(routes, pathList, pathMap)
  }
  return {
    match,
    addRoutes
  }
}
export default createMatcher
