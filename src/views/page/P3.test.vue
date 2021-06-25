<template>
  <div class="p3test">
    <el-container>
      <el-header class="title">后台管理系统</el-header>
      <el-container class="major">
        <el-aside>
          <el-menu :default-openeds="['1']" class="guide">
            <!--<template slot="title">导航栏</template>-->
            <el-submenu index="1">
              <template slot="title">手机</template>
              <el-menu-item-group>
                <el-menu-item index="1.1">iphone</el-menu-item>
                <el-menu-item index="1.2">华为</el-menu-item>
                <el-menu-item index="1.3">3星</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">电脑</template>
              <el-menu-item-group>
                <el-menu-item index="2.1">惠普</el-menu-item>
                <el-menu-item index="2.2">华硕</el-menu-item>
                <el-menu-item index="2.3">外星人</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>主要内容</el-main>
          <el-footer>标注</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>


  export default {
    name: 'subject-match'
  };
</script>

<style scope>
.el-header {
  background-color: pink;
}
.el-aside {
  background-color: lightgreen;
}
.el-main {
  background-color: lightyellow;
}
.el-footer {
  background-color: lightblue;
}
.el-menu {
  zoom: 0.5;
}

.title {
  text-align:center;
  line-height: 4rem;
}

.guide {
  height: 100vh;
}

.major {
  height:200px;
}
</style>
