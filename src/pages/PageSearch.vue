<template>
    <LayoutDefault class="PageSearch">
        <template slot="header">
            <BackButton :to="{name: 'categories'}" />
        </template>

        <div
            slot="main"
            class="PageSearch_main container"
            >
            <input
                v-model="query"
                type="text"
                placeholder="Search"
                >
            <ul
                class="PageSearch_results"
                >
                <li
                    v-for="(word, index) in list"
                    :key="index"
                    >
                    <strong><i>🇳🇴</i> {{ word.no }}</strong><span><i>🇵🇱</i>{{ word.pl }}</span>
                </li>
            </ul>
        </div>
    </LayoutDefault>
</template>

<script>
import { debounce } from 'lodash'
import { mapState, mapGetters } from 'vuex'

export default {
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
            return this.searchResults.length && this.searchQuery ? this.searchResults : this.SEARCH_RESULTS_SOURCE
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
    background-color: $color-flag-blue;
    color: #fff;
    h1 {
        padding: 0 15px;
        margin-left: auto;
        font-size: 25px;
        line-height: 50px;
    }
    input {
        width: 100%;
        padding: 15px;
        border: 1px solid currentColor;
        margin-top: 20px;

        &::placeholder {
            color: currentColor;
        }
    }

    &_main {
        flex: 1;
    }

    &_results {
        flex: 1;
        padding: 30px 0;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;

        > li {
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
    }

    footer {
        display: none;
    }
}
</style>
