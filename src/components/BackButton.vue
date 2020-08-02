<template>
    <Component
        :is="$attrs.to ? 'router-link' : 'button'"
        class="BackButton"
        v-bind="$attrs"
        >
        ➦
    </Component>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.BackButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: $header-footer-height;
    height: $header-footer-height;
    font-size: 20px;
    transform: scale(-1, 1);
}
</style>
