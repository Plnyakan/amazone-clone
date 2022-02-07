import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyARP36Rp2wCmHVxz81DYhe356-GTJ0bIhQ",
        authDomain: "clone-14cd6.firebaseapp.com",
        projectId: "clone-14cd6",
        storageBucket: "clone-14cd6.appspot.com",
        messagingSenderId: "235576196502",
        appId: "1:235576196502:web:e29999ad712f178b3a71b7",
        measurementId: "G-SRWSJ9FVHV",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};