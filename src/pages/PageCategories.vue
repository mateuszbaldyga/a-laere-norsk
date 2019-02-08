<template>
    <LayoutDefault class="PageCategories">
        <div slot="header" />

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

        <div slot="footer">
            <StartButton
                v-visible="chosenCategory.title"
                @click.native="start()"
                >
                GÅ!
            </StartButton>
        </div>
    </LayoutDefault>
</template>

<script>
import StartButton from '@/components/StartButton'
import { mapState } from 'vuex'

export default {
    components: {
        StartButton,
    },

    props: {
        categories: Array,
    },

    computed: {
        ...mapState([ 'chosenCategory' ]),
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
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
            background-color: $color-screamin-green !important;
            color: #fff;
        }
    }

    .StartButton {

    }
}
</style>
