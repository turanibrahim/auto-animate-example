// main.ts file
import { createApp } from 'vue'
import App from './App.vue'
import initAutoAnimate from '@/plugins/auto-animate';
import './assets/main.css'

const app = createApp(App);

initAutoAnimate(app);

app.mount('#app');
