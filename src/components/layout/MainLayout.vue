<template>
  <header>
    <header-menu />
  </header>
  <slot />

  <footer>
    <footer-main />
  </footer>
</template>
<script setup>
import FooterMain from "../footer/FooterMain.vue";
import HeaderMenu from "../header/HeaderMenu.vue";
</script>
