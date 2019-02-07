<template>
    <div class="PageLessonsSelector">
        <div>
            <h1>{{ categoryName }}</h1>

            <BaseButton
                class="PageLessonsSelector_allBtn"
                @click.native="selectAll()"
                >
                ALLE
            </BaseButton>

            <ul>
                <li
                    v-for="(lesson, index) in lessonsToRender"
                    :key="index"
                    >
                    <BaseCheckbox
                        v-model="chosenLessons"
                        :optionValue="index"
                        >
                        {{ lessonsToRender.length - index + ' Lekcja' }}
                    </BaseCheckbox>
                </li>
            </ul>

            <BaseButton
                v-visible="chosenLessons.length"
                class="PageLessonsSelector_goBtn"
                @click.native="start()"
                >
                GÅ!
            </BaseButton>
        </div>
    </div>
</template>

<script>
import BaseCheckbox from '@/components/BaseCheckbox'
import BaseButton from '@/components/BaseButton'

export default {
    components: {
        BaseCheckbox,
        BaseButton,
    },

    props: {
        lessons: Array,
        categoryName: String,
    },

    data () {
        return {
            chosenLessons: [],
        }
    },

    computed: {
        lessonsToRender () {
            return this.lessons.reverse()
        },
    },

    methods: {
        start () {
            this.$store.commit('CHOOSE_LESSONS', this.chosenLessons)
            this.$router.push({ name: 'PageFlashCards' })
        },
        selectAll () {
            if (this.chosenLessons.length === this.lessons.length) {
                this.chosenLessons = []
            } else {
                this.chosenLessons = this.lessons.map((item, i) => i)
            }
            this.$store.commit('CHOOSE_LESSONS', this.chosenLessons)
        },
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/breakpoints.scss';

.PageLessonsSelector {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #222;

    h1 {
        margin-bottom: 20px;
        font-size: 40px;
    }

    &_allBtn.BaseButton {
        min-width: 0;
        width: auto;
        padding: 0 20px;
        background-color: #ff6896;
        margin: 10px 0 15px;
        font-size: 6vw;

        @include media(ltMobile) {
            font-size: 45px;
        }
    }

    &_goBtn.BaseButton {
        @include media(ltMobile) {
            font-size: 60px;
        }
    }

    .BaseCheckbox {
        width: 100%;
        user-select: none;
    }
}
</style>
