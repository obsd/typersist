import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faExclamation,
    faFont,
    faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Typing from "@/components/Typing.vue";

library.add(faRedoAlt, faSave, faChevronDown, faFont, faExclamation);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("Typing", Typing);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
