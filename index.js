import {  initializeApp } from 'firebase';

import { getAuth, onAuthStateChanged} from 'firebase/auth';
import  { getFireStore, collection, getDocs, getDoc } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCOM1U2IFyAnx6b8CemGiZej5iqGGw7ETY",
    authDomain: "tohoga-48747.firebaseapp.com",
    projectId: "tohoga-48747",
    storageBucket: "tohoga-48747.appspot.com",
    messagingSenderId: "131035651698",
    appId: "1:131035651698:web:bbefdd2f446034ae38aceb"
  };
  
const app = initializeApp(firebaseConfig);


const auth = getAuth(firebaseApp); // getAuth() returns an object with methods to authenticate users with Firebase.
const firestore = getFireStore(firebaseApp); // firestore
firestore.collection('todos').getDocs(); // getDocs() returns a promise that resolves to an array of documents.
const todosCollection = collection(firestore,'todos'); // collection(firestore, 'todos')

// get docs from collection
const snapshot = await getDocs(todosCollection);



// Detect auth state



onAuthStateChanged(auth, user => { // onAuthStateChanged(user) is a callback function that is called when the user's auth state changes.
    if (user) {
        console.log('User logged in', user);
    } else {
        console.log('User logged out');
    }
});


