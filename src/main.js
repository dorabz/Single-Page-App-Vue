import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

const LazyComponent = defineAsyncComponent(() => import('./components/LazyComponent.vue'));

createApp(App).use(store).use(router).component('lazy-component', LazyComponent).mount("#app");
