import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import VueKinesis from "vue-kinesis";

const app = createApp(App);
app.use(VueKinesis);

createApp(App).use(router).mount("#app");
