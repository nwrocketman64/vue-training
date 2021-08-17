import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        { path: '/teams', component: TeamsList, children: [
            { path: ':teamId', component: TeamMembers, props: true },
        ] }, // domian.com/teams => ...
        { path: '/users', component: UsersList },
        { path: '/:notFound(.*)', redirect: '/teams' },
    ],
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 }
    } 
});

router.beforeEach(function(_to, _from, next) {
    next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
