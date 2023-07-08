<template>
  <footer class="bg-gray-200 max-sm:max-w-screen-sm">
    <div class="container flex justify-center flex-col">
      <div class="  ">
        <div>
          <div class="my-5 mx-5 flex justify-between text-lg">
            RECENTLY VISITED
            <span class="text-xs hover:text-yellow-500 text-yellow-800"
              >Clear History</span
            >
          </div>
          <div
            class="flex overflow-y-hidden overflow-x-auto ml-0 max-w-screen-2xl"
          >
            <div v-for="({ id, poster_path },index) in watched" :key="id">
              <footer-items
                :index="index"
                :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${poster_path}`"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="flex mt-12 justify-between max-sm:flex-col items-center">
            <div>
              <i
                class="fab fa-instagram text-3xl text-gray-500 hover:text-black p-5 mx-5"
              ></i>
              <i
                class="fab fa-twitter text-3xl text-gray-500 hover:text-black p-5 mx-5"
              ></i>
            </div>
            <div class="  ">
              <ul class="flex max-md:flex-col max-sm:flex-wrap max-sm:w-32">
                <div>
                  <li
                    class="flex items-center text-gray-500 mx-5 text-sm hover:text-gray-800"
                  >
                    <span
                      class="border flex justify-center mx-2 items-center w-4 h-4 border-black rounded-full"
                    >
                      <i class="fas fa-add" style="font-size: 9px"></i>
                    </span>
                    Add movie
                  </li>
                </div>
                <div>
                  <li
                    class="flex items-center text-gray-500 mx-5 text-sm hover:text-gray-800"
                  >
                    <span
                      class="border flex justify-center mx-2 items-center w-4 h-4 border-black rounded-full"
                    >
                      <i class="fas fa-add" style="font-size: 9px"></i>
                    </span>
                    Add serial
                  </li>
                </div>
                <div>
                  <li
                    class="flex items-center text-gray-500 mx-5 w-20 text-sm hover:text-gray-800"
                  >
                    <span
                      class="border flex justify-center mx-2 items-center w-4 h-4 border-black rounded-full"
                    >
                      <i class="fas fa-add" style="font-size: 9px"></i>
                    </span>
                    Add game
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="text-xs md:block hidden text-gray-500 mt-20 p-5 hover:text-gray-800"
        >
          <a href="#">
            Film premieres :A game for everythingI love you anywayMarked: The
            Last KeyPartyReady for anything. exterminatorM for a
            murdererFernandoprom@News:Guardians of the Galaxy: Volume 3 ,Suzume
            ,Constantly: The Michael J. Fox Story ,Lynx. king of the forest
            ,Dungeons & Dragons: A Thief's Honor ,Vermeer. Close to the
            MasterErnest and Celestyna: Music's MissionGame releases:After Us
            ,LEGO 2K Drive ,Crusader Kings III: Royal Court ,Company of Heroes 3
            ,The Legend of Zelda: Tears of the Kingdom ,Crusader Kings III:
            Tours & Tournaments ,Darkest Dungeons 2Upcoming GamesDiablo IV ,The
            Lord of the Rings: Gollum ,shock system ,Final Fantasy XVI ,Amnesia:
            The Bunker ,The Expanse: A Telltale Series ,Oxenfree II: Lost
            SignalsUpcoming MoviesSpider-Man: Through the Multiverse ,Eight
            Mountains ,little mermaid ,Super Mario Bros. Movie ,boogeyman ,Mamma
            Mafia ,love again ,Plan 75 ,piece of heaven ,mother's day ,24
            hourshouria ,enchanted mountain ,Blood and Gold ,innocent ,beautiful
            life ,Victim/Suspect ,Rush to Rush ,Last Wagon ,Fairy RosePopular
            showsAgent: Stars ,millionaires ,kitchen revolutions ,MasterChef
            Junior ,cooked ,Kuba Wojewódzki ,A woman at the end of the worldMost
            popular movies on VOD:Ant-Man and the Wasp: Quantomania onlineair
            onlineonline motheronline visitorsOnline fanficWhere crayfish sing
            onlineBullet Train onlineonline christeningPhilip onlineOnline
            whaleMost popular series on VOD:Queen Charlotte: A Tale from the
            Bridgerton World onlineFrom there onlineQueen Cleopatra
            online#BringBackAlice onlineOnline brawlThe Last of Us onlineLove
            and death onlineEmigration XD onlineBlack Knight onlineOnline
            succession
          </a>
        </div>
        <div
          class="text-xs text-gray-500 justify-between flex mt-20 p-5 hover:text-gray-800"
        >
          <div class="text-xs text-gray-500 footer-link">
            <a href=""> advertisement </a><a href=""> Editorial </a
            ><a href=""> Statute </a><a href=""> privacy policy </a
            ><a href=""> Help </a><a href=""> Netflix </a
            ><a href=""> HBO MAX </a><a href=""> player </a>
            <a href=""> Amazon Prime Video </a><a href=""> Disney+ </a>
          </div>
          <div>Copyright © 1998-2023 Filmweb</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import footerItems from "./footerItems.vue"
import { API_IMAGE_BASE_URL, API_IMAGE_SIZE } from "../constance/api-constants";

const watched = ref([]);

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDkyOWJhZjNhNzE1NjliOGI5ZGIyYjQwOGYzMTc5ZSIsInN1YiI6IjY0YTJjZDU1ZThkMDI4MDBmZjhhODMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dxCbiZ9WfudsL0yenKNM5sjDsr109wLWiSUQ2Obh0wo",
  },
};

onMounted(() => {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      watched.value = response.results;
      
    })
    .catch((err) => console.error(err));
});
</script>

<style></style>
