<template>
    <PageCategorySelector :categories="database" />
</template>

<script>
import PageCategorySelector from '@/pages/PageCategorySelector'
import { mapState } from 'vuex'

export default {
    components: {
        PageCategorySelector,
    },

    computed: {
        ...mapState([
            'database',
        ]),
    },
}
</script>
