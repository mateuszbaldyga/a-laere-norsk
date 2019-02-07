<template>
    <PageLessonsSelector
        :lessons="chosenCategory.lessons"
        :categoryName="chosenCategory.title"
        />
</template>

<script>
import PageLessonsSelector from '@/pages/PageLessonsSelector'
import { mapState } from 'vuex'

export default {
    components: {
        PageLessonsSelector,
    },

    computed: {
        ...mapState([
            'chosenCategory',
        ]),
    },
}
</script>
