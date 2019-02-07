<template>
  <div class="CategorySelector">
    <div>
      <div v-for="(category, index) in categories" :key="index">
        <h2 :style="{ background: category.color }" :class="{ '-selected': category.title === chosenCategory.title }" @click="chooseCategory(category)">{{ category.title }}</h2>
      </div>

      <BaseButton v-visible="chosenCategory.title" @click.native="start()">GÅ!</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import { mapState } from 'vuex'

export default {
  components: {
    BaseButton
  },

  props: {
    categories: Array
  },

  computed: {
    ...mapState([ 'chosenCategory' ])
  },

  methods: {
    chooseCategory (category) {
      this.$store.commit('CHOOSE_CATEGORY', category)
    },
    start () {
      this.$router.push({ name: 'lessons' })
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/breakpoints.scss";

.CategorySelector {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #222;

  h2 {
    position: relative;
    cursor: pointer;
font-size: 6vw;
    line-height: .8;
        padding: 20px 30px;
        transition: transform .1s;

        @include media(ltMobile) {
          font-size: 30px;
        }

        &.-selected {
          z-index: 1;
              transform: scale(1.2);
        }
  }

  .BaseButton {
    margin-top: 100px;

    @include media(ltMobile) {
      font-size: 60px;
    }
  }
}
</style>
