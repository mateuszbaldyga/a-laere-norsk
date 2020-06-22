<template>
    <LayoutDefault class="PageFlashCards">
        <template slot="header">
            <BackButton @click.native="$router.go(-1)" />
            <button
                v-if="!isShuffleBlocked"
                class="PageFlashCards_shuffleBtn"
                @click="shuffle()"
                >
                <i>&#x1f500;</i>
            </button>
            <button
                v-if="isLogged && !$route.params.hard"
                class="PageFlashCards_markBtn"
                @click="showConfirmDialog = true"
                >
                <i>❌</i>
            </button>
            <button
                v-if="!$route.params.hard"
                class="PageFlashCards_markBtn"
                @click="markAsMastered"
                >
                <i>✅</i>
            </button>
            <button
                class="PageFlashCards_markBtn"
                @click="speak"
                >
                🔊
            </button>
            <button
                class="PageFlashCards_markBtn"
                @click="requestFullscreen"
                >
                &#10545;
            </button>
            <button
                class="PageFlashCards_counter"
                @click="promptCardNumber()"
                >
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
            </button>

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
            >
            <h1 :class="className">
                <div>
                    <template v-if="word[0]">
                        <span>{{ word[0] }}</span>
                    </template>
                    {{ word[1] }}
                </div>
            </h1>
            <div
                v-if="showTick"
                class="card_toast"
                >
                <i> &#x2713; </i>
                <span> {{ markedWord }} </span>
            </div>
            <div
                class="PageFlashCards_prevBtn"
                @click="goBack"
                />
            <div
                class="PageFlashCards_nextBtn"
                @click="onCardClick"
                />

            <form
                v-if="isPromptOpened"
                class="CardNumberPrompt"
                @submit.prevent="goToCard(form.cardNumber) + promptCardNumber(false)"
                >
                <h1> Przejdź do karty: </h1>
                <input
                    ref="CardNumberPrompt"
                    v-model="form.cardNumber"
                    type="number"
                    placeholder="1"
                    >
                <ul>
                    <li
                        v-for="item in numbers"
                        :key="item"
                        >
                        <button
                            type="button"
                            :disabled="flashcardsInGame.length < item"
                            @click="goToCard(item) + promptCardNumber(false)"
                            >
                            {{ item }}
                        </button>
                    </li>
                </ul>
            </form>
        </div>
    </LayoutDefault>
</template>

