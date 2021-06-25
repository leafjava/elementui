  // 1:导入
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Home1 = () => import('../views/home/Home1')
const P3 = () => import('../views/page/P3')
const P3_1 = () => import('../views/page/P3.1')
const P3_test = ()  =>import('../views/page/P3.test')
const P5 = () => import("../views/page/p5")
const P6 = () => import("../views/page/p6")
const P7 = () => import("../views/page/p7")
const WP1 = () => import("../views/front/wp1")

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
  },
  {
    path:'/p3',
    component:P3
  },
  {
    path:'/p3.1',
    component:P3_1
  },
  {
    path:'/p3.test',
    component:P3_test
  },
  {
    path:'/p5',
    component:P5
  },
  {
    path:'/p6',
    component:P6
  },
  {
    path:'/p7',
    component:P7
  },
  {
    path:'/wp1',
    component:WP1
  },
  {
    path:'/p8',
    component:() => import("../views/page/p8")
  },
  {
    path:'/p8.1',
    component:() => import("../views/page/p8.1")
  },
  {
    path:'/http',
    component:() => import("../views/front/http")
  },
  {
    path:'/p9',
    component:() => import("../views/page/p9")
  },
  {
    path:'/p10',
    component:() => import("../views/page/p10")
  },
  {
    path:'/p11',
    component:() => import("../views/page/p11")
  },
  {
    path:'/p12',
    component:() => import("../views/page/p12")
  },
  {
    path:'/p13',
    component:() => import("../views/page/p13")
  },
  {
    path:'/p13text',
    component:() => import("../views/page/p13text")
  },
  {
    path:'/p14',
    component:() => import("../views/page/p14")
  },
  {
    path:'/p15',
    component:() => import("../views/page/p15")
  },
  {
    path:'/p15.1',
    component:() => import("../views/page/p15.1")
  },
  {
    path:'/p15.2',
    component:() => import("../views/page/p15-2")
  },
  {
    path:'/p16',
    component:() => import("../views/page/p16")
  },
  {
    path:'/p16.1',
    component:() => import('../views/page/p16.1')
  },
  {
    path:'/p16.2',
    component:() => import('../views/page/p16.2')
  },
  {
    path:'/p17',
    component:() => import('../views/page/p17')
  },
  {
    path:'/p20',
    component:() => import('../views/page/p20')
  },
  {
    path:'/p21',
    component:() => import('../views/page/p21')
  },
  {
    path:'/p22',
    component:() => import('../views/page/p22')
  }

]

  // 4:实例化
const router = new VueRouter({
  routes,
  mode:'history'
  // withCredentials:true
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