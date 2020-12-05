import Vue from "vue";
import App from "./App";
import router from "./router/index";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
import VueCoreVideoPlayer from 'vue-core-video-player'
import { ChartPlugin } from "@syncfusion/ej2-vue-charts";
import './registerServiceWorker'
Vue.use(ChartPlugin);
Vue.use(VueCoreVideoPlayer)

Vue.use(PaperDashboard);


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
