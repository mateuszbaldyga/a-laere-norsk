import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import ls from 'local-storage'
import store from '@/store'

function getUser () {
    const user = firebase.auth().currentUser
    const lsUser = ls.get('user')

    if (user) {
        ls.set('user', { email: user.email, uid: user.uid })
        store.commit('SET_USER_INFO', user)
    }

    if (lsUser) {
        store.commit('SET_USER_INFO', lsUser)
    }
}

function signup ({ email, password }) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(r => {
            getUser()
        })
        .catch(e => {
            console.log('🦄 e', e)
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(r => {
                    getUser()
                })
                .catch(e => {
                    console.log('🦄 auth.js error', e)
                })
        })
}

function logout () {
    firebase.auth().signOut().then(function () {
        ls.remove('user')
        store.commit('SET_USER_INFO')
    })
}

const auth = { signup, logout, getUser }

Vue.prototype.$auth = auth

export default auth
