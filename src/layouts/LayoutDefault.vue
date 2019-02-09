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
        <slot></slot>
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
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 700px;
    height: 100%;
    margin: 0 auto;

    > header {
        height: $header-footer-height;
        overflow: hidden;
    }

    > main {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: hidden;
    }

    > footer {
        height: $header-footer-height;
        overflow: hidden;
    }
}
</style>
