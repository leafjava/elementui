<template>
  <el-container style="background-color:#e7eaed;width:400px;height:500px" >
    <el-aside style="background-color:pink;width:200px;">
      <el-menu :default-openeds="['3','4.3']">
        <el-submenu index="1">
          <template slot="title">导航1</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">项目一</el-menu-item>
            <el-menu-item index="1-2">项目二</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">导航2</template>
          <el-menu-item-group>
            <template slot="title">分组二</template>
            <el-menu-item index="2.1">2.1</el-menu-item>
            <el-menu-item index="2.2">2.2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">导航3</template>
          <el-menu-item-group>
            <template slot="title">分组三</template>
            <el-menu-item index="3.1">3.1</el-menu-item>
            <el-menu-item index="3.2">3.2</el-menu-item>
            <el-menu-item index="3.3">3.3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">导航4</template>
          <el-menu-item-group>
            <template slot="title">4.1-2</template>
            <el-menu-item index="4.1">4.1</el-menu-item>
            <el-menu-item index="4.2">4.2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-submenu index="4.3">
              <template slot="title">4组</template>
              <el-menu-item-group>
                <el-menu-item>4.3</el-menu-item>
                <el-menu-item>4.4</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </el-container>
</template>

<script>
  export default {
    name: "Home1"
  }
</script>

<style scoped>
  .el-aside {
    zoom:0.5
  }
</style>