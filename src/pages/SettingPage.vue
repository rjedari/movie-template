<template>
  <header-menu />

  <main class="md:my-40 my-24 mx-auto md:max-w-[1100px] max-w-[700px]">
    <section class="mx-2 relative">
      <div class="absolute right-0" v-if="errorMessageElement">
        <div class="bg-red-200 p-5 border border-red-300 rounded-lg relative">
          {{ errorMessageElement }}
        </div>
        <div
          class="bg-red-200 w-5 absolute right-4 -bottom-2 border border-red-300 - rounded-md h-5 rotate-45"
        ></div>
      </div>

      <div class="">
        <h1 class="text-4xl md:justify-normal justify-center flex py-4">
          SETTINGS
        </h1>
        <div class="flex justify-center max-w-[1100px]">
          <ul class="flex justify-center md:justify-normal overflow-x-auto">
            <div v-for="{ link } in links" :key="link">
              <the-link-slider
                :title="link"
                :my-custom-link-style="myCustomLinkStyleClass"
              />
            </div>
          </ul>
        </div>
      </div>
      <div class="flex flex-col text-gray-500 mt-10">
        <div class="text-gray-800 text-xl">PERSONAL DATA</div>

        <div class="mt-10">
          <div
            action=""
            class="flex border-t border-yellow-200 flex-col items-start"
          >
            <div>
              <div class="md:flex-row flex flex-col my-6 items-center">
                <div class="mx-5 text-lg">First name and last name:</div>
                <i
                  @click="changeName = true"
                  class="fa fa-pen hover:text-yellow-500 relative text-gray-500 p-2 mx-4"
                ></i>
                <div>
                  {{ fullName }}
                </div>
              </div>

              <div
                v-if="changeName"
                @submit="changeName = false"
                class="flex w-full md:flex-row flex-col justify-between py-10 px-5 items-center border-gray-200 border border-dashed"
              >
                <setting-input
                  @save="save"
                  :place-holder1="'First Name'"
                  :place-holder2="'Last Name'"
                >
                  First ame and last name :</setting-input
                >
              </div>
            </div>

            <div
              class="md:flex-row flex flex-col w-full justify-start border-b px-5 items-center"
            >
              <div class="my-10">Date of birth:</div>
              <div class="mx-10">
                {{ birthDate }}
                <i
                  @click="changeBD = true"
                  class="fa fa-pen hover:text-yellow-500 relative text-gray-500 p-2 mx-4"
                ></i>
              </div>
            </div>

            <div
              v-if="changeBD"
              class="flex w-full md:flex-row flex-col justify-between py-10 px-5 items-center border-gray-200 border border-dashed"
            >
              <setting-input
                @save="saveBD"
                :place-holder1="'year:1999'"
                :place-holder2="'month:september'"
              >
                Date of birth:</setting-input
              >
            </div>
            <div
              class="flex justify-start mx-5 my-5 py-10 border-b items-center"
            >
              <div class="flex md:flex-row flex-col items-center">
                <div class="text-gray-500">sex :</div>
                <div
                  class="flex mx-8 px-4 border items-center rounded-lg border-gray-300"
                >
                  <div class="flex items-center mx-2">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-500"
                    />
                    <label
                      for="default-radio-1"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >male
                    </label>
                  </div>
                  <div class="flex items-center mx-2">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-yellow-500"
                    />
                    <label
                      for="default-radio-2"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >female</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-5 w-full border-b items-start"
            >
              <div class="text-gray-700 text-xl py-5">LOGIN DATA</div>

              <div class="flex m-5 items-center">
                <div class="text-gray-500">E-mail :</div>
                <div class="mx-10">
                  i.raziyeh@gmail.com

                  <i
                    @click="emailChange = true"
                    class="fa fa-pen hover:text-yellow-500 relative text-gray-500 p-2 mx-4"
                  ></i>
                </div>
              </div>
              <div
                v-if="emailChange"
                class="flex w-full md:flex-row flex-col justify-between py-10 px-5 items-center border-gray-200 border border-dashed"
              >
                <input type="email" />
              </div>
              <div class="flex m-5 items-center">
                <div class="text-gray-500">Current password :</div>
                <div class="mx-10">
                  ....

                  <i
                    @click="passChange = true"
                    class="fa fa-pen hover:text-yellow-500 relative text-gray-500 p-2 mx-4"
                  ></i>
                </div>
              </div>
              <div
                v-if="passChange"
                class="flex w-full md:flex-row flex-col justify-between py-10 px-5 items-center border-gray-200 border border-dashed"
              >
                <setting-input
                  @save="savePass"
                  :place-holder1="'current password'"
                  :place-holder2="'new password'"
                >
                  change password:</setting-input
                >
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-5 w-full border-b items-start"
            >
              <div class="text-gray-700 text-xl py-5">THE REMAINING</div>
              <div class="flex m-5 items-center">
                <div class="text-gray-500">newsletter</div>
                <div class="mx-10">
                  <div class="flex items-center mb-4">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-500"
                    />
                    <label
                      for="default-radio-1"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >I want to receive and stay up to date
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-yellow-500"
                    />
                    <label
                      for="default-radio-2"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >I do not want to receive the newsletter</label
                    >
                  </div>
                </div>
              </div>
              <div class="flex m-5 items-center">
                <div class="text-gray-500">your IP address :</div>
                <div class="mx-10">
                  158.255.77.156

                  <i
                    class="fa fa-pen hover:text-yellow-500 relative text-gray-500 p-2 mx-4"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import SettingInput from "../components/inputs/SettingInput.vue";
import TheLinkSlider from "../components/MainSection/TheLinkSlider.vue";
const fullName = ref(" razi jdr");
const FirstName = ref("");
const LastName = ref("");
const birthDate = ref(`${1999}${"/"}${"sep"} `);
const birthYear = ref("");
const birthDay = ref("");
const errorMessageElement = ref("");

function inputTesting(data1, data2, data3, data4, data5) {
  try {
    const trimmedVar1 = data1.trim();
    const trimmedVar2 = data2.trim();

    if (trimmedVar1.length === 0 || trimmedVar2.length === 0) {
      throw new Error("First name and last name must not be empty.");
    }
    data3.value = trimmedVar1;
    data4.value = trimmedVar2;
    data5.value = data3.value + " " + data4.value;
  } catch (error) {
    errorMessageElement.value = error.message;
    setTimeout(() => {
      errorMessageElement.value = false;
    }, 3000);
  }
}

function save(var1, var2) {
  inputTesting(var1, var2, FirstName, LastName, fullName);
}

const changeName = ref(false);
const passChange = ref(false);
const emailChange = ref(false);
function saveBD(var1, var2) {
  inputTesting(var1, var2, birthYear, birthDay, birthDate);
}
const links = reactive([
  { link: "GENERAL" },

  { link: "ASSISTANT" },
  { link: "NOTIFICATIONS" },
  { link: "  OBSERVED FORUMS" },

  { link: "FILMWEB+ SUBSCRIPTION" },
]);
function savePass(var1, var2) {}
</script>

<style scoped>
.my-custom-link-style {
  @apply text-base text-gray-500 w-80 hover:text-black flex justify-center  py-5 px-10 hover:border-yellow-500 border-b-2    duration-300;
}
</style>
