<template>
  <header>
    <header-menu />
  </header>
<slot/>
  <footer>
    <footer-main />
  </footer>
</template>
<script setup>
import FooterMain from "../components/footer/FooterMain.vue"
import HeaderMenu from "../components/header/HeaderMenu.vue";
</script>
