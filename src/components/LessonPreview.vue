<template>
  <div class="LessonPreview" v-if="lessonPreview.length">
    <button @click="close()">❌</button>
    <ul>
        <li v-for="(item, index) in lessonPreview" :key="index">{{ item.no }} - {{ item.pl }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
      ...mapState([
        'lessonPreview'
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
      background: #fff;
    padding: 40px 15px;
    line-height: 1.4;
    font-weight: 500;
    font-size: 12px;

    > button {
            height: 45px;
    width: 45px;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 16px;
    }

  > ul {
              overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
}
</style>
