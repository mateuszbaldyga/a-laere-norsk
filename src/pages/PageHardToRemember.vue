<template>
    <LayoutDefault class="PageHardToRemember">
        <template slot="header">
            <BackButton :to="{name: 'categories', params: {back: true}}" />
            <h1>Trudne do zapamiętania</h1>
        </template>

        <div
            slot="main"
            class="PageHardToRemember_main container"
            >
            <h1 v-if="isLoading.hardCards">
                Loading...
            </h1>
            <DictListing
                v-if="list.length"
                :list="list"
                :onDeleteClick="onDeleteClick"
                />
        </div>

        <template slot="footer">
            <StartButton
                v-visible="list.length"
                @click.native="start()"
                >
                GÅ!
            </StartButton>
        </template>
    </LayoutDefault>
</template>

<script>
import { mapState } from 'vuex'
import StartButton from '@/components/StartButton'
import DictListing from '@/components/DictListing'

export default {
    components: {
        DictListing,
        StartButton,
    },

    computed: {
        ...mapState([
            'hardCards',
            'isLoading',
        ]),
        list () {
            return Array.from(this.hardCards)
        },
    },

    methods: {
        onDeleteClick (card) {
            this.$store.dispatch('UPDATE_HARD_CARDS', { card, method: 'delete' })
        },
        start () {
            this.$store.commit('SET_FLASHCARDS', this.list)
            this.$router.push({ name: 'flashcards', params: { hard: true } })
        },
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.PageHardToRemember {

    &_main {
        flex: 1;
    }

    h1 {
        padding-right: 15px;
        font-size: 25px;
        line-height: 50px;
    }
}
</style>
