<template>
    <div class="LayoutDefault">
        <header>
            <slot name="header" />
        </header>
        <main>
            <slot name="content" />
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
    height: 100px;

    > header {
        height: 50px;
    }

    > main {
        flex: 1px;
    }

    > footer {
        height: 50px;
    }
}
</style>
