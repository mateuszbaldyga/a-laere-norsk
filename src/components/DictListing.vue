<template>
    <LazyList
        :items="list"
        class="DictListing"
        :scrollTopKey="list.length"
        >
        <template slot-scope="props">
            <li
                v-for="(word, index) in props.items"
                :key="index"
                >
                <strong><i>🇳🇴</i> {{ word.no }}</strong><span><i>🇵🇱</i>{{ word.pl }}</span>
                <button
                    v-if="onDeleteClick"
                    @click="onDeleteClick(word)"
                    >
                    ❌
                </button>
            </li>
        </template>
    </LazyList>
</template>

<script>
import LazyList from '@/components/LazyList'

export default {
    components: {
        LazyList,
    },

    props: {
        list: Array,
        onDeleteClick: Function,
    },
}
</script>

<style lang="scss">
.DictListing {
    flex: 1;
    padding: 30px 0;

    > li {
        position: relative;
        padding-bottom: 10px;
        border-bottom: 1px solid #ffffff80;
        margin-bottom: 10px;
        font-size: 13px;
        font-weight: 300;
        border-style: dashed;
        line-height: 1.6;
        border-style: dashed;
    }

    span, strong {
        flex-direction: row;
        align-items: center;
    }

    i {
        display: inline;
        margin-right: 5px;
        font-size: 20px;
    }

    button {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 100%;
        font-size: 20px;
    }
}
</style>
