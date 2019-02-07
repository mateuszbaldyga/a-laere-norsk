<template>
            <router-link class="BackButton" v-bind="$attrs">
                ➦
            </router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.BackButton {
    font-size: 25px;
    transform: rotateY(30deg);
    transform: scale(-1, 1);
    position: absolute;
    padding: 15px;
}
</style>
