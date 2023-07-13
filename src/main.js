import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import "./main.css";
import App from "./App.vue";
import HeaderMenu from "./components/header/HeaderMenu.vue";
import TheButtonVue from "./components/MainSection/TheButton.vue";
import TheLinkSlider from "./components/MainSection/TheLinkSlider.vue";
import {router} from "./router";

const app = createApp(App)
  .component("HeaderMenu", HeaderMenu)
  .component("TheButton", TheButtonVue)
  .component("TheLinkSlider", TheLinkSlider);

app.use(router);
app.mount("#app");
