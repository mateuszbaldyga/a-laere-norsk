<template>
    <div id="app">
        <RouterView />
    </div>
</template>

<script>
export default {
    beforeCreate () {
        // this.$router.push({ name: 'categories' })
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/reset.scss';
@import '@/assets/styles/transitions.scss';
@import '@/assets/styles/vars.scss';
// @import url('https://fonts.googleapis.com/css?family=Noto+Serif:400,700&subset=latin-ext');
@import url('https://fonts.googleapis.com/css?family=Lora:400,700&subset=latin-ext');

:root {
    --color-blue: #002669;
    --color-red: #f22823;
    --color-orange: #f25c23;
    --color-white: #fff;
    --color-black: #000;
    --color-green: #68ff93;
    --color-text-light: #ddd;
    --color-text-dimmed: #676767;
    --color-text-dark: var(--color-black);
    --color-background-primary: var(--color-black);
    --color-background-secondary: var(--color-blue);
    --color-border-light: var(--color-white);
}

html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
}

body {
    position: fixed;
    top: 0;
    left: 0;
    touch-action: manipulation;
    font-family: 'Lora', serif;
    background: var(--color-background-primary);
    color: var(--color-text-light);
}

i {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Avenir Next', 'Avenir', 'Segoe UI', 'Lucida Grande', 'Helvetica Neue', 'Helvetica', 'Fira Sans', 'Roboto', 'Noto', 'Droid Sans', 'Cantarell', 'Oxygen', 'Ubuntu', 'Franklin Gothic Medium', 'Century Gothic', 'Liberation Sans', sans-serif;
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
