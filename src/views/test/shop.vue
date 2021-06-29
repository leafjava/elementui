<template>
  <div>
    <slot :message="message"></slot>
  </div>
</template>

<script>
  export default {
    name: "shop",
    data() {
      return {
        message:{data:'你好',age:20}
      }
    }
  }
</script>

<style scoped>

</style>