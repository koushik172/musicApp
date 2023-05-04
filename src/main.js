import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VeeValidatePlugin from './includes/plugins/validation'
import { auth } from './includes/plugins/firebase'

import './assets/base.css'
import './assets/main.css'
import { onAuthStateChanged } from 'firebase/auth'

let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    const app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(VeeValidatePlugin);

    app.mount('#app');
  }
})
