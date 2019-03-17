import Vue from 'vue'
import firebase from 'firebase/app'

var config = {
    apiKey: 'AIzaSyCH19hlGVxJWJEtwGS-hivGLTsyOmahKHs',
    authDomain: 'a-laere-norsk.firebaseapp.com',
    databaseURL: 'https://a-laere-norsk.firebaseio.com',
    projectId: 'a-laere-norsk',
    storageBucket: 'a-laere-norsk.appspot.com',
    messagingSenderId: '1019382407285',
}

firebase.initializeApp(config)

Vue.prototype.$firebase = firebase
