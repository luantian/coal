const router = [
  {
    path: '/productReport',
    name: 'productReport',
    component: () => import('@/views/ProductReport/Index.vue'),
    children: [
      {
        path: 'productionDaily',
        name: 'ProductionDaily',
        component: () => import('@/views/ProductReport')
      },
      {
        path: 'leaderOnDuty',
        name: 'leaderOnDuty',
        component: () => import('@/views/ProductReport/LeaderOnDutyReport/LeaderOnDuty.vue')
      }
    ]
  }
]

export default router
