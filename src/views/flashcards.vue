<template>
    <PageFlashCards :PageFlashCards="chosenPageFlashCards" />
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
            'chosenPageFlashCards',
        ]),
    },
}
</script>
