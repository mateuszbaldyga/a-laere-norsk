<template>
  <div class="PageCategory">
    <CategorySelector :categories="database"></CategorySelector>
  </div>
</template>

<script>
import CategorySelector from '@/components/CategorySelector'
import { mapState } from 'vuex'

export default {
  components: {
    CategorySelector
  },

  computed: {
    ...mapState([
      'database'
    ])
  }
}
</script>

<style lang="scss">
.PageCategory {
height: 100%;
}
</style>
