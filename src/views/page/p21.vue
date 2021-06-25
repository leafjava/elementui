<template>
  <div>
    <el-alert
      title="不可关闭的 alert"
      type="success"
      :closable="false">
    </el-alert>
    <br/>
    <el-button @click="loadingChange" v-loading="loading" type="primary" plain></el-button>
  </div>
</template>

<script>
  export default {
    name: "p21",
    data() {
      return {
        loading:false
      }
    },
    methods:{
      openLoading() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      },
      loadingChange() {
        // this.$message({
        //   message: '恭喜你，这是一条成功消息',
        //   type: 'success'
        // });
        // this.openLoading()
        // this.loading = !this.loading

        // this.$confirm('是否确认显示loading', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   this.openLoading()
        // }).catch(() => {
        // })

        const h = this.$createElement;

        this.$notify({
          title: '这是一条提示框',
          type:'warning',
          message: h('i', { style: 'color: teal'}, '这是我写的提示')
        });

      }
    }
  }
</script>

<style scoped>

</style>