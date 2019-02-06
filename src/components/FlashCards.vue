<template>
  <div class="FlashCards">
    <div class="FlashCards_card" @click="onCardClick()">
      {{ word }}
    </div>
  </div>
</template>

<script>
import nouns from '@/dictionary/nouns'

export default {
  data () {
    return {
      dictionary: nouns,
      index: 0,
      isCardRevealed: false,
    }
  },

  computed: {
    word () {
      return this.dictionary[this.index][this.isCardRevealed ? 'no' : 'pl' ]
    },
  },

  methods: {
    revealCard () {
      this.isCardRevealed = true
    },
    unrevealCard () {
      this.isCardRevealed = false
    },
    goToNextCard() {
      if (this.index === this.dictionary.length - 1) {
        this.index = 0
      } else {
        this.index++
      }
    },
    onCardClick () {
      if (!this.isCardRevealed) {
        this.revealCard()
      } else {
        this.unrevealCard()
        this.goToNextCard()
      }
    },
    handleKeyEvent (e) {
        if (e.keyCode === 32) {
            this.onCardClick()
        }
    },
  },

  mounted () {
      document.addEventListener('keydown', this.handleKeyEvent)
  },

  beforeDestroy () {
      document.removeEventListener('keydown', this.handleKeyEvent)
  },
}
</script>

<style lang="scss">
.FlashCards {
  width: 100%;
  height: 100%;

  &_card {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
  }
}
</style>
