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
        path: 'productionDaily',
        name: 'ProductionDaily',
        meta: {
          title: '测试2'
        },
        component: () => import('@/views/ProductReport')
      },
      {
        path: 'leaderOnDuty',
        name: 'leaderOnDuty',
        meta: {
          title: '测试3'
        },
        component: () => import('@/views/ProductReport/LeaderOnDutyReport/LeaderOnDuty.vue')
      }
    ]
  },
]

export default router
