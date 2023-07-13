<template>
<!-- <router-link :to="{name:'Home'}"></router-link>
<router-link :to="{name:'Login'}"></router-link> -->
<main>
    <router-view></router-view>
</main>
<!-- <home-page /> -->
<!-- <main-login-page /> -->
</template>

<script setup>
import { ref, reactive } from "vue";
import { RouterView } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import MainLoginPage from "./pages/MainLoginPage.vue";

</script>
<style>

</style>
