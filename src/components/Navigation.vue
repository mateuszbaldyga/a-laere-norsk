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
                    <li>
                        <RouterLink :to="{ name: 'search' }">
                            Wyszukiwarka
                        </RouterLink>
                    </li>
                    <!--                     <li>
                        <RouterLink
                            v-if="isLogged"
                            :to="{ name: 'mastered-flashcards' }"
                            >
                            Opanowany materiał
                        </RouterLink>
                    </li> -->
                    <li>
                        <RouterLink
                            v-if="isLogged"
                            :to="{ name: 'hard-to-remember' }"
                            >
                            Trudne
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'create-dict' }">
                            Stwórz słownik
                        </RouterLink>
                    </li>
                    <li>
                        <button
                            class="Navigation_langSwitch"
                            @click="SET_MODE()"
                            >
                            <span>{{ isModePlToNo ? '🇵🇱' : '🇳🇴' }}</span>
                            ➡️
                            <span>{{ isModePlToNo ? '🇳🇴' : '🇵🇱' }}</span>
                        </button>
                        <button
                            class="Navigation_shuffleSwitch"
                            @click="TOGGLE_SUFFLE_BLOCK()"
                            >
                            <i>&#x1f500;</i>
                            Shuffle? {{ isShuffleBlocked ? 'NO!' : 'YES :)' }}
                        </button>
                    </li>


                    <li
                        v-if="!isLogged"
                        class="-bottom"
                        >
                        <form
                            :style="{ opacity: isLoading.auth ? .2 : null }"
                            @submit.prevent="loginIn()"
                            >
                            <input
                                v-model="form.email"
                                placeholder="email"
                                type="text"
                                >
                            <input
                                v-model="form.password"
                                placeholder="password"
                                type="password"
                                >

                            <button type="submit">
                                Zaloguj/Zarejestruj się
                            </button>
                        </form>
                    </li>
                    <li
                        v-if="!isLogged"
                        />
                    <li
                        v-else
                        class="-bottom"
                        >
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
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {

    data () {
        return {
            form: {
                email: '',
                password: '',
            },
        }
    },

    computed: {
        ...mapState([
            'isNavigationOpened',
            'isModePlToNo',
            'isLoading',
            'isShuffleBlocked',
        ]),
        ...mapGetters([
            'wordsAmount',
            'isLogged',
        ]),
    },

    methods: {
        ...mapMutations([
            'SET_MODE',
            'TOGGLE_SUFFLE_BLOCK',
        ]),
        toggleMenu (bool) {
            this.$store.commit('CHANGE_NAVIGATION_VISIBILITY', bool)
        },
        loginIn () {
            const { email, password } = this.form
            if (!email || !password) return
            this.$auth.signup({ email, password })
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

        ul {
            flex: 1;
        }

        a, button {
            text-align: left;
        }

        .-bottom {
            padding-top: 40px;
            margin-top: auto;
            color: $color-flag-blue;
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

    &_langSwitch {
        display: flex;
        align-items: center;
        margin-top: 20px;
        font-size: 30px;

        > span {
            margin: 0 10px;
        }
    }

    &_shuffleSwitch {
        display: flex;
    }

    input {
        padding: 0 5px;
        border: 1px solid black;
        margin-top: 10px;
    }
}

.Navigation_transition-enter-active, .Navigation_transition-leave-active {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0, 1);
}
.Navigation_transition-enter, .Navigation_transition-leave-to {
    transform: translate(-100%, 0);
}

</style>
