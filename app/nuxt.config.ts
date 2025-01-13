export default {
  routes: [
    {
      path: '/addSchedule/:id',
      name: 'AddSchedule',
      component: () => import('@/pages/addSchedule/[id].vue'),
    },
    {
      path: '/addScheduleSave',
      name: 'AddScheduleSave',
      component: () => import('@/pages/addScheduleSave.vue'),
    },
  ],
}
