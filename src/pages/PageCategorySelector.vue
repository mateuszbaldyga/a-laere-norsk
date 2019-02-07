<template>
    <LayoutDefault class="PageCategorySelector">
        <template slot="main">
            <div
                v-for="(category, index) in categories"
                :key="index"
                >
                <h2
                    :style="{ background: category.color }"
                    :class="{ '-selected': category.title === chosenCategory.title }"
                    @click="chooseCategory(category)"
                    >
                    {{ category.title }}
                </h2>
            </div>
        </template>

        <template slot="footer">
            <BaseButton
                v-visible="chosenCategory.title"
                @click.native="start()"
                >
                GÅ!
            </BaseButton>
        </template>
    </LayoutDefault>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import { mapState } from 'vuex'

export default {
    components: {
        BaseButton,
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
}
</script>

<style lang="scss">
@import '@/assets/styles/breakpoints.scss';

.PageCategorySelector {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #222;

    h2 {
        position: relative;
        padding: 20px 30px;
        font-size: 6vw;
        cursor: pointer;
        transition: transform .1s;
        line-height: .8;

        @include media(ltMobile) {
            font-size: 30px;
        }

        &.-selected {
            z-index: 1;
            transform: scale(1.2);
        }
    }

    .BaseButton {
        margin-top: 100px;

        @include media(ltMobile) {
            font-size: 60px;
        }
    }
}
</style>
