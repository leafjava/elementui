<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="10">1</el-col>
      <el-col :span="10">2</el-col>
    </el-row>
    <i class="el-icon-aim in"></i>

    <el-button type="warning">按钮</el-button>
    <el-link>链接</el-link>

    <br/>
    <div>p8表单</div>
    <el-input placeholder="表单" class="p8"></el-input>

    <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>

    <el-select v-model="value" placeholder="请选择">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>

    <el-switch
        v-model="value1"
        active-color="#13ce66"
        inactive-color="#ff4949">
    </el-switch>

    <el-slider v-model="value2"></el-slider>

    <el-date-picker
        v-model="value3"
        type="date"
        placeholder="选择日期">
    </el-date-picker>


  </div>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        num:1,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value1:true,
        value2:0,
        value3:''
      }
    }
  }
</script>

<style scoped>
.in {
  color: red;
  zoom:3
}

.p8 {
  zoom:0.5;
  width:50%;
}
</style>