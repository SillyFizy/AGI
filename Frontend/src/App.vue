<template>
  <NavBar></NavBar>
  <router-view v-slot="{Component,route}">
    <transition name="slide-fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component"/>
      </div>
    </transition>
  </router-view>
</template>

<script setup>
import Button from "@/components/Button.vue";
import NavBar from "@/components/NavBar.vue";

</script>
