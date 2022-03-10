import { createApp } from 'vue';
import Moui from '@/components';
import App from './App.vue';
import 'normalize.css';
import '@/theme/index.css';
import './styles/index.css';

const app = createApp(App).use(Moui);
app.mount('#app');
