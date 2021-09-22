const router = [
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('@/views/Reports/Index.vue'),
    children: [
      {
        path: 'productionDaily',
        name: 'productionDaily',
        component: () => import('@/views/Reports')
      }
    ]
  }
]

export default router
