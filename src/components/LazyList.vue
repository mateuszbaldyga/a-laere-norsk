<template>
    <ul
        v-if="renderedItems.length"
        class="LazyList"
        @scroll="handleScroll"
        >
        <slot :items="renderedItems" />
    </ul>
</template>

<script>
import { requestAnimation } from '@/helpers'

export default {
    props: {
        items: Array,
        scrollTopKey: [String, Number],
    },

    data () {
        return {
            renderedItemsNum: 30,
        }
    },

    computed: {
        renderedItems () {
            if (this.items && this.items.length) {
                return this.items.slice(0, this.renderedItemsNum)
            }

            return []
        },
    },

    methods: {
        handleScroll: requestAnimation(function () {
            const allItemsRendered = this.renderedItemsNum >= this.items.length

            if (allItemsRendered) return

            const target = this.$el

            if (target) {
                const { scrollTop, scrollHeight, offsetHeight } = target
                const percentageScrolled = (scrollTop + offsetHeight) / scrollHeight

                if (percentageScrolled > 0.8) {
                    this.renderedItemsNum += 10
                }
            }
        }),
    },

    watch: {
        scrollTopKey () {
            this.renderedItemsNum = 10
            this.$el.scrollTop = 0
        },
    },
}
</script>

<style lang="scss">
.LazyList {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
