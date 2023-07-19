<template>

<main-layout>
    <router-view></router-view>

</main-layout>


</template>

<script setup>
import { ref, reactive } from "vue";
import { RouterView } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import MainLayout from "./layout/MainLayout.vue";
import MainLoginPage from "./pages/MainLoginPage.vue";

</script>
<style>

</style>
