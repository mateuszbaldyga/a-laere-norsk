<template>
  <div class="FlashCards">
    <p class="FlashCards_lap" v-visible="lap">{{ lap }}</p>
    <div class="FlashCards_card" @click="onCardClick()">
      {{ word | capitalize }}
    </div>
    <div class="FlashCards_actions">
      <BaseButton @click.native="unrevealCard() + goBack()">⬅</BaseButton>
      <BaseButton @click.native="unrevealCard() + goNext() ">➡</BaseButton>
    </div>
  </div>
</template>

<script>
import { shuffle } from 'lodash'
import BaseButton from '@/components/BaseButton'

export default {
  components: {
    BaseButton
  },

  props: {
    flashCards: Array
  },

  data () {
    return {
      index: 0,
      isCardRevealed: false,
      lap: 0
    }
  },

  computed: {
    flashCardsInGame () {
      return shuffle(this.flashCards)
    },
    word () {
      return this.flashCardsInGame[this.index][this.isCardRevealed ? 'no' : 'pl' ]
    }
  },

  methods: {
    revealCard () {
      this.isCardRevealed = true
    },
    unrevealCard () {
      this.isCardRevealed = false
    },
    goBack () {
      if (this.index === 0) return
      this.index--
    },
    goNext () {
      if (this.index === this.flashCardsInGame.length - 1) {
        this.lap++
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
        this.goNext()
      }
    },
    handleKeyEvent (e) {
      if (e.keyCode === 32) {
        this.onCardClick()
      }
    }
  },

  mounted () {
    document.addEventListener('keydown', this.handleKeyEvent)
  },

  beforeDestroy () {
    document.removeEventListener('keydown', this.handleKeyEvent)
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/breakpoints.scss";

.FlashCards {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &_lap {
    position: absolute;
    top: 0;
    right: 0;
    text-align: right;
    font-size: 20px;
    padding: 30px;
  }

  &_card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    text-align: center;
    line-height: 1.4;
    flex: 1;
    user-select: none;
    word-break: break-all;

    @include media(ltMobile) {
      font-size: 40px;
    }
  }

  &_actions {
    display: flex;

    .BaseButton {
      margin-top: 0;
      background: none;
      color: #000;
      min-width: 0;
      width: 50%;
      font-size: 30px;
      padding: 20px;
    }
  }
}
</style>
