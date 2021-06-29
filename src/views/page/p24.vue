<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>

    <el-page-header @back="goBack" content="详情页面">
    </el-page-header>

  </div>
</template>

<script>
  export default {
    name: "p24",
    methods:{
      goBack() {
        console.log('go back');
      }
    }
  }
</script>

<style scoped>
  .el-breadcrumb {
    zoom:0.5;
  }
  .el-page-header {
    zoom:0.5;
  }
</style>