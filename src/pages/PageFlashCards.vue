<template>
    <LayoutDefault class="PageFlashCards">
        <div slot="header">
            <BackButton :to="{name: 'lessons'}" />
            <button
                class="PageFlashCards_shuffleBtn"
                @click="shuffle()"
                >
                &#x1f500;
            </button>
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
        <div
            slot="footer"
            class="PageFlashCards_actions"
            >
            <button @click="goBack()">
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
            flashcardsInGame: [],
        }
    },

    computed: {
        word () {
            return this.flashcardsInGame[this.index][this.isCardRevealed ? 'no' : 'pl']
        },
        className () {
            return {
                '-male': this.word.indexOf('en ') === 0,
                '-female': this.word.indexOf('ei ') === 0,
                '-male-female': this.word.indexOf('ei/en') === 0 || this.word.indexOf('en/ei') === 0,
                '-neuter': this.word.indexOf('et ') === 0,
            }
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
            if (this.isCardRevealed) {
                this.unrevealCard()
            } else if (this.index === 0) {
                return
            } else {
                this.index--
            }
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
        shuffle () {
            this.flashcardsInGame = shuffle(this.flashcards)
            this.index = 0
        },
    },

    created () {
        this.shuffle()
        console.log('🦄 this.flashcards', this.flashcards)
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

    &_shuffleBtn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: $header-footer-height;
        height: $header-footer-height;
        margin-right: 20px;
        font-size: 25px;
    }

    &_lap {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        font-size: 20px;
        line-height: 50px;
        text-align: center;
    }

    &_card {
        display: flex;
        flex: 1;
        width: 100%;
        padding: 10px;
        font-size: 60px;
        user-select: none;
        text-align: center;
        line-height: 1.4;

        @include media(ltMobile) {
            font-size: 40px;
        }

        > h1 {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            padding: 5px;

            &:before {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: -1;
                opacity: 0;
                transition: opacity .3s;
            }

            &.-male {
                &:before {
                    background-color: $color-male;
                    opacity: 1;
                }
            }

            &.-female {
                &:before {
                    background-color: $color-female;
                    opacity: 1;
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
                    background-color: $color-neuter;
                    opacity: 1;
                }
            }
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
