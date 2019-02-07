<template>
  <div class="PageFlashCards">
    <FlashCards :flashCards="chosenFlashCards"></FlashCards>
  </div>
</template>

<script>
import FlashCards from '@/components/FlashCards'
import { mapGetters } from 'vuex'

export default {
  components: {
    FlashCards
  },

  computed: {
    ...mapGetters([
      'chosenFlashCards'
    ])
  }
}
</script>

<style lang="scss">
.PageFlashCards {
  height: 100%;
}
</style>
