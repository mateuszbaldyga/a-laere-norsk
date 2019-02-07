<template>
  <div id="app">
    <router-link id="home" :to="{ name: 'categories' }" v-if="$route.name !== 'categories'">🏠</router-link>
    <main>
      <router-view/>
    </main>
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
@import "@/assets/styles/breakpoints.scss";

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  > main {
    flex: 1;
  }

  #home {
    font-size: 20px;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
        position: absolute;
    top: 30px;
    left: 30px;
  }
}

</style>
