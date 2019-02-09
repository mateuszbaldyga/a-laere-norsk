<template>
    <LayoutDefault class="PageCategories">
        <template slot="header">
            <h1 class="PageCategories_counter">
                {{ wordsAmount }} words
            </h1>
        </template>

        <div
            slot="main"
            class="PageCategories_main"
            >
            <h2
                v-for="(category, index) in categories"
                :key="index"
                :style="{ background: category.color }"
                :class="{ '-selected': category.title === chosenCategory.title }"
                @click="chooseCategory(category)"
                >
                {{ category.title }}
            </h2>
        </div>

        <template slot="footer">
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
import { mapState, mapGetters } from 'vuex'

export default {
    components: {
        StartButton,
    },

    props: {
        categories: Array,
    },

    computed: {
        ...mapState([ 'chosenCategory' ]),
        ...mapGetters([ 'wordsAmount' ]),
    },

    methods: {
        chooseCategory (category) {
            this.$store.commit('CHOOSE_CATEGORY', category)
        },
        start () {
            this.$router.push({ name: 'lessons' })
        },
    },

    created () {
        console.log('🦄 this.categories', this.categories)
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/shared-vars.scss';

.PageCategories {
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    color: #222;

    &_main {
        margin: auto 0;
    }

    h2 {
        position: relative;
        padding: 0 15px;
        font-size: 25px;
        cursor: pointer;
        line-height: .8;
        text-align: center;
        line-height: $header-footer-height;

        &.-selected {
            background-color: $color-accent-start !important;
            color: #fff;
        }
    }

    &_counter {
        width: 100%;
        padding: 15px;
        font-size: 12px;
        text-align: right;
    }
}
</style>
