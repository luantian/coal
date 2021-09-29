const router = [
  {
    path: '/videoMonitor',
    name: 'productReport',
    meta: {
      title: ''
    },
    component: () => import('@/views/videoMonitor/videoMonitor.vue'),
    children: [
      {
        path: 'productionDailyReport',
        name: 'productionDailyReport',
        meta: {
          title: '生产日报表'
        },
        component: () => import('@/views/videoMonitor/ProductionDailyReport/ProductionDaily.vue')
      },
    ]
  }
]

export default router
