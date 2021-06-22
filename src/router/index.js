  // 1:导入
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Home1 = () => import('../views/home/Home1')

  // 2:安装插件
Vue.use(VueRouter)

  // 3:配置组件路径映射表
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/home1',
    component:Home1
  }
]

  // 4:实例化
const router = new VueRouter({
  routes,
  mode:'history'
})

  // 5:导出
export default router;

  //导航
// router.beforeEach((to,from,next) => {
//   next()
// })
//
// router.afterEach((to,from) => {
//
// })