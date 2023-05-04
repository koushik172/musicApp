import { defineStore } from 'pinia'
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setDoc,
  doc,
  db,
  updateProfile,
  signOut
} from '@/includes/plugins/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(values) {
      const userCred = await createUserWithEmailAndPassword(auth, values.email, values.password)

      const newDocument = doc(db, 'users', userCred.user.uid)

      await setDoc(newDocument, {
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country
      })

      await updateProfile(userCred.user, {
        displayName: values.name
      })

      this.userLoggedIn = true
    },
    async authenticate(values) {
      await signInWithEmailAndPassword(auth, values.email, values.password)

      this.userLoggedIn = true;
    },
    async logout() {
      await signOut(auth);
      
      this.userLoggedIn = false;
      window.location.reload();
    }
  }
})
