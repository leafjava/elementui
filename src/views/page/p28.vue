<template>
  <div>
    <div class="box">
      <div class="top">
        <el-tooltip  class="item" effect="light" content="Top Left 提示文字" placement="top-start">
          <el-button>上左</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
          <el-button>上边</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
          <el-button>上右</el-button>
        </el-tooltip>
      </div>
    </div>

    <el-popover
        placement="top-start"
        title="小标题"
        width="200"
        trigger="hover"
        content="这是一段内容">
      <el-button slot="reference">hover 激活</el-button>
    </el-popover>

  </div>
</template>

<script>
  export default {
    name: "p28"
  }
</script>

<style scoped>
  .box {
    width: 400px;
  }
  .top {
    text-align: center;
  }
</style>