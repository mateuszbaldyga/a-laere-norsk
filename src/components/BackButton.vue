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
.BackButton {
    position: absolute;
    padding: 15px;
    font-size: 25px;
    transform: rotateY(30deg);
    transform: scale(-1, 1);
}
</style>
