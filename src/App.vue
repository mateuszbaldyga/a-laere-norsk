<template>
    <div id="app">
        <RouterLink
            v-if="$route.name !== 'categories'"
            id="home"
            :to="{ name: 'categories' }"
            >
            🏠
        </RouterLink>
        <main>
            <RouterView />
        </main>
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
@import '@/assets/styles/breakpoints.scss';

html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Noto Serif SC', serif;
    font-weight: 700;
    overflow: hidden;
}

#app {
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    > main {
        flex: 1;
    }

    #home {
        position: absolute;
        top: 30px;
        left: 30px;
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        font-size: 20px;
    }
}

</style>
