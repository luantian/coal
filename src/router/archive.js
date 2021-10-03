const router = [
  {
    path: '/deviceArchiveReport',
    name: 'deviceArchiveReport',
    meta: {
      title: '现场人员基础档案'
    },
    component: () => import('@/views/DeviceArchivesReport/Index.vue'),
    children: [
      {
        path: 'sitePersonnelFiles',
        name: 'sitePersonnelFiles',
        meta: {
          title: '现场人员基础档案'
        },
        component: () => import('@/views/DeviceArchivesReport/SitePersonnelFilesReport/SitePersonnelFiles')
      },
      {
        path: 'lubricatingOilConsumption',
        name: 'lubricatingOilConsumption',
        meta: {
          title: '润滑用油明细表'
        },
        component: () => import('@/views/DeviceArchivesReport/LubricatingOilConsumptionReport/LubricatingOilConsumptionReport.vue')
      },
      {
        path: 'deviceBasicFiles/wheelBucketEquipment',
        name: 'wheelBucketEquipment',
        meta: {
          title: '轮斗设备基础档案'
        },
        component: () => import('@/views/DeviceArchivesReport/WheelBucketEquipment/WheelBucketEquipment.vue')
      },
      {
        path: 'deviceBasicFiles/reversedLoader',
        name: 'reversedLoader',
        meta: {
          title: '转载机基础档案'
        },
        component: () => import('@/views/DeviceArchivesReport/ReservedLoaderReport/ReversedLoaderReport.vue')
      },
      {
        path: 'deviceBasicFiles/cantileverReceivingCar',
        name: 'cantileverReceivingCar',
        meta: {
          title: '悬臂受料车基础档案'
        },
        component: () => import('@/views/DeviceArchivesReport/CantileverReceivingCarReport/CantileverReceivingCar.vue')
      },
      {
        path: 'deviceBasicFiles/ribbonConveyer',
        name: 'ribbonConveyer',
        meta: {
          title: '带式输送机基础档案'
        },
        component: () => import('@/views/DeviceArchivesReport/RibbonConveyerReport/RibbonConveyerReport.vue')
      },
      {
        path: 'deviceBasicFiles/loadingBunker',
        name: 'loadingBunker',
        meta: {
          title: '装车仓基础档案'
        },
        component: () => import('@/views/DeviceArchivesReport/RibbonConveyerReport/RibbonConveyerReport.vue')
      },
      {
        path: 'deviceParts/wheelBucket',
        name: 'wheelBucket1',
        meta: {
          title: '轮斗挖掘机零部件基础档案'
        },
        component: () => import('@/views/DeviceArchivesReport/WheelBucketEquipmentParts/WheelBucketEquipmentParts.vue')
      },
      {
        path: 'deviceParts/reversedLoaderParts',
        name: 'reversedLoaderParts',
        meta: {
          title: '转载机零部件基础档案'
        },
        component: () => import('@/views/DeviceArchivesReport/ReservedLoaderParts/ReversedLoaderParts.vue')
      },
      {
        path: 'deviceParts/cantileverReceivingCarParts',
        name: 'cantileverReceivingCarParts',
        meta: {
          title: '悬臂受料车零部件基础档案'
        },
        component: () => import('@/views/DeviceArchivesReport/CantileverReceivingCarParts/CantileverReceivingCar.vue')
      },
      {
        path: 'deviceParts/strap',
        name: 'strap',
        meta: {
          title: '皮条零部件基础档案'
        },
        component: () => import('@/views/DeviceArchivesReport/StrapParts/StrapParts.vue')
      },
      {
        path: 'breakDown/wheelBucket',
        name: 'wheelBucket2',
        meta: {
          title: '轮斗挖掘机故障基础档案'
        },
        component: () => import('@/views/DeviceArchivesReport/WheelBucketEquipmentBreakdown/WheelBucketEquipmentBreakdown.vue')
      },
      {
        path: 'breakDown/reversedLoaderBreakdown',
        name: 'reversedLoaderBreakdown',
        meta: {
          title: '转载机故障基础档案'
        },
        component: () => import('@/views/DeviceArchivesReport/ReservedLoaderBreakdown/ReversedLoaderReport.vue')
      },
      {
        path: 'breakDown/cantileverReceivingCarBreakdown',
        name: 'cantileverReceivingCarBreakdown',
        meta: {
          title: '悬臂受料车故障基础档案'
        },
        component: () => import('@/views/DeviceArchivesReport/CantileverReceivingCarBreakdown/CantileverReceivingCar.vue')
      }
    ]
  }

]

export default router
