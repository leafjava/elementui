<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    &nbsp
    <router-link to="/home1">home1</router-link>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>

<style>


</style>
