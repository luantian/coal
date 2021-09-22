const router = [
  {
    path: '/deviceArchives',
    name: 'deviceArchives',
    component: () => import('@/views/DeviceArchives/Index.vue'),
    children: [
      {
        path: 'SitePersonnelFiles',
        name: 'SitePersonnelFiles',
        component: () => import('@/views/DeviceArchives')
      }
    ]
  }
]

export default router
