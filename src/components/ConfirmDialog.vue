<template>
    <div
        v-if="isOpened"
        class="ConfirmDialog container"
        >
        <p>{{ message }}</p>
        <div class="ConfirmDialog_actions">
            <button @click="onAgree">
                TAK
            </button>
            <button @click="onCancel">
                NIE
            </button>
        </div>
        <div
            class="ConfirmDialog_backdrop"
            @click="onCancel"
            />
    </div>
</template>

<script>
export default {
    props: {
        isOpened: Boolean,
        message: String,
        onAgree: Function,
        onCancel: Function,
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.ConfirmDialog {
    position: absolute;
    top: 0;
    left: 0;
    z-index: $z-id-confirm-dialog;
    width: 100%;
    background-color: #fff;
    border: 1px solid #000;
    line-height: 1.5;

    &:before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: #fff;
        opacity: 0.6;
    }

    p {
        padding: 20px 0;
    }

    &_actions {
        flex-direction: row;

        > button {
            align-items: center;
            justify-content: center;
            width: 50%;
            height: $header-footer-height;
        }
    }

    &_backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
}
</style>
