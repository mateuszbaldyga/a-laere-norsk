<template>
    <LayoutDefault class="PageLessons">
        <div slot="header">
            <BackButton :to="{name: 'categories'}" />
        </div>

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
                        @mousedown.native="onMousedown(lesson, index)"
                        @touchstart.native="onMousedown(lesson, index)"
                        @mouseup.native="clearTimeout()"
                        @touchend.native="clearTimeout()"
                        @mouseleave.native="clearTimeout()"
                        @input="onInput"
                        >
                        {{ index + 1 + ' Lekcja' }}
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

        <div slot="footer">
            <StartButton
                v-visible="chosenLessons.length"
                class="PageLessons_goBtn"
                :to="{ name: 'flashcards' }"
                >
                GÅ!
            </StartButton>
        </div>

        <LessonPreview v-if="lessonPreview.lesson.length" />
    </LayoutDefault>
</template>

<script>
import { mapState } from 'vuex'
import BaseCheckbox from '@/components/BaseCheckbox'
import StartButton from '@/components/StartButton'
import LessonPreview from '@/components/LessonPreview'

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
            'chosenLessons',
            'lessonPreview',
        ]),
    },

    methods: {
        onInput (val) {
            this.$store.commit('CHOOSE_LESSONS', val)
        },
        previewLesson (lesson) {
            console.log('🦄 lesson', lesson)
            this.$store.commit('PREVIEW_LESSON', lesson)
        },
        onMousedown (lesson, index) {
            this.timeoutId = setTimeout(() => this.previewLesson({ lesson, index }), 450)
        },
        clearTimeout () {
            clearTimeout(this.timeoutId)
        },
        start () {
            this.$router.push({ name: 'flashcards' })
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
            list.scrollTo(0, list.scrollHeight)
        },
    },

    created () {
        console.log('🦄 this.categories', this.lessons)
    },

    mounted () {
        this.scrollToBottom()
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/shared-vars.scss';

.PageLessons {

    &_categoryName {
        margin-bottom: 20px;
        font-size: 40px;
    }

    &_main {
        display: flex;
        flex-direction: column;
        height: 100%;

        .main_list {
            padding-bottom: 100px;
            margin-bottom: 10px;
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
    }

    & &_allBtn {
        width: 100%;
        background-color: #ff6896;
        margin-top: auto;
    }

    .BaseCheckbox {
        width: 100%;
        user-select: none;
    }
}
</style>
