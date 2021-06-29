<template>
  <div id="app">
    <el-container>
      <el-aside width="150px" height="100%">
        <router-link to="/home"><p>home</p></router-link>

        <router-link to="/home1"><p>home1</p></router-link>

        <router-link to="/p3"><p>p3 layout</p></router-link>

        <router-link to="/p3.1"><p>p3.1</p></router-link>

        <router-link to="/p3.test"><p>p3.test</p></router-link>

        <router-link to="/p5"><p>p5 icon</p></router-link>

        <router-link to="/p6"><p>p6 button</p></router-link>

        <router-link to="/p7"><p>p7 link</p></router-link>

        <router-link to="/wp1"><p>wp1</p></router-link>

        <router-link to="/p8"><p>p8 input表单元素</p></router-link>

        <router-link to="/p8.1"><p>p8.1 input表单元素</p></router-link>

        <router-link to="/http"><p>http请求</p></router-link>

        <router-link to="/p9"><p>p9 计数器</p></router-link>

        <router-link to="/p10"><p>p10 选择器</p></router-link>

        <router-link to="/p11"><p>p11 switch开关,滑块</p></router-link>

        <router-link to="/p12"><p>p12 时间日期选择器</p></router-link>

        <router-link to="/p13"><p>p13 Upload文件 上传</p></router-link>

        <router-link to="/p13text"><p>p13text Upload</p></router-link>

        <router-link to="/p14"><p>p14评分</p></router-link>

        <router-link to="/p15"><p>p15 Form表单</p></router-link>

        <router-link to="/p15.1"><p>p15.1 Form表单</p></router-link>

        <router-link to="/p15.2"><p>p15.2 Form表单</p></router-link>

        <router-link to="/p16"><p>p16 Table基础使用</p></router-link>

        <router-link to="/p16.1"><p>p16.1 Table基础使用</p></router-link>

        <router-link to="/p16.2"><p>p16.2 Table应用到海关</p></router-link>

        <router-link to="/p17"><p>p17 Table多选和自定义模板</p></router-link>

        <router-link to="/p20"><p>p20 Tree树形控件</p></router-link>

        <router-link to="/p21"><p>p21 Notice消息提示类别组件</p></router-link>

        <router-link to="/p22"><p>p22 NavMenu导航菜单</p></router-link>

        <router-link to="/p23"><p>p23 Tabs标签页</p></router-link>

        <router-link to="/p24"><p>p24 面包屑</p></router-link>

        <router-link to="/p25"><p>p25 dropdown下拉菜单</p></router-link>

        <router-link to="/p26"><p>p26 steps步骤条</p></router-link>

        <router-link to="/p27"><p>p27 Dialog对话框</p></router-link>

        <router-link to="/p28"><p>p28 Tooltip文字提示和Popover弹出框</p></router-link>

        <router-link to="/p29"><p>p29 Popconfirm气泡确认框</p></router-link>

        <router-link to="/p30"><p>p30 走马灯</p></router-link>

        <router-link to="/p31"><p>p31 Others类别组件讲解</p></router-link>

        <router-link to="/test1"><p>练习</p></router-link>
      </el-aside>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>


    <shop>
      <div slot-scope="scope">{{scope.message.data}}</div>
    </shop>
  </div>
</template>

<script>
import shop from './views/test/shop'

export default {
  name: 'app',
  components: {
    shop
  }
}
</script>

<style >
.el-aside {
  border:1px solid rgba(0, 0, 0, 0.5);
  padding:0 2px;
}

</style>
