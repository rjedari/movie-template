<template>
  <div class="">
    <div v-show="!show" class="text-base py-5 mx-1 hover:text-yellow-500"> <slot/></div>
    <div  
      class="flex ml-1 list-none overflow-x-auto overflow-y-hidden"
    >
      <li :class="{customClass :show , defult : defultClass}" 
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

defineProps(["SliderLink", "title" ,'show','defultClass']);
const activeTab = ref("");
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

.defult{
  @apply py-4 px-8 text-base hover:border-yellow-400 hover:border-b-2 h-16
}
.customClass{
  @apply  text-lg text-gray-500 flex justify-center hover:text-white w-60 py-5 px-10 hover:border-yellow-500 border-b ml-5 duration-500

}
</style>

