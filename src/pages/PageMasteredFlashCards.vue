<template>
    <LayoutDefault class="PageMasteredFlashCards">
        <template slot="header">
            <BackButton :to="{name: 'categories'}" />
            <h1>Opanowany materiał</h1>
        </template>

        <div
            slot="main"
            class="PageMasteredFlashCards_main container"
            >
            <h1 v-if="isLoading.masteredFlashCards">
                Loading...
            </h1>
            <DictListing
                v-if="list.length"
                :list="list"
                :onDeleteClick="onDeleteClick"
                />
        </div>

        <template slot="footer" />
    </LayoutDefault>
</template>

<script>
import { mapState } from 'vuex'
import DictListing from '@/components/DictListing'

export default {
    components: {
        DictListing,
    },

    data () {
        return {
            list: [],
        }
    },

    computed: {
        ...mapState([
            'masteredFlashCards',
            'isLoading',
        ]),
    },

    methods: {
        onDeleteClick (flashcard) {
            this.$store.dispatch('UPDATE_MASTERED_FLASHCARD', { flashcard, method: 'delete' })
            this.list = Array.from(this.masteredFlashCards)
        },
    },

    created () {
        this.list = Array.from(this.masteredFlashCards)
        this.$store.subscribe(mutation => {
            if (mutation.type === 'SET_MASTERED_FLASHCARDS') {
                this.list = Array.from(this.masteredFlashCards)
            }
        })
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.PageMasteredFlashCards {

    &_main {
        flex: 1;
    }

    h1 {
        padding-right: 15px;
        font-size: 25px;
        line-height: 50px;
    }

    footer {
        display: none;
    }
}
</style>
