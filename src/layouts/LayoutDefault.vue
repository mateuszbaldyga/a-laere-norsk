<template>
    <div class="LayoutDefault container">
        <header :style="{ opacity: !isNavBarVisible ? '0' : '' }">
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
    props: {
        isNavBarVisible: { type: Boolean, default: true },
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.LayoutDefault {
    position: relative;
    align-items: stretch;
    flex: 1;
    overflow: hidden;

    &.container {
        padding: 0;
    }

    > header {
        z-index: 10;
        flex-direction: row;
        height: $header-footer-height;
        transition: opacity .3s ease-out;

        &:hover {
            opacity: 1 !important;
        }
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
