<template>
    <LayoutDefault class="PageCategorySelector">
        <div slot="header">
            <RouterLink
                v-if="$route.name !== 'categories'"
                id="home"
                :to="{ name: 'categories' }"
                >
                🏠
            </RouterLink>
        </div>

        <div class="PageCategorySelector_main" slot="main">
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
}
</script>

<style lang="scss">
@import '@/assets/styles/shared-vars.scss';

.PageCategorySelector {
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
        padding: 20px 30px;
        font-size: 50px;
        cursor: pointer;
        transition: transform .1s;
        line-height: .8;

        @include media(ltMobile) {
            font-size: 25px;
        }

        &.-selected {
            z-index: 1;
            transform: scale(1.2);
        }
    }

    .StartButton {

    }
}
</style>
