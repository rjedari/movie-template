<template>
  <div class="">
    <div class="text-base py-5 mx-1 hover:text-yellow-500">LATEST NEWS</div>
    <div
      class="flex first-section-menu ml-1 list-none overflow-x-auto overflow-y-hidden"
    >
      <li
        v-for="({ link, title }) in SliderLink"
        :key="link"
        @click="update(link)"
      >
        <a @click.prevent>{{ title }}</a>
      </li>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const emit = defineEmits(["sendTab"]);

defineProps(["SliderLink", "title"]);
const activeTab = ref("");
const active = "active";
function update(data) {
  activeTab.value = data;
  sendTab();
}



const sendTab = () => {
  emit("sendTab", activeTab.value);
};

const movieList = ref([]);

</script>

<style scoped>
.active {
  border: 2px solid rgb(255, 231, 12);
}
</style>
