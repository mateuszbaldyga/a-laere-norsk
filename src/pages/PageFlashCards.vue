<template>
    <div class="PageFlashCards">
        <p
            v-visible="lap"
            class="PageFlashCards_lap"
            >
            {{ lap }}
        </p>
        <div
            class="PageFlashCards_card"
            @click="onCardClick()"
            >
            {{ word | capitalize }}
        </div>
        <div class="PageFlashCards_actions">
            <BaseButton @click.native="unrevealCard() + goBack()">
                ⇦
            </BaseButton>
            <BaseButton @click.native="unrevealCard() + goNext() ">
                ⇨
            </BaseButton>
        </div>
    </div>
</template>

<script>
import { shuffle } from 'lodash'
import BaseButton from '@/components/BaseButton'

export default {
    components: {
        BaseButton,
    },

    props: {
        pageFlashCards: Array,
    },

    data () {
        return {
            index: 0,
            isCardRevealed: false,
            lap: 0,
        }
    },

    computed: {
        PageFlashCardsInGame () {
            return shuffle(this.PageFlashCards)
        },
        word () {
            return this.PageFlashCardsInGame[this.index][this.isCardRevealed ? 'no' : 'pl']
        },
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
            if (this.index === this.PageFlashCardsInGame.length - 1) {
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
@import '@/assets/styles/breakpoints.scss';

.PageFlashCards {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &_lap {
        position: absolute;
        top: 0;
        right: 0;
        padding: 30px;
        font-size: 20px;
        text-align: right;
    }

    &_card {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        width: 100%;
        font-size: 60px;
        user-select: none;
        text-align: center;
        line-height: 1.4;
        word-break: break-all;

        @include media(ltMobile) {
            font-size: 40px;
        }
    }

    &_actions {
        display: flex;

        .BaseButton {
            min-width: 0;
            width: 50%;
            padding: 20px;
            background: none;
            margin-top: 0;
            color: #000;
            font-size: 30px;
        }
    }
}
</style>
