import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Notice from "@/components/Notice.vue";

const eventBus = new Vue();

Vue.mixin({
  components: {
    Notice
  },
  data() {
    return {
      eventBus: eventBus,
      notice: null
    };
  },
  methods: {
    notify(content, type) {
      this.notice = {
        content: content,
        type: type
      };
    },
    valid(value) {
      if (!value) return;
      return value.match(/^[a-zA-Z]*$/);
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
