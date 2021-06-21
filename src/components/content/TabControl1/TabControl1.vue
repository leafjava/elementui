<template>
  <div class="TabControl1">
  <div v-for="(item,index) in title"
       class="tab-control-item1"
       @click="tabClick(index)"
        :class="{isActive:index === select}"
        :style="size">{{item}}</div>
  </div>
</template>

<script>
  export default {
    name: "TabControl1",
    props:{
      title:{
        type:Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        select:0,
        transport:0,
        big:400
      }
    },
    methods:{
      tabClick(index){
        this.select = index,
        this.transport = index
      }
    },
    computed:{
      panduan() {
        return this.transport == this.select
      },
      size(){
        return this.panduan ? {fontSize:this.big} : {}

      }
    }
  }
</script>

<style scoped>
  .TabControl1{
    display: flex;
    text-align:center;
    background-color:#fff;

    position:sticky;
    top:80px;
  }

  .tab-control-item1{
    flex:1;
    font-size:15px;
  }

  .isActive {
    color:red
  }
</style>