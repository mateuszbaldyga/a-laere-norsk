<template>
  <div class="ConfirmDialog container"
                v-if="isOpened"
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
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/shared-vars.scss';

.ConfirmDialog {
    position: absolute;
    top: 0;
    left: 0;
    z-index: $z-id-confirm-dialog;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #000;
    line-height: 1.5;

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