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
        path: 'productionDailyReport',
        name: 'productionDailyReport',
        meta: {
          title: '生产日报表'
        },
        component: () => import('@/views/ProductReport/ProductionDailyReport/ProductionDaily.vue')
      },
      {
        path: 'leaderOnDuty',
        name: 'LeaderOnDuty',
        meta: {
          title: '领导值班表'
        },
        component: () => import('@/views/ProductReport/LeaderOnDutyReport/LeaderOnDuty.vue')
      },
      {
        path: 'deviceBreakdown',
        name: 'deviceBreakdown',
        meta: {
          title: '设备故障表'
        },
        component: () => import('@/views/ProductReport/DeviceBreakdownReport/DeviceBreakdown.vue')
      },
      {
        path: 'output',
        name: 'output',
        meta: {
          title: '产量统计表'
        },
        component: () => import('@/views/ProductReport/OutputStatisticsReport/OutputStatisticsReport.vue')
      }
    ]
  }
]

export default router
