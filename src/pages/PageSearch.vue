<template>
    <div class="PageSearch">
        <LayoutDefault>
            <template slot="header">
                <BackButton :to="{name: 'categories', params: {back: true}}" />
            </template>

            <div
                slot="main"
                class="PageSearch_main container"
                >
                <div class="main_inputWrapper">
                    <input
                        v-model="query"
                        type="text"
                        placeholder="Search"
                        >
                    <button @click="handleSearch()">
                        🔍
                    </button>
                </div>

                <p
                    v-if="!list.length"
                    style="margin: 25px 0;"
                    >
                    Brak wyników.
                </p>
                <DictListing
                    v-else
                    :list="list"
                    />
            </div>
        </LayoutDefault>
    </div>
</template>

<script>
import { debounce } from 'lodash'
import { mapState, mapGetters } from 'vuex'
import DictListing from '@/components/DictListing'

export default {
    components: {
        DictListing,
    },

    computed: {
        ...mapState([
            'searchQuery',
            'searchResults',
        ]),
        ...mapGetters([
            'SEARCH_RESULTS_SOURCE',
        ]),
        query: {
            set: function (val) {
                this.$store.commit('SET_SEARCH_QUERY', val)
            },
            get: function () {
                return this.searchQuery
            },
        },
        list () {
            return this.searchResults.length || this.searchQuery ? this.searchResults : this.SEARCH_RESULTS_SOURCE
        },
    },

    watch: {
        query (newVal) {
            if (!newVal) {
                this.$store.commit('SET_SEARCH_RESULTS', [])
            } else if (newVal.length > 1) {
                this.handleSearch()
            }
        },
    },

    methods: {
        handleSearch: debounce(function () {
            this.$store.commit('HANDLE_SEARCH')
        }, 400),
    },

    created () {
        console.log('🦄 this.list', this.list)
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/shared-vars.scss';

.PageSearch {
    flex: 1;
    background-color: $color-flag-blue;
    color: #fff;
    height: 100vh;

    h1 {
        padding: 0 15px;
        margin-left: auto;
        font-size: 25px;
        line-height: 50px;
    }

    .main_inputWrapper {
        position: relative;
        margin-top: 20px;

        button {
            position: absolute;
            top: 0;
            right: 0;
            width: 45px;
            height: 100%;
            font-size: 20px;
        }
    }

    input {
        width: 100%;
        padding: 15px;
        border: 1px solid currentColor;

        &::placeholder {
            color: currentColor;
        }
    }

    &_main {
        flex: 1;
        height: 100%;
    }

    footer {
        display: none;
    }
}
</style>
