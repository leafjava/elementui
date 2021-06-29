<template>
  <div>
    <el-steps direction="vertical" :active="active" finish-status="success">
      <el-step icon="el-icon-edit" title="步骤 11" description="这是学习的第一步"></el-step>
      <el-step title="步骤 22"></el-step>
      <el-step title="步骤 33"></el-step>
    </el-steps>

    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
  export default {
    name: "p26",
    data() {
      return {
        active: 0
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

<style scoped>

</style>