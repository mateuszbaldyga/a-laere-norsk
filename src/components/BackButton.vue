<template>
    <RouterLink
        class="BackButton"
        v-bind="$attrs"
        >
        ➦
    </RouterLink>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/styles/shared-vars.scss';

.BackButton {
    height: $header-footer-height;
    width: $header-footer-height;
    display: inline-flex;
    margin-right: 20px;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    transform: scale(-1, 1);
}
</style>
