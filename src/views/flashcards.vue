<template>
    <PageFlashCards :flashcards="chosenFlashCards" />
</template>

<script>
import PageFlashCards from '@/pages/PageFlashCards'
import { mapState } from 'vuex'

export default {
    components: {
        PageFlashCards,
    },

    computed: {
        ...mapState([
            'chosenFlashCards',
        ]),
    },
}
</script>
