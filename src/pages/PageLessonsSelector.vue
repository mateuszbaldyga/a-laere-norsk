<template>
    <LayoutDefault class="PageLessonsSelector">
        <div slot="header">
            <BackButton :to="{name: 'categories'}"></BackButton>
        </div>

        <div class="PageLessonsSelector_main" slot="main">
            <h1 class="container">{{ categoryName }}</h1>

            <ul class="main_list container">
                <li
                    v-for="(lesson, index) in lessonsToRender"
                    :key="index"
                    >
                    <BaseCheckbox
                        :value="chosenLessons"
                        @input="onInput"
                        :optionValue="index"
                        >
                        {{ index + 1 + ' Lekcja' }}
                    </BaseCheckbox>
                </li>
            </ul>

            <StartButton
                class="PageLessonsSelector_allBtn"
                @click.native="selectAll()"
                >
                ALLE
            </StartButton>
        </div>

        <div slot="footer">
            <StartButton
                v-visible="chosenLessons.length"
                class="PageLessonsSelector_goBtn"
                :to="{ name: 'flashcards' }"
                >
                GÅ!
            </StartButton>
        </div>
    </LayoutDefault>
</template>

<script>
import { mapState } from 'vuex'
import BaseCheckbox from '@/components/BaseCheckbox'
import StartButton from '@/components/StartButton'

export default {
    components: {
        BaseCheckbox,
        StartButton,
    },

    props: {
        lessons: Array,
        categoryName: String,
    },

    computed: {
        ...mapState([
          'chosenLessons'
        ]),
        lessonsToRender () {
            return this.lessons
        },
    },

    methods: {
        onInput (val) {
            this.$store.commit('CHOOSE_LESSONS', val)
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
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/shared-vars.scss';

.PageLessonsSelector {

    h1 {
        margin-bottom: 20px;
        font-size: 40px;
    }

    &_main {
        height: 100%;
        display: flex;
        flex-direction: column;

        .main_list {
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
    }

    & &_allBtn {
        background-color: #ff6896;
        width: 100%;
        margin-top: auto;
    }

    .BaseCheckbox {
        width: 100%;
        user-select: none;
    }
}
</style>
