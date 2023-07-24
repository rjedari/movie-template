<template>
 
    <li 
    :class="['my-custom-link-style',customStyleLinkClass]"
    >
     {{ title }}
    </li>

</template>

<script setup>
defineProps(["customStyleLinkClass","title"])
</script>

<style>
</style>
