<template>
    <div
        v-if="lessonPreview.length"
        class="LessonPreview"
        >
        <button @click="close()">
            ❌
        </button>
        <ul>
            <li
                v-for="(item, index) in lessonPreview"
                :key="index"
                >
                {{ item.no }} - {{ item.pl }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'lessonPreview',
        ]),
    },

    methods: {
        close () {
            this.$store.commit('PREVIEW_LESSON', [])
        },
    },
}
</script>

<style lang="scss">
.LessonPreview {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 40px 15px;
    background: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;

    > button {
        position: absolute;
        top: 0;
        right: 0;
        width: 45px;
        height: 45px;
        font-size: 16px;
    }

    > ul {
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
}
</style>
