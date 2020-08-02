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

.BaseButton {
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 10px 30px;
    background: var(--color-blue);
    color: white;
    font-size: 20px;
    user-select: none;
    overflow: hidden;

    .BaseSvg {
        width: 26px;
        height: 12px;
        color: #fff;
    }
}
</style>
