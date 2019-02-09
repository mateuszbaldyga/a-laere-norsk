<template>
    <div class="CreateDict">
        <LayoutDefault>
            <template slot="header">
                <BackButton :to="{name: 'categories'}" />
                <h1>Format your dict</h1>
            </template>

            <div
                slot="main"
                class="CreateDict_main container"
                >
                <textarea
                    v-model="unformatted"
                    />
                <input
                    ref="copyInput"
                    class="CreateDict_hidden"
                    :value="JSON.stringify(formatted)"
                    >
                <div class="CreateDict_preWrap">
                    <pre>{{ formatted }}</pre>
                    <p
                        v-if="showToast"
                        class="CreateDict_toast"
                        >
                        Coppied
                    </p>
                </div>
            </div>

            <template slot="footer">
                <StartButton
                    @click.native="handleFormat()"
                    >
                    Format
                </StartButton>
            </template>
        </LayoutDefault>
    </div>
</template>

<script>
export default {

    data () {
        return {
            unformatted: '',
            formatted: '',
            showToast: false,
        }
    },

    methods: {
        copyToClipboard () {
            this.$refs.copyInput.select()
            document.execCommand('copy')
            this.showToast = true

            setTimeout(() => {
                this.showToast = false
            }, 1000)
        },
        handleFormat () {
            const dict = []

            this.unformatted.split(';').forEach(item => {
                item = item.toLowerCase().replace(/[ ]{2,}/g, ' ').replace(/,(?=[^\s])/g, ', ')
                const split = item.split(/[-—–]/g)

                if (split.length < 2) return

                dict.push({
                    no: split[0].trim(),
                    pl: split[1].trim(),
                })
            })

            this.formatted = dict

            this.$nextTick(() => {
                this.copyToClipboard()
            })
        },
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/shared-vars.scss';

.CreateDict {
    height: 100%;
    background-color: #131313;
    color: #fff;

    h1 {
        padding-right: 15px;
        margin-left: auto;
        font-size: 25px;
        line-height: 50px;
    }

    &_main {
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;

    }

    &_hidden {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }

    &_preWrap {
        position: relative;
    }

    &_toast {
        position: absolute;
        top: 50%;
        left: 50%;
        color: $color-accent-start;
        font-size: 50px;
        pointer-events: none;
        transform: translate(-50%, -50%);
    }

    textarea, pre {
        width: 100%;
        height: 200px;
        padding: 20px;
        border: 1px solid currentColor;
        margin-bottom: 10px;
        color: currentColor;
        opacity: 0.9;
        overflow-x: hidden;
        overflow-y: auto;
        resize: none;
        -webkit-overflow-scrolling: touch;
        tab-size: 2;
        font: 400 16px/20px 'PT Mono', monospace;
    }
}
</style>
