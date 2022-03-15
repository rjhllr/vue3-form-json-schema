import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import { createApp } from 'vue'
import App from './App.vue'
import {vfjsPlugin} from 'vue3-form-json-schema';
import BootstrapVue3 from 'bootstrap-vue-3';

createApp(App).use(BootstrapVue3).use(vfjsPlugin).mount('#app');
