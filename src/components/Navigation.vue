<template>
    <div
        v-click-outside="close"
        class="Navigation"
        >
        <button @click="toggle()">
            ☰
        </button>
        <!-- <transition name="Navigation_transition"> -->
        <div
            v-if="isOpened"
            class="Navigation_menu"
            >
            <ul class="container">
                <li v-if="!isLogged">
                    <button @click="loginIn">
                        Zaloguj się
                    </button>
                </li>
                <li>
                    <RouterLink :to="{ name: 'search' }">
                        Wyszukiwarka
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'mastered-flashcards' }">
                        Opanowany materiał
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'create-dict' }">
                        Stwórz słownik
                    </RouterLink>
                </li>
            </ul>
        </div>
        <!-- </transition> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            isOpened: false,
        }
    },

    computed: {
        ...mapGetters([
            'wordsAmount',
            'isLogged',
        ]),
    },

    methods: {
        toggle () {
            this.isOpened = !this.isOpened
        },
        close () {
            this.isOpened = false
        },
        loginIn () {
            this.$auth.signup()
        },
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/shared-vars.scss';

.Navigation {

    > button {
        z-index: $z-id-modal + 1;
        align-items: center;
        justify-content: center;
        width: $header-footer-height;
        height: $header-footer-height;
        font-size: 25px;
    }

    &_menu {
        position: absolute;
        top: 0;
        left: 0;
        z-index: $z-id-modal;
        width: 200px;
        height: 100vh;
        padding: 100px 0;
        background-color: #fff;
        border-right: 1px solid #000;
        line-height: 50px;

        a, button {
            text-align: left;
        }
    }
}

.Navigation_transition-enter-active, .Navigation_transition-leave-active {
    transition: transform .15s ease-out;
}
.Navigation_transition-enter, .Navigation_transition-leave-to {
    transform: translateX(-100%);
}

</style>
