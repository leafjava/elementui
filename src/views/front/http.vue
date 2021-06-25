<template>
  <div>
    <button @click="btnClick">点击</button>
  </div>
</template>

<script>
  import {Message} from 'element-ui'

  export default {
    name: "http",
    methods:{
      btnClick() {
        Message({
          message: `http错误`,
          type: `error`,
          duration: 1000
        })
      }

    }
  }
</script>

<style scoped>

</style>