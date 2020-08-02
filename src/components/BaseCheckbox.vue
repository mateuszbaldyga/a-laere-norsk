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
@import '@/assets/styles/vars.scss';

.BaseCheckbox {
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    padding-left: 35px;
    margin: 10px 0;
    font-size: 20px;
    font-weight: 300;
    cursor: pointer;
    line-height: 1.15;

    &:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 0;
        width: 20px;
        height: 20px;
        background-color: #fff;
        border: 3px solid;
    }
}

.BaseCheckbox.-checked {

    &:before {
        background-color: var(--color-blue);
    }
}
</style>
