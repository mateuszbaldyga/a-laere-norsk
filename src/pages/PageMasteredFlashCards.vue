<template>
    <LayoutDefault class="PageMasteredFlashCards">
        <template slot="header">
            <BackButton :to="{name: 'categories'}" />
        </template>

        <div
            slot="main"
            class="PageMasteredFlashCards_main container"
            >
            <DictListing
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
        ]),
    },

    methods: {
        onDeleteClick (flashcard) {
            this.$store.commit('UPDATE_MASTERED_FLASHCARD', { flashcard, method: 'delete' })
        },
    },

    created () {
        this.list = Array.from(this.masteredFlashCards)

        this.$store.subscribe(mutation => {
            if (mutation.type === 'UPDATE_MASTERED_FLASHCARD') {
                this.list = Array.from(this.masteredFlashCards)
            }
        })
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/shared-vars.scss';

.PageMasteredFlashCards {

    &_main {
        flex: 1;
    }

    footer {
        display: none;
    }
}
</style>
