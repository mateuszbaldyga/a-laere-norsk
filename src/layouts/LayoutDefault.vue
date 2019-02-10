<template>
    <div class="LayoutDefault container">
        <header>
            <slot name="header" />
        </header>
        <main>
            <slot name="main" />
        </main>
        <footer>
            <slot name="footer" />
        </footer>
        <slot />
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/assets/styles/shared-vars.scss';

.LayoutDefault {
    position: relative;
    align-items: stretch;
    flex: 1;
    overflow: hidden;

    &.container {
        padding: 0;
    }

    > header {
        flex-direction: row;
        height: $header-footer-height;
        overflow: hidden;
    }

    > main {
        flex: 1;
        overflow: hidden;
    }

    > footer {
        flex-direction: row;
        height: $header-footer-height;
        overflow: hidden;
    }
}
</style>
