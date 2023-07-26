<template>
  <header>
    <header-menu @pop="show" />
  </header>
  <!-- <sign-in-pop-up /> -->
<slot/>
  <footer>
    <footer-main />
  </footer>
</template>
<script setup>
import FooterMain from "../components/footer/FooterMain.vue"
import HeaderMenu from "../components/header/HeaderMenu.vue";
import signInPopUp from "../components/signInPopUp.vue";
function show (){
  console.log(show);
}

</script>
