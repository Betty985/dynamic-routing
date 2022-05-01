import { createApp } from "vue";
import App from "./App.vue";
// test
import router from "./router";

import components from "./components";
let app = createApp(App);
app.use(router);
app.use(components);
app.mount("#app");
