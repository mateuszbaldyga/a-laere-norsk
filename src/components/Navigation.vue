<template>
    <div
        class="Navigation"
        >
        <button @click="toggleMenu()">
            ☰
        </button>
        <Transition name="Navigation_transition">
            <div
                v-if="isNavigationOpened"
                class="Navigation_menu"
                >
                <ul class="container">
                    <li v-if="!isLogged">
                        <button @click="loginIn()">
                            Zaloguj się
                        </button>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'search' }">
                            Wyszukiwarka
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            v-if="isLogged"
                            :to="{ name: 'mastered-flashcards' }"
                            >
                            Opanowany materiał
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'create-dict' }">
                            Stwórz słownik
                        </RouterLink>
                    </li>
                    <li v-if="isLogged">
                        <button @click="logOut()">
                            Wyloguj się
                        </button>
                    </li>
                </ul>
                <div
                    class="menu_backdrop"
                    @click="toggleMenu(false)"
                    />
            </div>
        </Transition>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {

    computed: {
        ...mapState([
            'isNavigationOpened',
        ]),
        ...mapGetters([
            'wordsAmount',
            'isLogged',
        ]),
    },

    methods: {
        toggleMenu (bool) {
            this.$store.commit('CHANGE_NAVIGATION_VISIBILITY', bool)
        },
        loginIn () {
            this.$auth.signup()
        },
        logOut () {
            this.$auth.logout()
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

    .menu_backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;

    }
}

.Navigation_transition-enter-active, .Navigation_transition-leave-active {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0, 1);
}
.Navigation_transition-enter, .Navigation_transition-leave-to {
    transform: translate(-100%, 0);
}

</style>
