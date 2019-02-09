<template>
    <PageFlashCards :flashcards="chosenFlashCards" />
</template>

<script>
import PageFlashCards from '@/pages/PageFlashCards'
import { mapGetters } from 'vuex'

export default {
    components: {
        PageFlashCards,
    },

    computed: {
        ...mapGetters([
            'chosenFlashCards',
        ]),
    },
}
</script>
