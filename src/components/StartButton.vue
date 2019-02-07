<template>
    <component
        class="StartButton"
        :class="className"
        :is="$attrs.to ? 'router-link' : 'button'"
        v-bind="$attrs"
        >
        <slot />
    </component>
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: $color-screamin-green;
    color: white;
    user-select: none;
        width: 100%;
        font-size: 50px;
        padding: 0;

    .BaseSvg {
        width: 26px;
        height: 12px;
        color: #fff;
    }
}
</style>
