<template>
    <el-table
        :data="table"
        style="width: 100%">
      <el-table-column
      prop="name"
      label="书名"
      ></el-table-column>
      <el-table-column
      prop="id"
      label="编号"
      ></el-table-column>
      <el-table-column
      prop="type"
      label="类型"
      ></el-table-column>

    </el-table>
</template>

<script>
  export default {
    name: "p161",
    data() {
      return {
        table:[
          {
            name:'进击的巨人',
            id:'001',
            type:'热血'
          },
          {
            name:'东京食尸鬼',
            id:'002',
            type:'恐怖'
          },
          {
            name:'中华小当家',
            id:'003',
            type:'美食'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>