<template>
  <div class="PageHome">
    <LessonsSelector :lessons="chosenCategory.lessons" :categoryName="chosenCategory.title"></LessonsSelector>
  </div>
</template>

<script>
import LessonsSelector from '@/components/LessonsSelector'
import { mapState } from 'vuex'

export default {
  components: {
    LessonsSelector
  },

  computed: {
    ...mapState([
      'chosenCategory'
    ])
  }
}
</script>

<style lang="scss">
.PageHome {
height: 100%;
}
</style>
