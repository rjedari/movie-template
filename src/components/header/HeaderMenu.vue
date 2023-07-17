<template>
  <div>
    <div
      class="bg-black fixed pb-5 right-0 left-0 w-full top-0"
      style="z-index: 999"
    >
      <nav
        class="px-4 flex max-lg:justify-between justify-center items-center container"
        style="z-index: 999"
      >
        <div class="mr-2">
            <img width="100px" src='../../assets/image/Batman-movie-Logo-1992-500x281.png' alt="logo" />

        </div>
        <div class="relative w-2/5 max-lg:hidden block">
          <input
            type="text"
            placeholder="Search for movies, series, games, characters and worlds"
            class="border border-gray-300 w-full py-2 pl-10 pr-4 rounded"
          />
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="fas fa-search text-yellow-500"></i>
          </span>
        </div>
        <div class="flex items-center container w-full max-lg:justify-end px-2">
          <div class="lg:w-3/4 w-1/2 max-lg:hidden block">
            <a
              href="#"
              class="flex items-center w-full justify-center text-sm px-2 bg-white hover:text-blue-500 text-gray-600 font-bold py-2 rounded"
            >
              <img
                src="../../assets/image/google.png"
                alt="Google Logo"
                class="w-5 h-5 mx-2 rounded-lg"
              />
              <span>Login with Google</span>
            </a>
          </div>

          <div class="pl-4 relative group flex">
            <span
              href="/logout"
              class="text-white flex items-center hover:text-yellow-500 w-20 text-sm"
            >
              <img
                class="w-14 h-14 mr-2 rounded-full"
                src="../../assets/image/user.3.jpg"
                alt=""
              />
              <i class="fas fa-chevron-down text-xs max-lg:hidden block"></i>
              <a href="./menu.html">
                <i
                  class="fas fa-bars text-xl text-white max-lg:block hidden"
                ></i>
              </a>
            </span>
            <div></div>

            <div class="block max-lg:hidden">
              <div
                class="drawer group-hover:block absolute top-8 right-0 z-50 hidden text-sm px-4 bg-gray-100 w-64"
              >
                <div class="flex justify-between items-center">
                  <a
                    class="py-5 mx-2 text-gray-700 hover:text-gray-900 hover:border-yellow-500 border-b-2"
                    href="#"
                    >Assistant</a
                  >
                  <a
                    class="py-5 mx-2 text-gray-700 hover:text-gray-900 hover:border-yellow-500 border-b-2"
                    href="#"
                    >Notification
                  </a>
                </div>
                <ul class="">
                  <li
                    class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                  >
                    PROFILE
                  </li>
                  <li
                    class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                  >
                    Premieres and announcements
                  </li>

                  <ul class="py-2">
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      FAVORITES
                    </li>

                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      Setting
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                     
                      Log in 
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      Log out
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="max-lg:hidden block">
        <div
          class="w-full flex justify-center text-base items-center container"
        >
         <header-sub-menu  :sub-img="true"> MOVIES </header-sub-menu>
         <header-sub-menu  :sub-img="true" > TV SERIES </header-sub-menu>
         <header-sub-menu  > GAMES </header-sub-menu>
         <header-sub-menu  :sub-img="true" > RAZNKING </header-sub-menu>
         <header-sub-menu > VOD </header-sub-menu>
         <header-sub-menu > TV SHOW </header-sub-menu>
         <header-sub-menu > MY FILM WEB </header-sub-menu>

        
<!-- 
          <div class="relative x pt-4">
            <a class="text-white px-10 py-4 hover:text-yellow-500" href=""
              ></a
            >
            <div class="absolute hidden top-12 bg-gray-100">
              <div class="flex">
                <div class="text-sm px-4 bg-gray-100 w-64">
                  <ul class="">
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      GAME HOME
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      Premieres and announcements
                    </li>

                    <ul class="py-2">
                      <li
                        class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                      >
                        GAME REVIEW
                      </li>

                      <li
                        class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                      >
                        GAME DATABASE
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="relative x pt-4">
            <a class="text-white px-10 py-4 hover:text-yellow-500" href=""
              ></a
            >
            <div class="absolute hidden top-12 bg-gray-100">
              <div class="flex">
                <div class="text-sm px-4 bg-gray-100 w-72">
                  <ul class="">
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      FILM NEWS
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      TOP 500 MOVIES
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      THE MOST ANTICIPATED
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      SERRIES NEWS
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      TOP 500 SERIES
                    </li>
                  </ul>
                  <ul class="py-3">
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      MOVIES ON VOD
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      THE BEST ROLES
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      ORIGINAL PRODUCTION
                    </li>
                  </ul>
                  <ul class="">
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      VIDEO GAMES
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600"
                    >
                      BOX OFFICE
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="relative x pt-4">
            <a class="py-4 px-10 text-yellow-500" href="">VOD</a>
          </div>
          <div class="relative x pt-4">
            <a class="text-white px-4 hover:text-yellow-500" href="">TV SHOW</a>
          </div>
          <div class="relative x pt-4">
            <a class="text-white px-10 py-4 hover:text-yellow-500" href=""
              >MY FILM WEB</a
            >
            <div class="absolute hidden top-12 right-0 bg-gray-100">
              <div class="flex">
                <div class="text-sm bg-gray-100 w-56">
                  <ul class="">
                    <li
                      class="shadow-lg p-2 px-4 text-gray-800 bg-white items-center text-lg"
                    >
                      PREMIUMS
                      <i class="fas fa-plus text-yellow-500 px-4"></i>
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 px-4 font-bold hover:text-yellow-600"
                    >
                      My FAVORITES
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 px-4 font-bold hover:text-yellow-600"
                    >
                      RECOMMENDATIONS
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 px-4 font-bold hover:text-yellow-600"
                    ></li>
                  </ul>
                  <UL>
                    <li
                      class="py-1 my-2 text-gray-800 px-4 font-bold hover:text-yellow-600"
                    >
                      CONTESTS
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 px-4 font-bold hover:text-yellow-600"
                    >
                      PROFILE
                    </li>
                  </UL>
                  <UL>
                    <li
                      class="py-1 my-2 text-gray-800 px-4 font-bold hover:text-yellow-600"
                    >
                      USER RANKING
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 px-4 font-bold hover:text-yellow-600"
                    >
                      FORUM
                    </li>

                    <li
                      class="py-1 my-2 text-gray-800 px-4 font-bold hover:text-yellow-600"
                    >
                      <a href="">I WANT TO SEE</a>
                    </li>
                    <li
                      class="py-1 my-2 text-gray-800 px-4 font-bold hover:text-yellow-600"
                    >
                      <a href=""> Setting</a>
                    </li>

                  </UL>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderSubMenu from './HeaderSubMenu.vue';
</script>

<style scoped>
.poster {
  width: 500px !important;
}
</style>
