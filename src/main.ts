import 'element-plus/lib/theme-chalk/index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import App from "./App.vue";
import Developer from "./myPlugin/Developer.vue";
import MathJaxPlugin from "./myPlugin/MathJaxPlugin.vue";
import router from './router'
import './assets/css/default.css'
import store from './store'

const app = createApp(App)
app.config.globalProperties.Developer = Developer;
app.config.globalProperties.MathJaxPlugin = MathJaxPlugin;
router.beforeEach((to, from, next) => {
    // console.log('from beforeEach: ===================================');
    // console.log('to = ' + JSON.stringify(to.name) + " from = " + JSON.stringify(from.name));
    // console.log('to ==== from');
    // console.log(to.params);
    // console.log(from.params);
    // console.log('store.state in beforeeach');
    // console.log(JSON.stringify(store.state));   
    if (to.name != 'login') {
        // console.log('store.state');
        // console.log(store.state);
        // console.log(store.getters['user/hasLogin']);

        if (store.getters['hasLogin']) {
            next();
        }
        else {
            // console.log('need input info')
            next({ name: 'login' })
        }
    }
    else {
     
        next();
    }
})

// console.log('store');
// console.log(store);
// console.log(store.state.user);


app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app');

