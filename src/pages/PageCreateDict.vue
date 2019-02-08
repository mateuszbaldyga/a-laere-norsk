<template>
    <LayoutDefault class="CreateDict">
        <div slot="header">
            <h1>Format your dict</h1>
        </div>
        <div
            class="CreateDict_main"
            slot="main"
            >
            <textarea
                v-model="unformatted"
                />
            <input
                ref="copyInput"
                class="CreateDict_hidden"
                :value="JSON.stringify(formatted)"
                >
            <pre>{{ formatted }}</pre>
        </div>

        <div slot="footer">
            <StartButton
                @click.native="handleFormat()"
                >
                Format
            </StartButton>
        </div>
    </LayoutDefault>
</template>

<script>
export default {

    data () {
        return {
            unformatted: '',
            formatted: '',
        }
    },

    methods: {
        copyToClipboard () {
            this.$refs.copyInput.select()
            document.execCommand('copy')
        },
        handleFormat () {
            const dict = []

            this.unformatted.split(';').forEach(item => {
                item = item.toLowerCase().replace(/,(?=[^\s])/g, ', ')
                const split = item.split('-')

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
.CreateDict {

    h1 {
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
        opacity: 0;
        position: absolute;
        pointer-events: none;
    }

    textarea, pre {
        width: 100%;
        height: 200px;
        border: 1px solid #000;
        margin-bottom: 10px;
        padding: 20px;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
          tab-size: 2;
          font: 400 16px/20px 'PT Mono', monospace;
    }
}
</style>
