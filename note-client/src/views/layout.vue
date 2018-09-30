<template>
  <div class="layout">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    components: {
      Header
    },
    name: "layout"
  }
</script>

<style scoped>

</style>
