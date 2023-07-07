import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';
import './main.css'
import App from './App.vue'
import HeaderMenu from './components/header/HeaderMenu.vue'
import TheButtonVue from './components/MainSection/TheButton.vue';
createApp(App).component("HeaderMenu",HeaderMenu).component("TheButton",TheButtonVue).mount('#app')
