<template>
  <div>
    <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
        :http-request="uploadFile"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
  export default {
    name: "p13text",
    methods: {
      beforeAvatarUpload(file) {
        const isJPG =
            file.type === "image/jpg" ||
            file.type === "image/jpeg" ||
            file.type === "image/png";
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error("仅支持jpg，png格式的图片！");
        }
        if (!isLt2M) {
          this.$message.error("上传图片大小不能超过 2MB!");
        }
        return isJPG && isLt2M;
      },
      uploadFile(item) {
        let userId = sessionStorage.getItem("userId");
        let fileObj = item.file;
        const form = new FormData(); // FormData 对象
        form.append("file", fileObj); // 文件对象  'upload'是后台接收的参数名
        form.append("userId", userId);
        this.axios(api.uploadImge, form, "form")
            .then((data) => {
              if (data.code == "000000") {
                this.$message({
                  message: "上传成功",
                  type: "success",
                });
                this.urlImage = data.content;
              }
            })
            .catch((data) => {
              this.$message.error("上传失败，请稍后重试");
            });
      },
    }
  }
</script>

<style scoped>

</style>