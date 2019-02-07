<template>
    <LayoutDefault class="PageFlashCards">
        <div slot="header">
            <BackButton :to="{name: 'lessons'}"></BackButton>
                <!-- v-visible="lap" -->
            <p
                class="PageFlashCards_lap"
                >
                {{ lap }}
            </p>
        </div>
        <div
            slot="main"
            class="PageFlashCards_card container"
            @click="onCardClick()"
            >
            <h1 :class="className">
                {{ word | capitalize }}
            </h1>
        </div>
        <div slot="footer" class="PageFlashCards_actions">
            <button @click="unrevealCard() + goBack()">
                ⇦
            </button>
            <button @click="unrevealCard() + goNext() ">
                ⇨
            </button>
        </div>
    </LayoutDefault>
</template>

<script>
import { shuffle } from 'lodash'

export default {
    props: {
        flashcards: Array,
    },

    data () {
        return {
            index: 0,
            isCardRevealed: false,
            lap: 0,
        }
    },

    computed: {
        flashcardsInGame () {
            return shuffle(this.flashcards)
        },
        word () {
            return this.flashcardsInGame[this.index][this.isCardRevealed ? 'no' : 'pl']
        },
        className () {
            const _word = this.word.toLowerCase()

            return {
                '-male': _word.indexOf('en ') > -1,
                '-female': _word.indexOf('ei ') > -1,
                '-male-female': _word.indexOf('ei/') > -1 || _word.indexOf('en/') > -1,
                '-neuter': _word.indexOf('et ') > -1,
            }
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
            if (this.index === this.flashcardsInGame.length - 1) {
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
@import '@/assets/styles/shared-vars.scss';

.PageFlashCards {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &_lap {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
    line-height: 50px;
    width: 50px;
    text-align: center;
    }

    &_card {
        display: flex;
        flex: 1;
        width: 100%;
        font-size: 60px;
        user-select: none;
        text-align: center;
        line-height: 1.4;
        padding: 10px;

        > h1 {
            position: relative;
            padding: 5px;
            flex: 1;
            display: flex;
                    align-items: center;
        justify-content: center;

        &:before {
        transition: opacity .3s;
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            opacity: 0;
            z-index: -1;
        }

            &.-male {
                &:before {
                    opacity: 1;
                    background-color: $color-male;
                }
            }

            &.-female {
                &:before {
                    opacity: 1;
                    background-color: $color-female;
                }
            }

            &.-male-female {
                &:before {
                    opacity: 1;
                    background-image: linear-gradient(15deg, $color-male 50%, $color-female 50%);
                }
            }

            &.-neuter {
                &:before {
                    opacity: 1;
                    background-color: $color-neuter;
                }
            }
        }

        @include media(ltMobile) {
            font-size: 40px;
        }
    }

    &_actions {
        display: flex;
        align-items: stretch;
        height: 100%;
        font-size: 20px;

        > button {
            width: 50%;
        }
    }
}
</style>
