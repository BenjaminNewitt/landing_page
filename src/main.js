import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({ disable: "phone" });
  },
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
