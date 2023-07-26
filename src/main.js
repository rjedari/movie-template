// main.js
import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import "./main.css";
import HeaderMenu from "./components/header/HeaderMenu.vue";
import TheButtonVue from "./components/MainSection/TheButton.vue";
import TheLinkSlider from "./components/MainSection/TheLinkSlider.vue";
import { router } from "./router/index";

const app = createApp(App);
app.use(router);

// Register global components
app.component("HeaderMenu", HeaderMenu);
app.component("TheButton", TheButtonVue);
app.component("TheLinkSlider", TheLinkSlider);

app.mount("#app");
