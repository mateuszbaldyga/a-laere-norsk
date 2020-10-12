<template>
    <div
        v-if="lessonPreview.words.length"
        class="LessonPreview"
        style="user-select: none;"
        >
        <button @click="close()">
            ❌
        </button>
        <h1>{{ lessonPreview.lessonName }}</h1>
        <ul>
            <li
                v-for="(item, index) in lessonPreview.words"
                :key="index"
                >
                <strong>{{ index + 1 }}.&nbsp;&nbsp;{{ item.no }}</strong>&nbsp;–&nbsp;{{ item.pl }}
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
            this.$store.commit('RESET_PREVIEW_LESSON')
        },
    },

    mounted () {
        setTimeout(() => {
            this.$el.style.userSelect = null
        }, 2000)
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.LessonPreview {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 40px 15px;
    background: var(--color-background-primary);
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;
    z-index: 99;

    > h1 {
        margin-bottom: 15px;
        font-size: 25px;
        font-weight: 700;
        text-decoration: underline;
    }

    > button {
        position: absolute;
        top: 0;
        right: 0;
        align-items: center;
        justify-content: center;
        width: $header-footer-height;
        height: $header-footer-height;
        font-size: 16px;
    }

    > ul {
        height: 100%;
        padding-bottom: 200px;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;

        > li {
            display: inline-block;
        }
    }
}
</style>
