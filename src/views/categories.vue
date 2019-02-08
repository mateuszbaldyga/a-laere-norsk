<template>
    <PageCategories :categories="database" />
</template>

<script>
import PageCategories from '@/pages/PageCategories'
import { mapState } from 'vuex'

export default {
    components: {
        PageCategories,
    },

    computed: {
        ...mapState([
            'database',
        ]),
    },
}
</script>
