const router = [
  {
    path: '/productReport',
    name: 'productReport',
    meta: {
      title: '测试1'
    },
    component: () => import('@/views/ProductReport/Index.vue'),
    children: [
      {
        path: 'productionPlan',
        name: 'productionPlan',
        meta: {
          title: '生产日报-生产计划'
        },
        component: () => import('@/views/ProductReport/ProductionDailyReport/ProductionDaily.vue')
      },
      {
        path: 'completion',
        name: 'completion',
        meta: {
          title: '生产日报-完成情况'
        },
        component: () => import('@/views/ProductReport/ProductionCompletionReport/Completion.vue')
      },
      {
        path: 'deviceBreakdown',
        name: 'deviceBreakdown',
        meta: {
          title: '设备故障表'
        },
        component: () => import('@/views/ProductReport/DeviceBreakdownReport/DeviceBreakdown.vue')
      }
    ]
  }
]

export default router
