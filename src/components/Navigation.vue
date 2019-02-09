<template>
    <div class="Navigation">
        <ul>
            <li />
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'wordsAmount',
        ]),
    },
}
</script>

<style lang="scss">
.Navigation {
}
</style>
