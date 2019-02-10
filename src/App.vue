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
    created () {
        this.$auth.getUser()
        this.$store.commit('SET_USER_INFO')
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

body, div, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, main, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}

span {
    display: inline-flex;
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
