<template>
    <Component
        :is="$attrs.to ? 'router-link' : 'button'"
        class="StartButton"
        :class="className"
        v-bind="$attrs"
        >
        <slot />
    </Component>
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
@import '@/assets/styles/shared-vars.scss';

.StartButton {
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 100%;
    height: $header-footer-height;
    padding: 0;
    background: $color-accent-start;
    color: white;
    font-size: $header-footer-height;
    user-select: none;

    .BaseSvg {
        width: 26px;
        height: 12px;
        color: #fff;
    }
}
</style>
