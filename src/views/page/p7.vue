<template>
  <div>
    <el-link href="https://element.eleme.io" target="_blank" disabled>默认链接</el-link>
    <el-link type="primary">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告链接</el-link>
    <el-link type="danger">危险链接</el-link>
    <el-link type="info">信息链接</el-link>
    <br/>
    <br/>
    <br/>
    <div>
      <el-link :underline="false">无下划线</el-link>
      <el-link>有下划线</el-link>
    </div>
    <br/>
    <br/>
    <br/>
    <div>
      <el-link icon="el-icon-edit">编辑</el-link>
      <el-link>查看<i class="el-icon-view el-icon--right"></i></el-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "p7"
  }
</script>

<style scoped>
.el-link {
  /*zoom:0.5;*/
  margin:0 10px;
}
</style>