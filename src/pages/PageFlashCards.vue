<template>
    <LayoutDefault class="PageFlashCards">
        <template slot="header">
            <BackButton @click.native="$router.go(-1)" />
            <button
                class="PageFlashCards_shuffleBtn"
                @click="shuffle()"
                >
                <i>&#x1f500;</i>
            </button>
            <button
                v-if="isLogged"
                class="PageFlashCards_markBtn"
                @click="showConfirmDialog = true"
                >
                <i>❌</i>
            </button>
            <div class="PageFlashCards_counter">
                <p
                    v-visible="lap"
                    class="counter_lap"
                    >
                    {{ lap }}
                </p>
                <p
                    class="counter_card"
                    v-html="progress"
                    />
                <p class="counter_side">
                    {{ cardSide }}
                </p>
            </div>

            <!-- <transition name="TransitionOpacity"> -->
            <ConfirmDialog
                :isOpened="showConfirmDialog"
                :message="'Oznaczyć jako trudne?'"
                :onAgree="agree"
                :onCancel="cancel"
                />
            <!-- </transition> -->
        </template>

        <div
            slot="main"
            class="PageFlashCards_card container"
            @click="onCardClick()"
            >
            <h1 :class="className">
                {{ word | capitalize }}
            </h1>
            <!-- <transition name="TransitionOpacity"> -->
            <div
                v-if="showTick"
                class="card_toast"
                >
                <i>
                    &#x2713;
                </i>
                <span>
                    {{ markedWord }}
                </span>
            </div>
            <!-- </transition> -->
        </div>
        <template
            slot="footer"
            >
            <button @click="goBack()">
                <i>⇦</i>
            </button>
            <button @click="unrevealCard() + goNext() ">
                <i>⇨</i>
            </button>
        </template>
    </LayoutDefault>
</template>

<script>
import { shuffle } from 'lodash'
import { mapState, mapGetters } from 'vuex'
import ConfirmDialog from '@/components/ConfirmDialog'

export default {

    components: {
        ConfirmDialog,
    },
    props: {
        flashcards: Array,
    },

    data () {
        return {
            currentIndex: 0,
            isCardRevealed: false,
            lap: 0,
            flashcardsInGame: [],
            showConfirmDialog: false,
            showTick: false,
            markedWord: '',
        }
    },

    computed: {
        ...mapState([
            'isModePlToNo',
        ]),
        ...mapGetters([
            'isLogged',
        ]),
        flashcardsWithoutMastered () {
            // return this.flashcards.filter(card => !Array.from(this.masteredFlashCards).some(mastered => card.id === mastered.id))
            return this.flashcards
        },
        word () {
            const langOrder = this.isModePlToNo ? ['pl', 'no'] : ['no', 'pl']
            return this.flashcardsInGame[this.currentIndex][!this.isCardRevealed ? langOrder[0] : langOrder[1]]
        },
        className () {
            return {
                '-card-revealed': this.isCardRevealed,
                '-male': this.word.indexOf('en ') === 0,
                '-female': this.word.indexOf('ei ') === 0,
                '-male-female': this.word.indexOf('ei/en') === 0 || this.word.indexOf('en/ei') === 0,
                '-neuter': this.word.indexOf('et ') === 0,
            }
        },
        progress () {
            return this.currentIndex + 1 + '<br>' + this.flashcardsInGame.length
        },
        cardSide () {
            return this.isCardRevealed ? 'B' : 'A'
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
            } else if (this.currentIndex === 0) {
                return
            } else {
                this.currentIndex--
            }
        },
        goNext () {
            if (this.currentIndex === this.flashcardsInGame.length - 1) {
                this.lap++
                this.currentIndex = 0
            } else {
                this.currentIndex++
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
            this.flashcardsInGame = shuffle(this.flashcardsWithoutMastered)
            this.currentIndex = 0
            this.isCardRevealed = false
        },
        markAsMastered () {
            const flashcard = this.flashcardsInGame[this.currentIndex]
            this.$store.dispatch('UPDATE_MASTERED_FLASHCARD', { flashcard })
            this.flashcardsInGame.splice(this.currentIndex, 1)
        },
        markAsHard () {
            const card = this.flashcardsInGame[this.currentIndex]
            this.$store.dispatch('UPDATE_HARD_CARDS', { card })
            // this.flashcardsInGame.splice(this.currentIndex, 1)
            // TODO append
        },
        agree () {
            this.showConfirmDialog = false
            this.markedWord = this.word
            this.showTick = true
            this.isCardRevealed = false
            // this.markAsMastered()
            this.markAsHard()

            setTimeout(() => {
                this.showTick = false
            }, 1000)
        },
        cancel () {
            this.showConfirmDialog = false
        },
    },

    created () {
        if (!this.flashcards.length) {
            return this.$router.push({ name: 'categories' })
        }

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
    flex: 1;

    &_shuffleBtn, &_markBtn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: $header-footer-height;
        height: $header-footer-height;
        margin-right: 20px;
        font-size: 15px;
    }

    &_markBtn {
        color: $color-screamin-green;
    }

    &_counter {
        position: absolute;
        top: 0;
        right: 10px;
        flex-direction: row;
        align-items: center;
        min-width: 50px;

        .counter_lap {
            font-size: 37px;
            line-height: 50px;
        }

        .counter_card {
            margin-left: 5px;
            font-size: 16px;
        }

        .counter_side {
            margin-top: -15px;
            margin-left: 10px;
            font-size: 18px;
        }
    }

    &_card {
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

            &.-card-revealed {
                &:before {
                    border: 3px solid $color-bg-card-without-article;
                    opacity: 1;
                }
            }

            &.-male {
                &:before {
                    background-color: $color-bg-card-male;
                    opacity: 1;
                }
            }

            &.-female {
                &:before {
                    background-color: $color-bg-card-female;
                    opacity: 1;
                }
            }

            &.-male-female {
                &:before {
                    opacity: 1;
                    background-image: linear-gradient(15deg, $color-bg-card-male 50%, $color-bg-card-female 50%);
                }
            }

            &.-neuter {
                &:before {
                    background-color: $color-bg-card-neuter;
                    opacity: 1;
                }
            }
        }

        .card_toast {
            position: absolute;
            top: 50%;
            left: 50%;
            align-items: center;
            justify-content: center;
            width: calc(100% - 20px);
            height: calc(100% - 100px);
            background: $color-flag-red;
            color: #fff;
            font-weight: 700;
            transform: translate(-50%, -50%);

            > i {
                display: none;
                font-size: 250px;
            }

            > span {
                margin-top: -63px;
                line-height: 1;
            }
        }
    }

    footer {
        position: relative;
        font-size: 20px;

        > button {
            align-items: center;
            justify-content: center;
            width: 50%;
            font-size: 15px;
        }
    }

    header, footer {
        opacity: 0.8;
    }
}
</style>
