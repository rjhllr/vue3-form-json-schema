import { createApp } from 'vue'
import App from './App.vue'
import {vfjsPlugin} from 'vue3-form-json-schema';

createApp(App).use(vfjsPlugin).mount('#app');
