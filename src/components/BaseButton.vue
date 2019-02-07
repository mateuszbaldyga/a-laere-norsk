<template>
    <button
        class="BaseButton"
        :class="className"
        v-bind="$attrs"
        >
        <slot />
    </button>
</template>

<script>
export default {
  props: {
    isLoading: Boolean
  },

  computed: {
    className () {
      return {
        '-loading': this.isLoading
      }
    }
  }
}
</script>

<style lang="scss">
// @import '@/assets/styles/shared-vars.scss';

.BaseButton {
    align-items: center;
    justify-content: center;
    // background-color: $color-accent;
    display: flex;
    margin-top: 40px;
    width: 100%;
        font-size: 9vw;
    background: #68ff93;
    color: white;
    height: auto;
    min-width: 300px;
    user-select: none;

    .BaseSvg {
        width: 26px;
        height: 12px;
        color: #fff;
    }
}

.BaseButton.-loading {
    opacity: .5;
}
</style>
