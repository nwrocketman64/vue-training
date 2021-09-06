import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BasedCard from './components/ui/BasedCard.vue'
import BasedButton from './components/ui/BasedButton.vue';
import BasedBadge from './components/ui/BasedBadge.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('based-card', BasedCard);
app.component('based-button', BasedButton);
app.component('based-badge', BasedBadge);

app.mount('#app');
