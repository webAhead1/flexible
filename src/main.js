<<<<<<< HEAD
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
=======
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
>>>>>>> 6385f189e866f73c4d667a87409e4ca6edc03986

const app = createApp(App);

app.use(router);

app.mount('#app');
