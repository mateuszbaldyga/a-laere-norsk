import Vue from 'vue'
import firebase from 'firebase'
import ls from 'local-storage'
import store from '@/store'

const provider = new firebase.auth.GoogleAuthProvider()

const auth = {
    signup: () => firebase.auth().signInWithRedirect(provider),
    logout: () => {
        ls.remove('token')
        ls.remove('user')
        store.commit('SET_USER_INFO')
    },
    getUser: () => {
        firebase.auth().getRedirectResult().then(function (result) {
            if (result.credential) {
            // This gives you a Google Access Token. You can use it to access the Google API.
                const token = result.credential.accessToken
                ls.set('token', token)
            // ...
            }
            // The signed-in user info.
            const user = result.user

            if (user) {
                ls.set('user', { email: user.email, uid: user.uid })
                store.commit('SET_USER_INFO')
            }

        }).catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code
            const errorMessage = error.message
            // The email of the user's account used.
            const email = error.email
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential
            // ...
        })
    },
}

Vue.prototype.$auth = auth
