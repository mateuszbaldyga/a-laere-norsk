<template>
    <label
        class="BaseCheckbox"
        :class="className"
        >
        <input
            type="checkbox"
            v-bind="$attrs"
            :value="optionValue"
            :checked="checked"
            v-on="listeners"
            >
        <span><slot /></span>
    </label>
</template>

<script>
export default {
    props: {
        optionValue: {
            type: [ String, Number ],
            required: true,
        },
        value: [ Array, Event ],
    },
    computed: {
        checked () {
            return this.value.includes(this.optionValue)
        },
        listeners () {
            return {
                change: () => {
                    let value = [...this.value]
                    if (this.checked) {
                        value.splice(value.indexOf(this.optionValue), 1)
                    } else {
                        value.push(this.optionValue)
                    }
                    this.$emit('input', value)
                },
            }
        },
        className () {
            return {
                '-checked': this.checked,
            }
        },
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/shared-vars.scss';

.BaseCheckbox {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding-left: 45px;
    margin: 10px 0;
    font-size: 30px;
    font-weight: 300;
    cursor: pointer;
    line-height: 1.15;

    &:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 0;
        width: 30px;
        height: 30px;
        background-color: #fff;
        border: 1px solid $color-screamin-green;
    }
}

.BaseCheckbox.-checked {

    &:before {
        background-color: $color-screamin-green;
    }
}
</style>
