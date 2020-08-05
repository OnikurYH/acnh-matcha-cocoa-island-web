import './styles/index.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './fontawsome';
import './translations/i18next';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
