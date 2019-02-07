<template>
    <div class="LayoutDefault">
        <header>
            <slot name="header" />
        </header>
        <main>
            <slot name="main" />
        </main>
        <footer>
            <slot name="footer" />
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.LayoutDefault {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;

    > header {
        height: 50px;
    }

    > main {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    > footer {
        height: 50px;
    }
}
</style>
