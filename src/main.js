import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
const app = createApp(App);

import gAuthPlugin from 'vue3-google-oauth2';
let gauthClientId =
  '905632566241-c0mi3crlia5q8h6tqe9uc2u647sjkpji.apps.googleusercontent.com';
app.use(gAuthPlugin, {
  clientId: gauthClientId,
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: false,
});

app.use(router);

app.mount('#app');
