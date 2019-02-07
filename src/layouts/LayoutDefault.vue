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
    height: 100%;
        align-items: stretch;

    > header {
        height: 50px;
    }

    > main {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    > footer {
        height: 50px;
    }
}
</style>
