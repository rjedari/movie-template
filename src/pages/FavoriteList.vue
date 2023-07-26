<template>
     <main class="mt-10">
        <section class="container flex justify-center">
            <div class="flex "> <a class="px-4 py-2  hover:text-white hover:bg-yellow-400" href="./favorites.html">on
                    tv</a><a class="px-4 py-2  text-black  bg-yellow-400" href="./favoritList.html">movies</a></div>

        </section>
        <section class="container flex justify-center  flex-col my-20 shadow-2xl">
            <div class="p-5 text-2xl text-gray-800 font-bold">
                <p>I want to see</p>

            </div>
            <div class="relative w-full  mx-auto max-md:max-w-md">
                <div class="border-gray-300  text-gray-400 border px-10 rounded-xl relative bg-white items-center hover:text-yellow-500 w-1/3 mx-auto my-5 py-2 flex justify-between z-50">filter
        <i class=" fa fa-chevron-down"></i>
                </div>
                <div class="border-b absolute h-1 top-10 border-gray-300 mx-auto z-10 w-full"></div>

            </div>
            <div class="my-10 mx-5  flex justify-between">
                <div
                    class="border w-44 p-2 items-center py-3 hover:text-yellow-500 flex justify-between text-gray-500 ">
                    Date: latest <i class="fa fa-chevron-down text-yellow-500"></i></div>
                <div class="flex  text-gray-600 border-gray-300 ">
                    <div><i class="fa fa-bars-progress transform rotate-90 borde p-2 border hover:text-yellow-500"></i>
                        <i class="fa fa-bars border p-2 hover:text-yellow-500"></i>
                    </div>
                </div>

            </div>
            <div class="flex max-md:flex-col  justify-between m-4 border">
                <div class="flex">
                    <div class="overflow-hidden">
                        <div class="w-32 h-44 object-cover   transition-transform duration-500 transform hover:scale-110"
                           >
                            <img class="object-cover -z-1" src="../assets/image/1.a.jpg" alt="">
                        </div>
                    </div>

                    <div class="flex  flex-col justify-between ">
                        <div class="flex flex-col px-4 "><a class="text-lg" href="">Matrix</a> <span>The
                                Matrix1999</span>
                        </div>
                        <div>
                            <div class="flex- flex-col px-4"> <i class="fa fa-star text-yellow-500"></i> 7.6

                                <span class="text-xs text-gray-500"> community ratings</span>
                            </div>
                            <span class="text-gray-400 px-4">obsada: <a class="text-gray-700" href="">Keanu
                                    ReevesCarrie-Anne Moss</a></span>
                        </div>
                    </div>

                </div>
                <div class="border  flex-flex-col">
                    <div class="max-md:hidden block">
                        <div class="flex p-3  items-center text-gray-700 "><img class="h-8 w-8  rounded-full"
                                src="../assets/image/female.svg" alt=""> <span class="px-4">I saw
                                my rating:
                            </span>
                            <i class=" fa fa-heart hover:text-yellow-500 px-2"></i>
                        </div>
                    </div>
                    <div class="p-3 flex justify-center "><a href=""><i
                                class="fa fa-star hover:text-yellow-500 px-2"></i></a>
                        <a href=""><i class="fa fa-star hover:text-yellow-500 px-2"></i></a>
                        <a href=""><i class="fa fa-star hover:text-yellow-500 px-2"></i></a>
                        <a href=""><i class="fa fa-star hover:text-yellow-500 px-2"></i></a>
                        <a href=""><i class="fa fa-star hover:text-yellow-500 px-2"></i></a>
                    </div>
                    <div class="flex gap-3 justify-center p-3">
                        <div class="border px-8 py-3 flex  items-center"> <i
                                class="fa fa-eye hover:text-yellow-500 px-2"></i> i want to see</div>
                        <div class="border px-6  items-center justify-center flex "><i
                                class="fa fa-times hover:text-yellow-500"></i></div>
                    </div>
                </div>
            </div>
            <div class="flex max-md:flex-col justify-between m-4 border">
                <div class="flex">
                    <div class="overflow-hidden">
                        <div class="w-32 h-44 object-cover   transition-transform duration-500 transform hover:scale-110">
                            <img class="object-cover -z-1" src="../assets/image/2.a.jpg" alt="">

                        </div>
                    </div>
                    <div class="flex  flex-col justify-between ">
                        <div class="flex flex-col px-4 "><a class="text-lg" href="">Matrix</a> <span>The
                                Matrix1999</span>
                        </div>
                        <div>
                            <div class="flex- flex-col px-4"> <i class="fa fa-star text-yellow-500"></i> 7.6

                                <span class="text-xs text-gray-500"> community ratings</span>
                            </div>
                            <span class="text-gray-400 px-4">obsada: <a class="text-gray-700" href="">Keanu
                                    ReevesCarrie-Anne Moss</a></span>
                        </div>
                    </div>

                </div>
                <div class="border  flex-flex-col">
                    <div class="max-md:hidden block">
                        <div class="flex p-3  items-center text-gray-700 "><img class="h-8 w-8  rounded-full"
                                src="../assets/image/female.svg" alt=""> <span class="px-4">I saw
                                my rating:
                            </span>
                            <i class=" fa fa-heart hover:text-yellow-500 px-2"></i>
                        </div>
                    </div>

                    <div class="p-3 flex justify-center "><a href=""><i
                                class="fa fa-star hover:text-yellow-500 px-2"></i></a>
                        <a href=""><i class="fa fa-star hover:text-yellow-500 px-2"></i></a>
                        <a href=""><i class="fa fa-star hover:text-yellow-500 px-2"></i></a>
                        <a href=""><i class="fa fa-star hover:text-yellow-500 px-2"></i></a>
                        <a href=""><i class="fa fa-star hover:text-yellow-500 px-2"></i></a>
                    </div>
                    <div class="flex gap-3 justify-center p-3">
                        <div class="border px-8 py-3 flex  items-center"> <i
                                class="fa fa-eye hover:text-yellow-500 px-2"></i> i want to see</div>
                        <div class="border px-6  items-center justify-center flex "><i
                                class="fa fa-times hover:text-yellow-500"></i></div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>

</script>

<style>

</style>