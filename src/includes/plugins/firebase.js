import firebase from 'firebase/compat/app'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, collection, addDoc,  setDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'Your firebase apikey',
  authDomain: 'musicapp-7535c.firebaseapp.com',
  projectId: 'musicapp-7535c',
  storageBucket: 'musicapp-7535c.appspot.com',
  messagingSenderId: 'messegeSenderId',
  appId: 'Your firebase appId'
}

firebase.initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()

const usersCollection = collection(db, 'users');

export { auth, createUserWithEmailAndPassword, db, usersCollection, addDoc, setDoc, doc, updateProfile, signInWithEmailAndPassword, signOut }
