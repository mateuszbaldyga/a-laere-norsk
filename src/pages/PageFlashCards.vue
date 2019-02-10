<template>
    <LayoutDefault class="PageFlashCards">
        <template slot="header">
            <BackButton :to="{name: 'lessons'}" />
            <button
                class="PageFlashCards_shuffleBtn"
                @click="shuffle()"
                >
                &#x1f500;
            </button>
            <button
                class="PageFlashCards_markBtn"
                @click="showConfirmDialog = true"
                >
                &#x2713;
            </button>
            <p
                class="PageFlashCards_lap"
                >
                {{ lap }}
            </p>

            <div
                v-if="showConfirmDialog"
                class="ConfirmDialog container"
                >
                <p>Oznaczyć jako opanowany materiał?</p>
                <div class="ConfirmDialog_actions">
                    <button @click="agree()">
                        TAK
                    </button>
                    <button @click="cancel()">
                        NIE
                    </button>
                </div>
            </div>
        </template>
        <div
            slot="main"
            class="PageFlashCards_card container"
            @click="onCardClick()"
            >
            <h1 :class="className">
                {{ word | capitalize }}
            </h1>
        </div>
        <template
            slot="footer"
            >
            <button @click="goBack()">
                ⇦
            </button>
            <button @click="unrevealCard() + goNext() ">
                ⇨
            </button>
        </template>
    </LayoutDefault>
</template>

<script>
import { shuffle } from 'lodash'
import { mapState } from 'vuex'

export default {
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
        }
    },

    computed: {
        ...mapState([
            'masteredFlashCards',
        ]),
        flashcardsWithoutMastered () {
            return this.flashcards.filter(card => !Array.from(this.masteredFlashCards).some(mastered => card.id === mastered.id))
        },
        word () {
            return this.flashcardsInGame[this.currentIndex][this.isCardRevealed ? 'no' : 'pl']
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
        },
        markAsMastered () {
            const flashcard = this.flashcardsInGame[this.currentIndex]
            this.$store.dispatch('UPDATE_MASTERED_FLASHCARD', { flashcard })
            this.flashcardsInGame.splice(this.currentIndex, 1)
        },
        agree () {
            this.markAsMastered()
            this.showConfirmDialog = false
        },
        cancel () {
            this.showConfirmDialog = false
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
    flex: 1;

    &_shuffleBtn, &_markBtn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: $header-footer-height;
        height: $header-footer-height;
        margin-right: 20px;
        font-size: 25px;
    }

    &_markBtn {
        color: $color-screamin-green;
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

    footer {
        position: relative;
        font-size: 20px;

        > button {
            align-items: center;
            justify-content: center;
            width: 50%;
        }
    }

    .ConfirmDialog {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        border-bottom: 1px solid #000;
        line-height: 1.5;
        z-index: $z-id-confirm-dialog;

        p {
            padding: 20px 0;
        }

        &_actions {
            flex-direction: row;

            > button {
                align-items: center;
                justify-content: center;
                width: 50%;
                height: $header-footer-height;
            }
        }
    }
}
</style>
