<template>
  <header
    class="flex flex-col bg-black relative"
    style="background-image: url(./assets/image/pooster.jpg)"
  >
   
    <div class="container flex flex-col">
      <div class="text-sm text-white flex justify-end md:mt-20 mt-10">
        <div class="p-3 mx-2 hover:text-yellow-500">
          <span> <i class="far fa-image px-2"></i> </span> select a image
        </div>
        <div class="p-3 mx-2 hover:text-yellow-500">
          <span> <i class="fas fa-cog px-2"></i> </span> setting
        </div>
      </div>
      <div class="flex justify-center flex-col items-center">
        <div
          class="flex group relative items-center justify-center w-48 border-2 border-white rounded-full h-48"
        >
          <img
            class="w-44 h-44 m-3 rounded-full"
            src="../assets/image/profile.svg"
            alt=""
          />

          <div
            class="text-lg hidden text-white bg-black w-44 h-44 duration-700 items-center rounded-full opacity-70 group-hover:block top-1.5 absolute"
          >
            <div class="flex flex-col items-center p-5 justify-center">
              <i class="fas fa-camera py-2 text-xl"></i>
              <div>edit photo</div>
            </div>
          </div>
        </div>
        <div class="text-2xl py-10 text-white">raziyeh_jed</div>
      </div>
    </div>
    <div class="container">
      <div
        class="flex border-b-2 md:overflow-visible overflow-x-auto md:justify-center justify-start"
      >
        <div>
          <div class="mx-6 w-28">
            <a href="" class="text-white border-b-2 py-2 border-yellow-700"
              >About Me</a
            >
          </div>
        </div>
        <div>
          <div class="mx-6 w-28">
            <a
              href=""
              class="hover:text-white hover:border-b-2 hover:border-yellow-700 text-gray-300 py-2"
            >
              My Favorites
            </a>
          </div>
        </div>

        <div>
          <div class="mx-6 w-28">
            <a
              href=""
              class="hover:text-white hover:border-b-2 hover:border-yellow-700 text-gray-300 py-2"
            >
              I want to see
            </a>
          </div>
        </div>
        <div>
          <div class="mx-6 w-28">
            <a
              href=""
              class="hover:text-white hover:border-b-2 hover:border-yellow-700 text-gray-300 py-2"
            >
              Friends
            </a>
          </div>
        </div>
        <div>
          <div class="mx-6 w-28">
            <a
              href=""
              class="hover:text-white hover:border-b-2 hover:border-yellow-700 text-gray-300 py-2"
            >
              Materials
            </a>
          </div>
        </div>
        <div>
          <div class="mx-6 w-28">
            <a
              href=""
              class="hover:text-white hover:border-b-2 hover:border-yellow-700 text-gray-300 py-2"
            >
              Contests
            </a>
          </div>
        </div>

        <div class="md:hidden block">
          <div class="mx-6 w-28">
            <a
              href=""
              class="hover:text-white hover:border-b-2 hover:border-yellow-700 text-gray-300 py-2"
            >
              watch list
            </a>
          </div>
        </div>
        <div class="md:hidden block">
          <div class="mx-6 w-28">
            <a
              href=""
              class="hover:text-white hover:border-b-2 hover:border-yellow-700 text-gray-300 py-2"
            >
              stars
            </a>
          </div>
        </div>
        <div class="md:hidden block">
          <div class="mx-6 w-28">
            <a
              href=""
              class="hover:text-white hover:border-b-2 hover:border-yellow-700 text-gray-300 py-2"
            >
              games
            </a>
          </div>
        </div>
        <div>
          <div class="group relative mx-6 w-28">
            <span
              href=""
              class="hover:text-white hover:border-b-2 flex items-baseline hover:border-yellow-700 text-gray-300 py-2"
            >
              Other
              <i
                class="fa fa-chevron-down md:block hidden hover:text-white text-gray-300 text-xs"
              ></i>
            </span>
            <div
              class="absolute hidden bg-black opacity-80 drawer group-hover:block"
            >
              <ul>
                <li class="text-gray-400 hover:text-white px-4 py-2 text-sm">
                  games
                </li>
                <li class="text-gray-400 hover:text-white px-4 py-2 text-sm">
                  stars
                </li>
                <li class="text-gray-400 hover:text-white px-4 py-2 text-sm">
                  watchlist
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main class="mt-10">
    <section class="container shadow-2xl">
      <div class="flex items-center flex-col">
        <div
          class="flex justify-center outline-dashed outline-gray-400 rounded-md outline-2 outline-offset-2 border border-gray-400 w-5/6 text-gray-600"
        >
          <span class="text-gray-400 py-6">
            <i class="fas fa-pen text-yellow-500 text-xs px-2 mx-2"></i>
            Click to tell others about yourself
          </span>
        </div>
        <div class="my-16 text-gray-400 flex items-center">
          <i class="fas fa-clock text-yellow-500 text-sm px-2 mx-2"></i>
          On filmweb from May 20, 2023
        </div>
      </div>
      <div class="flex items-center mt-20 py-5 shadow-inner flex-col">
        <div class="text-2xl py-5 hover:text-yellow-500">MOVIES</div>
        <div class="flex py-5 w-full justify-between">
          <div class="text-gray-400 hover:text-gray-600 mx-5">
            <a href="">
              <i
                class="fas fa-star hover:text-gray-600 text-gray-400 text-sm px-4 mx-2"
              ></i>

              You haven't rated any videos yet</a
            >
          </div>
          <div class="text-gray-400 hover:text-gray-600 mx-5">
            <a href="">
              <i
                class="fas fa-eye hover:text-gray-600 text-gray-400 text-sm px-4 mx-2"
              ></i>

              Your "want to see" list is empty</a
            >
          </div>
          <div class="text-gray-400 hover:text-gray-600 mx-5">
            <a href="">
              <i
                class="fas fa-heart hover:text-gray-600 text-gray-400 text-sm px-4 mx-2"
              ></i>

              Your favorites list is empty</a
            >
          </div>
        </div>
      </div>
      <div class="flex items-center my-20 py-5 shadow-inner flex-col">
        <div class="text-2xl py-5 hover:text-yellow-500">TV SERIES</div>
        <div class="flex py-5 w-full justify-between">
          <div class="text-gray-400 hover:text-gray-600 mx-5">
            <a href="">
              <i
                class="fas fa-star hover:text-gray-600 text-gray-400 text-sm px-4 mx-2"
              ></i>

              You haven't rated any videos yet</a
            >
          </div>
          <div class="text-gray-400 hover:text-gray-600 mx-5">
            <a href="">
              <i
                class="fas fa-eye hover:text-gray-600 text-gray-400 text-sm px-4 mx-2"
              ></i>

              Your "want to see" list is empty</a
            >
          </div>
          <div class="text-gray-400 hover:text-gray-600 mx-5">
            <a href="">
              <i
                class="fas fa-heart hover:text-gray-600 text-gray-400 text-sm px-4 mx-2"
              ></i>

              Your favorites list is empty</a
            >
          </div>
        </div>
      </div>
      <div class="flex items-center my-20 py-5 shadow-inner flex-col">
        <div class="text-2xl py-5 hover:text-yellow-500">CINEMA PEOPLE</div>
        <div class="flex py-5 w-full justify-between">
          <div class="text-gray-400 hover:text-gray-600 mx-5">
            <a href="">
              <i
                class="fas fa-star hover:text-gray-600 text-gray-400 text-sm px-4 mx-2"
              ></i>

              You haven't rated any videos yet</a
            >
          </div>
          <div class="text-gray-400 hover:text-gray-600 mx-5">
            <a href="">
              <i
                class="fas fa-eye hover:text-gray-600 text-gray-400 text-sm px-4 mx-2"
              ></i>

              Your "want to see" list is empty</a
            >
          </div>
          <div class="text-gray-400 hover:text-gray-600 mx-5">
            <a href="">
              <i
                class="fas fa-heart hover:text-gray-600 text-gray-400 text-sm px-4 mx-2"
              ></i>

              Your favorites list is empty</a
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style></style>
