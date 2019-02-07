<template>
  <div class="LessonsSelector">
    <div>
      <h1>{{ categoryName }}</h1>

      <BaseButton class="LessonsSelector_allBtn" @click.native="selectAll()">ALLE</BaseButton>

      <ul>
        <li v-for="(lesson, index) in lessons" :key="index">
          <BaseCheckbox
              v-model="chosenLessons"
              :optionValue="index"
              >
              {{ index + 1 + ' Lekcja' }}
          </BaseCheckbox>
        </li>
      </ul>

      <BaseButton class="LessonsSelector_goBtn" v-visible="chosenLessons.length" @click.native="start()">GÅ!</BaseButton>
      </div>
  </div>
</template>

<script>
import BaseCheckbox from '@/components/BaseCheckbox'
import BaseButton from '@/components/BaseButton'

export default {
  components: {
    BaseCheckbox,
    BaseButton
  },

  props: {
    lessons: Array,
    categoryName: String
  },

  data () {
    return {
      chosenLessons: []
    }
  },

  methods: {
    start () {
      this.$store.commit('CHOOSE_LESSONS', this.chosenLessons)
      this.$router.push({ name: 'flashcards' })
    },
    selectAll () {
      if (this.chosenLessons.length === this.lessons.length) {
        this.chosenLessons = []
      } else {
        this.chosenLessons = this.lessons.map((item, i) => i)
      }
      this.$store.commit('CHOOSE_LESSONS', this.chosenLessons)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/breakpoints.scss";

.LessonsSelector {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #222;

  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  &_allBtn.BaseButton {
    background-color: #ff6896;
    font-size: 6vw;
    width: auto;
    min-width: 0;
    padding: 0 20px;
    margin: 10px 0 15px;

    @include media(ltMobile) {
          font-size: 45px;
    }
  }

  &_goBtn.BaseButton {
        @include media(ltMobile) {
          font-size: 60px;
    }
  }

  .BaseCheckbox {
    width: 100%;
    user-select: none;
  }
}
</style>
