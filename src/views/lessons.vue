<template>
    <PageLessons
        :lessons="chosenCategory.lessons"
        :categoryName="chosenCategory.title"
        />
</template>

<script>
import PageLessons from '@/pages/PageLessons'
import { mapState } from 'vuex'

export default {
    components: {
        PageLessons,
    },

    computed: {
        ...mapState([
            'chosenCategory',
        ]),
    },
}
</script>
