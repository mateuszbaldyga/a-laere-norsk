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
                <p v-if="isLogged">
                    {{ masteredFlashCards.size }} mastered
                </p>
            </h1>
            <ConfirmDialog
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
                :class="{ '-selected': category.title === chosenCategory.title }"
                @click="chooseCategory(category)"
                @dblclick="chooseCategory(category) + start()"
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
import Navigation from '@/components/Navigation'
import { mapState, mapGetters } from 'vuex'
import ConfirmDialog from '@/components/ConfirmDialog'
import ls from 'local-storage'

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
        }
    },

    computed: {
        ...mapState([ 'chosenCategory', 'user', 'masteredFlashCards' ]),
        ...mapGetters([ 'wordsAmount', 'isLogged' ]),
    },

    methods: {
        chooseCategory (category) {
            this.$store.commit('CHOOSE_CATEGORY', category)
            this.$store.commit('CHOOSE_LESSONS', [ category.lessons.length - 1 ])
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
            this.showConfirmDialog = true
        }
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
        line-height: .8;
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
}
</style>
