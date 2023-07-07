<template>
  <div class="col-span-1">
    <h2 class="bg-red-300 p-5 m-5">{{ text }}</h2>
    <h2 class="bg-yellow-300 p-5 m-5">{{ message }}</h2>
    <h2 class="bg-blue-300 p-5 m-5">{{ checked }}</h2>
    <h2 class="bg-green-200 p-5 m-5">{{ section }}</h2>

    <h1>{{ person.firstName }}</h1>
    <h2>{{ person.lastName }}</h2>
    <h3>{{ person.firstName }} + {{ person.lastName }}</h3>
    <input v-model="text" @input="check" class="border-2 p-2 m-4" type="text" />
    <textarea
      class="border-2"
      name="razi"
      id="1"
      cols="30"
      v-model.number="message"
      rows="10"
    />
    <input
      class="border-2 m-5 p-4"
      type="checkbox"
      false-value="no "
      true-value="hadi"
      value="hadi"
      v-model="checked"
    />
    <input
      class="border-2 m-5 p-4"
      type="checkbox"
      false-value="no "
      true-value="razi"
      value="razi"
      v-model="checked"
    />
    <select v-model="section" class="m-2 bg-gray-300">
      <option value="none" disabled>select an option</option>

      <option value="abc">abc</option>
      <option value="def">def</option>
      <option value="ghi">ghi</option>
    </select>
    <button @click="add(3, $event)">{{ count }}</button>
    <div>
      <button @click="$emit('move', name, 'up')" class="bg-red-200 p-4 m-2">
        up
      </button>
      <button @click="$emit('move', name, 'down')" class="bg-red-300 p-4 m-2">
        down
      </button>
    </div>
    <input
      v-model="age"
      :class="{ error: age < 18, success: age >= 18 }"
      placeholder="how old?"
    />
  </div>
  <button class="m-5" @click="fontSize++">up</button>
  <button class="m-5" @click="fontSize--">down</button>
  <div :style="{ fontSize: `${fontSize}px` }">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repudiandae
    aut? Dignissimos eos, nostrum maiores eligendi explicabo commodi ipsum
    illum.
  </div>
  <button class="m-5 p-5 bg-red-200" @mouseover="show = 'a'">a</button>
  <button class="m-5 p-5 bg-red-200" @mouseover="show = 'b'">b</button>
  <button class="m-5 p-5 bg-red-200" @mouseover="show = 'c'">c</button>
  <button class="m-5 p-5 bg-red-200" @mouseover="show = 'd'">d</button>
  <div>
    <p v-if="show == 'a'">a</p>
    <p v-else-if="show == 'b'">b</p>
    <p v-else-if="show == 'c'">c</p>
    <p v-else-if="show == 'd'">d</p>
  </div>
  <div v-for="({ name, lastName, statue }, index) in people">
    <div v-if="statue">{{ name }} +{{ lastName }}-{{ index }}</div>
  </div>
</template>

<script setup>
const show = ref("");
defineEmits(["move", name]);
import { reactive } from "vue";
import { ref } from "vue";
const text = ref("");
const message = ref("");
const section = ref("");
const checked = ref([]);
const fontSize = ref(20);
const count = ref(0);
const people = [
  {
    name: "razi",
    lastName: "jedari",
    statue: true,
  },
  { name: "zahra", lastName: "jedari", statue: true },
  { name: "hadi", lastName: "jedari", statue: false },
];
function add(num, event) {
  console.log(num, event);
  count.value++;
}
const age = ref(10);

const person = { firstName: "hadi", lastName: "jedari" };
</script>

<style>
.error {
  border: 2px solid red;
}
.success {
  border: 2px solid rgb(148, 223, 148);
}
</style>
