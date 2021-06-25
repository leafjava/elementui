<template>
  <div>
     1.基础用法
    <el-input placeholder="请输入" v-model="message" ></el-input>
     2.禁用状态
    <el-input placeholder="请输入" v-model="data" :disabled="true"></el-input>

     3.可清空
    <el-input placeholder="请输入" v-model="news1"></el-input>

     4.密码框
    <el-input v-model="news2" show-password></el-input>

     5.带icon的输入框
    <el-input suffix-icon="el-icon-date" v-model="input1"></el-input>
    <el-input v-model="input"><i slot="prefix" class="el-input__icon el-icon-date"></i></el-input>

    6.文本域
    <el-input type="textarea" :rows="2" v-model="textarea"></el-input>

    7.可自适应文本高度的文本域
    <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1"></el-input>
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea2"></el-input>

    8.复合型输入框
    <div>
      <el-input v-model="input2">
        <template slot="prepend">Http://</template>
      </el-input>
    </div>
    <div>
      <el-input v-model="input3">
        <template slot="append">.com</template>
      </el-input>
    </div>
    <div class="fix">
      <el-input placeholder="请输入内容" v-model="input4" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>



    <!--9.尺寸-->
    <!--&nbsp-->

    <!--gitee.com/matevip-->

  </div>
</template>

<script>
  export default {
    name: "p8",
    data() {
      return {
        message:null,
        data:null,
        news1:null,
        news2:null,
        input:null,
        input1:null,
        input2:null,
        input3:null,
        input4:null,
        input5:null,
        textarea:null,
        textarea1:null,
        textarea2:null,
        select:null,
        text:null
      }
    }
  }
</script>

<style scoped>

</style>