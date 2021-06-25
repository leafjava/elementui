<template>
  <div>
    <el-form ref="form" :model="form" label-width="200px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="shenzhen"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
        <el-time-select v-model="form.date2" :picker-options="{selectableRange:'00:00:00 - 00:00:00'}" placeholder="选择时间"></el-time-select>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.send" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动"></el-checkbox>
          <el-checkbox label="地推活动"></el-checkbox>
          <el-checkbox label="线下主题活动"></el-checkbox>
          <el-checkbox label="单纯品牌曝光"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio v-model="form.radio" label="1">线上品牌赞助</el-radio>
        <el-radio v-model="form.radio" label="2">线下场地免费</el-radio>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="form.style"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" >立即创建</el-button>
        <el-button type="info">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "p15-2",
    data() {
      return {
        form:{
          name:'',
          region:'',
          date1:'',
          send:false,
          type:['美食/餐厅线上活动'],
          radio:'1',
          style:''
        }
      }
    }
  }
</script>

<style scoped>
.el-form {
  zoom:0.5;
}
</style>