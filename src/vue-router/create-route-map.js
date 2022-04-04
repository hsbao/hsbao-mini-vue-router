const addRouteRecord = (route, pathList, pathMap, parentRecord) => {
  // 判断是否是多层路由嵌套，拼接正常path
  let path = parentRecord ? `${parentRecord.path}/${route.path}` : route.path
  let record = {
    path,
    component: route.component,
    parent: parentRecord // 记录中保存一下父路径是谁
  }

  // 判断是否已经存在当前path，避免覆盖
  if (!pathMap[path]) {
    pathMap[path] = record
    pathList.push(path)
  }
  /// 递归，要将子路由也放到对应的pathMap和pathList
  if (route.children) {
    route.children.forEach((r) => {
      addRouteRecord(r, pathList, pathMap, record)
    })
  }
}

export default function createRouteMap(routes, oldPathList, oldPathMap) {
  let pathList = oldPathList || []
  let pathMap = oldPathMap || {}
  routes.forEach((route) => {
    addRouteRecord(route, pathList, pathMap)
  })
  return {
    pathList,
    pathMap
  }
}
