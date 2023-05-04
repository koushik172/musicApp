import firebase from 'firebase/compat/app'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, collection, addDoc,  setDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAa3bbD-EQDc1qeu46SaV-AM1rlvshUAYg',
  authDomain: 'musicapp-7535c.firebaseapp.com',
  projectId: 'musicapp-7535c',
  storageBucket: 'musicapp-7535c.appspot.com',
  messagingSenderId: '595461389254',
  appId: '1:595461389254:web:b4070a767164c1906e50c7'
}

firebase.initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()

const usersCollection = collection(db, 'users');

export { auth, createUserWithEmailAndPassword, db, usersCollection, addDoc, setDoc, doc, updateProfile, signInWithEmailAndPassword, signOut }
