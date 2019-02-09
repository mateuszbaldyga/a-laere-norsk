<template>
    <div class="Navigation" v-click-outside="close">
        <button @click="toggle()">☰</button>
        <!-- <transition name="Navigation_transition"> -->
            <div class="Navigation_menu" v-if="isOpened">
                <ul class="container">
                    <li>
                        <routerLink :to="{ name: 'create-dict' }">
                            Search
                        </routerLink>
                    </li>
                    <li>
                        <routerLink :to="{ name: 'create-dict' }">
                            Create dict
                        </routerLink>
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
        ]),
    },

    methods: {
      toggle () {
        this.isOpened = !this.isOpened
      },
      close () {
        this.isOpened = false
      }
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/shared-vars.scss';

.Navigation {

    > button {
        z-index: $z-id-modal + 1;
        width: 100px;
        height: 100px;
        font-size: 25px;
        padding-top: 10px;
        padding-left: 15px;
    }

    &_menu {
        position: fixed;
        top: 0;
        height: 100vh;
        width: 200px;
        border-right: 1px solid #000;
        left: 0;
        line-height: 2;
        z-index: $z-id-modal;
        background-color: #fff;
        padding: 100px 0;

    }
}

.Navigation_transition-enter-active, .Navigation_transition-leave-active {
  transition: transform .15s ease-out;
}
.Navigation_transition-enter, .Navigation_transition-leave-to {
    transform: translateX(-100%);
}

</style>
