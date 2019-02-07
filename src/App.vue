<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    this.$router.push({ name: 'categories' })
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/reset.scss";

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}

</style>
