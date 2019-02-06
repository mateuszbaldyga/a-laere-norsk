<template>
  <div id="app">
    <FlashCards></FlashCards>
  </div>
</template>

<script>
import FlashCards from '@/components/FlashCards'

export default {
  name: 'app',
  components: {
    FlashCards
  }
}
</script>

<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
