<template>
    <div id="app">
        <RouterView />
    </div>
</template>

<script>
export default {
    beforeCreate () {
        this.$router.push({ name: 'categories' })
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/reset.scss';
@import '@/assets/styles/shared-vars.scss';
// @import url('https://fonts.googleapis.com/css?family=Noto+Serif:400,700&subset=latin-ext');
@import url('https://fonts.googleapis.com/css?family=Lora:400,700&subset=latin-ext');

// * {
//     background-color: black !important;
//     color: #fff !important;
// }

html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Lora', serif;
    // font-family: 'Noto Serif SC', serif;
    overflow: hidden;
}

body, body * {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}

strong {
    display: inline;
    font-weight: 700;
}

.container {
    width: 100%;
    max-width: $grid-width;
    padding-right: 15px;
    padding-left: 15px;
    margin-left: auto;
    margin-right: auto;
}
</style>
