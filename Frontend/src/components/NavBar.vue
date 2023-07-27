<template>
  <header id="navbar" class="flex bg-white bg-opacity-10 p-4 w-full mb-8 shadow-l sticky top-0 z-50 transition-all ease-out duration-1000">
    <div class="w-10/12 flex gap-2 transition-all">
      <router-link :to="{name: 'Home'}">
        <div class="flex cursor-pointer">
          <img src="../assets/logo.svg" alt="" class="h-12 w-50">
        </div>
      </router-link>
    </div>
    <div class="w-2/12 ">
      <nav class="font-bold text-2xl mt-1">
        <ul class="flex gap-5">
          <router-link :to="{name: 'Home'}">
            <li class="font-bold hover:text-slate-500 hover:transition-all text-lg cursor-pointer"><a>Home</a></li>
          </router-link>
          <li class="font-bold hover:text-slate-500 hover:transition-all text-lg cursor-pointer"><a>About</a></li>
          <li class="font-bold hover:text-slate-500 hover:transition-all text-lg cursor-pointer"
              @click="isSignIn = true"><a>Sign in</a></li>
          <li class="font-bold hover:text-slate-500 hover:transition-all text-lg cursor-pointer"
              @click="isSignUp = true"><a>Sign up</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <transition name="slide-fade">
    <Modal :is-open="isSignIn" @close="isSignIn = false">
      <template #header>
        <h1 class="flex justify-center font-semibold text-xl">Sign up</h1>
      </template>
      <template #body>
        <div class="flex flex-col items-center">
          <div class="font-segoe-ui max-w-xs relative">
            <input placeholder="email"
                   class="text-base py-2 px-3 outline-none border-2 border-gray-200 bg-transparent rounded-full w-full transition-all duration-300 focus:border-[#3bacdc]">
          </div>
          <div class="font-segoe-ui my-4 max-w-xs relative">
            <input placeholder="password"
                   class="text-base py-2 px-3 outline-none border-2 border-gray-200 bg-transparent rounded-full w-full transition-all duration-300 focus:border-[#3bacdc]">
          </div>
        </div>
      </template>
      <template #button>
        <h1 class="">Sign in</h1>
      </template>
    </Modal>
  </transition>
  <transition name="slide-fade" mode="in-out">
    <Modal :is-open="isSignUp" @close="isSignUp = false">
      <template #header>
        <h1 class="flex justify-center font-semibold text-xl">Sign up</h1>
      </template>
      <template #body>
        <div class="flex flex-col items-center">
          <div class="font-segoe-ui my-2 max-w-xs relative">
            <input placeholder="Full Name"
                   class="text-base py-2 px-3 outline-none border-2 border-gray-200 bg-transparent rounded-full w-full transition-all duration-300 focus:border-[#3bacdc]">
          </div>
          <div class="font-segoe-ui max-w-xs relative">
            <input placeholder="email"
                   class="text-base py-2 px-3 outline-none border-2 border-gray-200 bg-transparent rounded-full w-full transition-all duration-300 focus:border-[#3bacdc]">
          </div>
          <div class="font-segoe-ui my-2 max-w-xs relative">
            <input placeholder="password"
                   class="text-base py-2 px-3 outline-none border-2 border-gray-200 bg-transparent rounded-full w-full transition-all duration-300 focus:border-[#3bacdc]">
          </div>
          <div class="font-segoe-ui mb-2 max-w-xs relative">
            <input placeholder="confirm password"
                   class="text-base py-2 px-3 outline-none border-2 border-gray-200 bg-transparent rounded-full w-full transition-all duration-300 focus:border-[#3bacdc]">
          </div>
        </div>
      </template>
      <template #button>
        <h1 class="">Sign up</h1>
      </template>
    </Modal>
  </transition>
</template>

<script setup>
import Modal from "@/components/Modal.vue";
import {ref} from "vue";

const isSignIn = ref(false)
const isSignUp = ref(false)

function changeBG() {
  let navbar = document.getElementById('navbar')
  let scrollY = window.scrollY;
  if (scrollY > 225) {
    navbar.classList.add('bgColor')
  } else {
    navbar.classList.remove('bgColor')
  }
}

window.addEventListener('scroll', changeBG);
</script>
<style>
.bgColor {
  background-color: white;
  color: black;
  transition: all 1s;
}
</style>