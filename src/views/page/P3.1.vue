<template>
  <div class="about">
    <el-container>
      <el-header>
        <el-row type="flex"  justify="center" :gutter="20" class="banner-box" align="middle">
          <el-col :span="2"><div class="grid-content bg-purple">
            <img class="logo" src="~assets/img/king.png">
          </div></el-col>
          <!--<el-col :span="20"><div class="grid-content bg-purple-light">-->
            <!--<h4>后台管理系统</h4>-->
          <!--</div></el-col>-->
          <el-col  :span="2"><div class="grid-content bg-purple"></div>Tina</el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"

              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    &nbsp

    <el-container>
      <el-header>
        <el-row>
          <el-col :span="6">1</el-col>
          <el-col :span="6">2</el-col>
          <el-col :span="6">3</el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside>
          <el-row type="flex" justify="center"><el-col :span="6">三点几啦</el-col></el-row>
          <el-row type="flex" justify="center"><el-col :span="6">饮茶先啦</el-col></el-row>
        </el-aside>
        <el-container>
          <el-main>main</el-main>
          <el-footer>footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "P31"
  }
</script>

<style scoped>
  .el-header {
    background-color: pink;
  }

  .el-aside {
    background-color: #eeeeed;
  }

  .el-main {
    background-color: #ffef00;
  }

  .el-footer {
    background-color: wheat;
  }

  /*.bg-purple-light {*/
    /*text-align:center;*/
  /*}*/

  .logo {
    width: 20px;
  }

  /*.banner-box {*/
    /*display: flex;*/
    /*align-items:center;*/
  /*}*/

</style>