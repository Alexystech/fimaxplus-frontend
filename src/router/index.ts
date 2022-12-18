import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Citas',
    component: () => import('@/views/citas/Citas.vue')
  },
  {
    path: '/comentarios',
    name: 'Comentarios',
    component: () => import('@/views/comentarios/Comentarios.vue')
  },
  {
    path: '/expedientes-clinicos',
    name: 'Expedientes Clinicos',
    component: () => import('@/views/expedientesClinicos/ExpedientesClinicos.vue')
  },
  {
    path: '/fisioterapeutas',
    name: 'Fisioterapeutas',
    component: () => import('@/views/fisioterapeutas/Fisioterapeutas.vue')
  },
  {
    path: '/ingresos',
    name: 'Ingresos',
    component: () => import('@/views/ingresos/Ingresos.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import('@/views/servicios/Servicios.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import('@/views/usuarios/Usuarios.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
