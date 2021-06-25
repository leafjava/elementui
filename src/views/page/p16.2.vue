<template>
  <div>
    <el-card shadow="hover">
      <el-table
          border
          :data="tableData"
      >
        <el-table-column prop="statDate" label="统计日期" align="center" width="200"></el-table-column>
        <el-table-column prop="customsCodeText" label="关区" align="center"></el-table-column>
        <el-table-column prop="iEFlagText" label="进出境" align="center"></el-table-column>
        <el-table-column prop="flightId" label="航班信息" align="center"></el-table-column>

        <el-table-column label="托运行李">
          <el-table-column prop="tyRsk" label="布控人数" align="center"></el-table-column>
          <el-table-column prop="tyFace" label="人脸识别人数" align="center"></el-table-column>
          <el-table-column prop="tyCheck" label="已转查验人数" align="center"></el-table-column>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "p162",
    data() {
      return {
        tableData:[
          {
            statDate:'2020/2/1',
            customsCodeText:'南京海关',
            iEFlagText:'进出境',
            flightId:'航班信息',
            tyRsk:250,
            tyFace:25,
            tyCheck:15
          }
        ]
      }
    }
  }
</script>

<style scoped>
.el-table {
  zoom:0.5;
}
</style>