<template>
    <LayoutDefault class="PageLessons">
        <template slot="header">
            <BackButton :to="{name: 'categories', params: {back: true}}" />
        </template>

        <div
            slot="main"
            class="PageLessons_main"
            >
            <h1 class="PageLessons_categoryName container">
                {{ categoryName }}
            </h1>

            <ul
                ref="list"
                class="main_list container"
                >
                <li
                    v-for="(lesson, index) in lessons"
                    :key="index"
                    >
                    <BaseCheckbox
                        :value="chosenLessons"
                        :optionValue="index"
                        @mousedown.native="onTouchStart(lesson)"
                        @touchstart.native="onTouchStart(lesson)"
                        @mouseup.native="onTouchEnd()"
                        @touchend.native="onTouchEnd()"
                        @mouseleave.native="onTouchEnd()"
                        @input="selectLesson"
                        >
                        {{ lesson.lessonName }}<em>{{ `${lesson.words.length} Cards` }}</em>
                    </BaseCheckbox>
                </li>
            </ul>

            <StartButton
                class="PageLessons_allBtn"
                @click.native="selectAll()"
                >
                ALLE
            </StartButton>
        </div>

        <template slot="footer">
            <StartButton
                v-visible="chosenLessons.length"
                class="PageLessons_goBtn"
                @click.native="start()"
                >
                GÅ!
            </StartButton>
        </template>

        <LessonPreview v-if="lessonPreview.words.length" />
    </LayoutDefault>
</template>

<script>
import { mapState } from 'vuex'
import BaseCheckbox from '@/components/BaseCheckbox'
import StartButton from '@/components/StartButton'
import LessonPreview from '@/components/LessonPreview'
import { flatten } from 'lodash'
import ls from 'local-storage'

export default {
    components: {
        BaseCheckbox,
        StartButton,
        LessonPreview,
    },

    props: {
        lessons: Array,
        categoryName: String,
    },

    data () {
        return {
            timeoutId: null,
        }
    },

    computed: {
        ...mapState([
            'chosenCategory',
            'chosenLessons',
            'lessonPreview',
        ]),
    },

    methods: {
        selectLesson (val) {
            this.$store.commit('CHOOSE_LESSONS', val)
        },
        previewLesson (lesson) {
            // console.log('🦄 lesson', lesson)
            this.$store.commit('PREVIEW_LESSON', lesson)
        },
        onTouchStart (lesson) {
            this.timeoutId = setTimeout(() => this.previewLesson(lesson), 450)
        },
        onTouchEnd () {
            clearTimeout(this.timeoutId)
        },
        start () {
            if (!this.chosenLessons.length) return
            const { lessons } = this.chosenCategory
            const cards = []

            this.chosenLessons.forEach(index => {
                cards.push(...lessons[index].words)
            })

            this.$store.commit('SET_FLASHCARDS', cards)
            this.$router.push({ name: 'flashcards' })
            ls.set('CURRENT_CARD_INDEX', 0)
        },
        selectAll () {
            if (this.chosenLessons.length === this.lessons.length) {
                this.$store.commit('CHOOSE_LESSONS', [])
            } else {
                const val = this.lessons.map((item, i) => i)
                this.$store.commit('CHOOSE_LESSONS', val)
            }
        },
        scrollToBottom () {
            const { list } = this.$refs
            if (list) {
                list.scrollTo(0, list.scrollHeight)
            }
        },
    },

    created () {
        // console.log('🦄 this.categories', this.lessons)
    },

    mounted () {
        this.scrollToBottom()
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.PageLessons {

    &_categoryName {
        margin-bottom: 20px;
        font-size: 40px;
    }

    &_main {
        flex: 1;
        height: 100%;

        .main_list {
            flex: 1;
            padding-bottom: 100px;
            margin-bottom: 10px;
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
    }

    & &_allBtn {
        width: 100%;
        background-color: var(--color-red);
        margin-top: auto;
    }

    .BaseCheckbox {
        width: 100%;
        user-select: none;

        span {
            flex-direction: row;
            align-items: center;
        }

        em {
            margin-left: 15px;
            font-size: 0.6em;
        }
    }
}
</style>
