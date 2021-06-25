<template>
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
      </el-date-picker>

      <el-date-picker
          v-model="value2"
          type="datetime"
          placeholder="选择日期时间">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
  export default {
    name: "p12",
    data() {
      return {
        value1:new Date(2010,10,10,18,30),
        value2:new Date(2010,10,10,18,30)
      }
    }
  }
</script>

<style scoped>

</style>