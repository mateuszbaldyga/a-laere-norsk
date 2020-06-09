<template>
    <LayoutDefault class="PageCategories">
        <template slot="header">
            <Navigation />
            <RouterLink
                class="PageCategories_searchBtn"
                :to="{ name: 'search' }"
                >
                🔍
            </RouterLink>
            <h1 class="PageCategories_info">
                <p>{{ user.email }}</p>
                <p>{{ wordsAmount }} words</p>
            </h1>
            <ConfirmDialog
                v-if="!$route.params.back"
                :isOpened="showConfirmDialog"
                :message="'Przywrócić ostatnią sesję?'"
                :onAgree="onAgree"
                :onCancel="onCancel"
                />
        </template>

        <div
            slot="main"
            class="PageCategories_main"
            >
            <h2
                v-for="(category, index) in categories"
                :key="index"
                :style="{ background: category.color }"
                :class="{
                    '-selected': category.title === chosenCategory.title,
                }"
                @click="chooseCategory(category)"
                @dblclick="chooseCategory(category) + start()"
                >
                {{ category.title }}
            </h2>
        </div>

        <template slot="footer">
            <StartButton
                class="PageCategories_restoreBtn"
                :style="{background: '#f25c23'}"
                @click.native="handleReview"
                @mousedown.native="handleMouseDown"
                @touchstart.native="handleMouseDown"
                @mouseup.native="handleMouseUp"
                @touchend.native="handleMouseUp"
                >
                OVERPRØV
            </StartButton>
            <StartButton
                v-if="showRestoreSessionBtn"
                class="PageCategories_restoreBtn"
                @click.native="handleContinue"
                >
                FORTSETT
            </StartButton>
            <StartButton
                v-visible="chosenCategory.title"
                @click.native="start()"
                >
                GÅ!
            </StartButton>
        </template>
    </LayoutDefault>
</template>

<script>
import StartButton from '@/components/StartButton'
import Navigation from '@/components/Navigation'
import { mapState, mapGetters } from 'vuex'
import ConfirmDialog from '@/components/ConfirmDialog'
import ls from 'local-storage'
import { random } from 'lodash'

export default {
    components: {
        StartButton,
        Navigation,
        ConfirmDialog,
    },

    props: {
        categories: Array,
    },

    data () {
        return {
            showConfirmDialog: false,
            showRestoreSessionBtn: false,
            holdTimeout: null,
        }
    },

    computed: {
        ...mapState(['chosenCategory', 'user', 'masteredFlashCards']),
        ...mapGetters(['wordsAmount', 'isLogged', 'SEARCH_RESULTS_SOURCE']),
    },

    methods: {
        getToday () {
            const today = new Date()
            return `${today.getDate()}${today.getMonth()}${today.getFullYear()}`
        },
        setTodaysReview ({ date, words }) {
            window.localStorage.setItem('todays_review', JSON.stringify({ date, words }))
        },
        getTodaysReview () {
            return JSON.parse(window.localStorage.getItem('todays_review') || 'null')
        },
        generateAndSetReviewWords () {
            const today = this.getToday()
            const words = new Array(15).fill(null).map(item => random(0, this.SEARCH_RESULTS_SOURCE.length)).map(p => this.SEARCH_RESULTS_SOURCE[p])
            this.setTodaysReview({ date: today, words })
            return words
        },
        handleReview () {
            const reviewLesson = this.getTodaysReview()
            let words

            if (reviewLesson) {
                const { date } = reviewLesson
                const today = this.getToday()

                if (String(date) !== String(today)) {
                    words = this.generateAndSetReviewWords()
                } else {
                    words = reviewLesson.words
                }
            } else {
                words = this.generateAndSetReviewWords()
            }

            this.$store.commit('SET_FLASHCARDS', words)
            this.$router.push({ name: 'flashcards', query: { review: true } })
        },
        handleNewReview () {
            const words = this.generateAndSetReviewWords()
            ls.set('CURRENT_CARD_INDEX_review', 0)
            this.$store.commit('SET_FLASHCARDS', words)
            this.$router.push({ name: 'flashcards', query: { review: true } })
        },
        handleMouseDown () {
            this.holdTimeout = setTimeout(() => {
                this.handleNewReview()
            }, 3000)
        },
        handleMouseUp () {
            clearTimeout(this.holdTimeout)
        },
        handleContinue () {
            this.$store.commit('SET_FLASHCARDS', ls.get('LAST_FLASHCARDS'))
            this.$router.push({ name: 'flashcards' })
        },
        chooseCategory (category) {
            this.$store.commit('CHOOSE_CATEGORY', category)
            this.$store.commit('CHOOSE_LESSONS', [category.lessons.length - 1])
        },
        start () {
            this.$router.push({ name: 'lessons' })
        },
        onAgree () {
            this.showConfirmDialog = false
            this.$router.push({ name: 'flashcards' })
        },
        onCancel () {
            this.showConfirmDialog = false
        },
    },

    created () {
        if (ls.get('LAST_FLASHCARDS')) {
            // this.showConfirmDialog = true
            this.showRestoreSessionBtn = true
        }
        // console.log('🦄 this.categories', this.categories)
    },
}
</script>

<style lang="scss">
@import "@/assets/styles/shared-vars.scss";

.PageCategories {
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    color: #222;

    header {
        overflow: visible !important;
    }

    &_main {
        margin: auto 0;
    }

    &_searchBtn {
        align-items: center;
        justify-content: center;
        width: $header-footer-height;
        font-size: 25px;
        line-height: $header-footer-height;
    }

    h2 {
        position: relative;
        padding: 0 15px;
        font-size: 25px;
        cursor: pointer;
        line-height: 0.8;
        text-align: center;
        line-height: $header-footer-height + 10px;

        &.-selected {
            background-color: $color-accent-start !important;
            color: #fff;
        }
    }

    &_info {
        padding: 15px;
        margin-left: auto;
        font-size: 12px;
        text-align: right;

        p + p {
            margin-top: 10px;
        }
    }

    &_restoreBtn {
        width: 100%;
        background-color: $color-flag-red;
    }

    footer {
        flex-direction: column !important;
        height: auto !important;
    }
}
</style>