<script>
import { shuffle } from 'lodash'
import { mapState, mapGetters } from 'vuex'
import ConfirmDialog from '@/components/ConfirmDialog'
import ls from 'local-storage'

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
            form: {
                cardNumber: null,
            },
            isPromptOpened: false,
        }
    },

    computed: {
        ...mapState([
            'isModePlToNo',
            'isShuffleBlocked',
        ]),
        ...mapGetters([
            'isLogged',
        ]),
        numbers () {
            const res = [1]
            for (let i = 1; i < 13; i++) {
                res.push(i * 5)
            }
            return res
        },
        currentNorskWord () {
            return this.flashcardsInGame[this.currentIndex].no
        },
        word () {
            const langOrder = this.isModePlToNo ? ['pl', 'no'] : ['no', 'pl']
            if (this.isCardRevealed) {
                return [ this.flashcardsInGame[this.currentIndex][langOrder[0]], this.flashcardsInGame[this.currentIndex][langOrder[1]] ]
            } else {
                return [ null, this.flashcardsInGame[this.currentIndex][langOrder[0]] ]
            }
        },
        className () {
            const res = {
                '-card-revealed': this.isCardRevealed,
            }

            if (this.isCardRevealed) {
                Object.assign(res, {
                    '-male': this.currentNorskWord.indexOf('en ') === 0,
                    '-female': this.currentNorskWord.indexOf('ei ') === 0,
                    '-male-female': this.currentNorskWord.indexOf('ei/en') === 0 || this.currentNorskWord.indexOf('en/ei') === 0,
                    '-neuter': this.currentNorskWord.indexOf('et ') === 0,
                })
            }

            return res
        },
        progress () {
            return this.currentIndex + 1 + '<br>' + this.flashcardsInGame.length
        },
        cardSide () {
            return this.isCardRevealed ? 'B' : 'A'
        },
    },

    watch: {
        currentIndex (newVal) {
            if (this.$route.query.review) {
                ls.set('CURRENT_CARD_INDEX_review', newVal)
            } else {
                ls.set('CURRENT_CARD_INDEX', newVal)
            }
        },
    },

    methods: {
        requestFullscreen () {
            const el = document.querySelector('#app')
            if (el) {
                el.requestFullscreen()
            }
        },
        speak () {
            responsiveVoice.speak(this.currentNorskWord, 'Norwegian Female')
        },
        revealCard () {
            this.isCardRevealed = true
            this.speak()
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
            switch (e.code) {
            case 'Space':
                this.onCardClick()
                break
            case 'ArrowLeft':
                this.goBack()
                break
            case 'ArrowRight':
                this.goNext()
                break
            case 'KeyF':
                this.requestFullscreen()
                break
            default:
                break
            }
        },
        shuffle () {
            this.flashcardsInGame = shuffle(this.flashcards)
            this.currentIndex = 0
            this.isCardRevealed = false
        },
        markAsMastered () {
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
            this.markedWord = this.word[1]
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
        promptCardNumber (bool) {
            this.isPromptOpened = bool === undefined ? !this.isPromptOpened : bool
            this.form.cardNumber = null
            // if (this.isPromptOpened) {
            //     this.$nextTick(() => {
            //         this.$refs.CardNumberPrompt.focus()
            //     })
            // }
        },
        goToCard (num) {
            if (num > this.flashcardsInGame.length) return
            this.currentIndex = num - 1
            this.isCardRevealed = false

        },
    },

    created () {
        if (!this.flashcards.length) {
            return this.$router.push({ name: 'categories' })
        }

        if (this.isShuffleBlocked || ls.get('LAST_FLASHCARDS')) {
            this.flashcardsInGame = this.flashcards
        } else {
            this.shuffle()
        }

        if (!this.$route.query.review) {
            ls.set('LAST_FLASHCARDS', this.flashcardsInGame)
        }
        this.currentIndex = (this.$route.query.review ? ls.get('CURRENT_CARD_INDEX_review') : ls.get('CURRENT_CARD_INDEX')) || 0
    },

    mounted () {
        document.addEventListener('keyup', this.handleKeyEvent)
    },

    beforeDestroy () {
        document.removeEventListener('keyup', this.handleKeyEvent)
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
        font-size: 15px;
    }

    &_markBtn {
        color: $color-screamin-green;
    }

    &_counter {
        position: absolute;
        top: 0;
        right: 10px;
        display: flex;
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
        position: relative;
        flex: 1;
        width: 100%;
        padding: 10px;
        font-size: 60px;
        user-select: none;
        text-align: center;
        line-height: 1.4;

        @include media(ltMobile) {
            font-size: 28px;
        }

        > h1 {
            position: relative;
            align-items: center;
            justify-content: center;
            flex: 1;
            padding: 5px;

            span {
                position: relative;
                margin-bottom: 20px;
                opacity: 0.4;
                font-size: 0.7em;

                &:before {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 50%;
                    width: 110%;
                    height: 3px;
                    background-color: #000;
                    transform: translateX(-50%);
                }
            }

            /* &:before {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                opacity: 0;
                transition: opacity .3s;
            } */

            &.-card-revealed {
                &:before {
                    border: 3px solid $color-bg-card-without-article;
                    opacity: 1;
                }
                >div {
                    position: relative;
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

    &_nextBtn, &_prevBtn {
        position: absolute;
        top: 0;
        width: 50%;
        height: 100%;
    }

    &_nextBtn {
        right: 0;
    }

    &_prevBtn {
        left: 0;
    }

    footer {
        display: none;
    }
}

.CardNumberPrompt {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #f7feff;

    h1 {
        margin-bottom: 10px;
        font-size: 20px;
    }

    input {
        height: 50px;
        padding: 10px;
        border: 1px solid black;
        border-radius: 0;
        font-size: 22px;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-grow: 1;
        margin-top: 20px;

        li {
            width: 33.33%;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            border: 1px solid black;

            &:disabled {
                color: #e7fbff;
            }
        }
    }
}
</style>
