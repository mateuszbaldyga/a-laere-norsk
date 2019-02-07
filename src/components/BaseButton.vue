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
        isLoading: Boolean,
    },

    computed: {
        className () {
            return {
                '-loading': this.isLoading,
            }
        },
    },
}
</script>

<style lang="scss">
// @import '@/assets/styles/shared-vars.scss';

.BaseButton {
    // background-color: $color-accent;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 300px;
    width: 100%;
    height: auto;
    background: #68ff93;
    margin-top: 40px;
    color: white;
    font-size: 9vw;
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
