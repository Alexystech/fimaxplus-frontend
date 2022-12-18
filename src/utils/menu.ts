// se genera inline interface para definir los tipos de dato del array de objetos
const menu: { tag: string, icon: string, ruta?: string, parent?: string, hijos?: { tag: string, ruta: string }[] }[] = [
  {
    tag: 'Citas',
    icon: 'mdi mdi-comment-quote',
    ruta: '/'
  },
  {
    tag: 'Comentarios',
    icon: 'mdi mdi-comment-text-multiple',
    ruta: '/comentarios'
  },
  {
    tag: 'Expedientes Clinicos',
    icon: 'mdi mdi-file-account',
    ruta: '/expedientes-clinicos'
  },
  {
    tag: 'Fisioterapeutas',
    icon: 'mdi mdi-medical-bag',
    ruta: '/fisioterapeutas'
  },
  {
    tag: 'Ingresos',
    icon: 'mdi mdi-cash-multiple',
    ruta: '/ingresos'
  },
  {
    tag: 'Servicios',
    icon: 'mdi mdi-thumb-up',
    ruta: '/servicios'
  },
  {
    tag: 'Usuarios',
    icon: 'mdi mdi-account-group',
    ruta: '/usuarios'
  },
]

export default menu
