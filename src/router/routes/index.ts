import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/wordcloud',
    name: 'wordcloud',
    component: () => import('@/views/WordCloud.vue'),
    meta: {
      title: '词云',
    },
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: () => import('@/views/TimeLine.vue'),
    meta: {
      title: '时间轴',
    },
  },
  {
    path: '/population',
    name: 'population',
    component: () => import('@/views/Population.vue'),
    meta: {
      title: '人口规模',
    },
  },
  {
    path: '/poverty',
    name: 'poverty',
    component: () => import('@/views/Poverty/index.vue'),
    meta: {
      title: '脱贫致富',
    },
  },
  {
    path: '/civilization',
    name: 'civilization',
    component: () => import('@/views/Civilization/index.vue'),
    meta: {
      title: '物质精神文明',
    },
  },
  {
    path: '/nature',
    name: 'nature',
    component: () => import('@/views/Nature/index.vue'),
    meta: {
      title: '人与自然和谐相处',
    },
  },
  {
    // path: '/province/:name/:pinying',
    path: '/province/:name',
    name: 'province',
    component: () => import('@/views/ProvinceChart/index.vue'),
    meta: {
      title: '省内地图',
    },
  },
  {
    // path: '/province/:name/:pinying',
    path: '/peace',
    name: 'peace',
    component: () => import('@/views/Peace/index.vue'),
    meta: {
      title: '和平发展',
    },
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test.vue'),
    meta: {
      title: 'Test',
    },
  },
  /**
   * 子路由示例
   */
  // {
  //   path: '/foo',
  //   name: 'foo',
  //   component: () => import('@/components/TransferStation.vue'),
  //   meta: {
  //     title: 'Foo',
  //   },
  //   redirect: {
  //     name: 'bar',
  //   },
  //   children: [
  //     {
  //       path: 'bar',
  //       name: 'bar',
  //       component: () => import('@/views/foo/bar.vue'),
  //       meta: {
  //         title: 'Bar',
  //       },
  //     },
  //   ],
  // },
]

export default routes
