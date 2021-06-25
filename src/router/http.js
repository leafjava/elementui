// import axios from 'axios';
// import { Message, MessageBox } from "element-ui";
// import store from "@/store"
// import * as types from "@/store/types";
// import router from "./router"
//
// // import {getToken} from '@/utils/localToken'
//
// // axios 配置
// // create an axios instance
// const service = axios.create({
//   baseURL: 'api', // url = base url + request url
//   withCredentials: true, //send cookies when cross-domain requests
//   timeout: 30000 //request timeout
// });
//
// //http request 拦截器
// service.interceptors.request.use(
//     config => {
//       //在每一个发送之前做一些调整
//       // if (store.getters.token) {
//       //   // 让每个请求携带token-['Authoeization']为自定义key，请根据实际情况自行修改
//       //   // config.headers['Authorization'] = store.getters.token
//       // }
//       // 登录后每次请求会回送一个这个token
//       if(localStorage.Authorization) {
//         config.headers['Authorization'] = localStorage.Authorization;
//       }
//       return config
//     },
//     err => {
//       console.error(err);
//       Promise.reject(err)
//     }
// )
//
// // http response 拦截器
// service.interceptors.response.use(
//     response => {
//       //下面的注释为通过response自定义code来标识请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
//       //如通过xmlhttprequest 状态码表示  逻辑可写在下面error中
//       const { code, msg } = response.data;
//
//       if (response.status === 200 ) {
//         // http状态码是正确的
//
//         if (code !=0) { // 业务状态吗是错误的
//
//           //未授权 就不需要显示错误了
//           if(code.indexOf('401') == 0) {
//             store.commit("SET_LOGIN_MASE", true);
//             return response.data;
//           }
//
//           // 其他业务数据错误，弹出对话框
//           Message({
//             message:`code=${code},msg=${msg}`,
//             type: 'error',
//             duration: 5 * 1000
//           })
//
//         }
//
//         // 业务数据正确时 + 其他业务数据错误时，都返回 data
//         return response.data
//       }
//
//       else if (response.status === 401) {
//         router.push({ path: "/loginPage"})
//       }
//
//       return response;
//
//     },
//     error => {
//       // error:{ 对象属性
//       //   config
//       //   response
//       //   request
//       // }
//
//       // 后台服务器,会对所有请求返回，http状态码200，包含业务错误的(业务错误data.code !=0)
//       if (error.response && error.response.status == 404) {
//         Message({
//           message: `HTTP错误，请求路径不存在`,
//           type:"error",
//           duration: 5 * 1000
//         });
//       } else if ((error.response && error.response.status >= 500) && error.response.status < 600) {
//         Message({
//           message: `HTTP 错误:服务器错误!`,
//           type: `error`,
//           duration: 5 * 1000
//         });
//       } else if (error.response && error.response.data.status === 401) { //登陆拦截
//         //TODO
//         router.replace({ path: "/loginPage"});
//         store.dispatch("delAllViews").then(({ visitedViews }) => {
//
//         });
//
//         // Message({
//         //   message:`请登录`,
//         //   type: "info",
//         //   duration: 1000
//         // })
//
//       }
//
//       window.onerror &&
//           window.onerror(
//               `HTTP 错误:${JSON.stringify(error)}`,
//               error.config ? error.config.url : "http.js",
//               -1,
//               -1,
//               error
//           );
//       return Promise.reject(error);
//
//
//       //有后台服务器返回数据，进行错误处理
//       if(error.response) {
//         switch (error.response.status) {
//           //401:未登录
//           //未登录则跳转登陆页面，并携带当前页面的路径
//           //在登录成功后返回当前页面，这一步需要在登录页操作
//           case 401: {
//             //vuex中getters.name有数据，且当前路由不在login页面，name就出现全局登录浮动层
//             if (store.getters.name && store.getters.name.length > 0 && router.currentRoute.path !== 'login') {
//               //出现全局登录浮动层
//               store.commit('SET_LOGIN_MASK', true)
//             } else {
//               router:replace({
//                 path: 'login',
//                 query: {
//                   redirect: router.currentRoute.path
//                 }
//               })
//             }
//           }
//           break
//
//           default: {
//             //未处理错误的统一处理
//             Message({
//               message: `未处理错误状态码:${error.response.status}, 错误消息:${error.response.message}`,
//               type: `error`,
//               duration: 5 * 1000
//             });
//             console.error(`[axios error]: 未处理错误 ${JSON.stringify(error.response)}`)
//           }
//           break
//         }
//       } else {
//         //无后台返回数据
//         console.error(error)
//       }
//
//       return Promise.reject(error)
//
//     }
// );
//
// export default service;