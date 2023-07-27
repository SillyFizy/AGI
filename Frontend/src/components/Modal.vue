<template>
  <div v-if="isOpen" @click.self="closeModal"
       class="flex justify-center items-center w-screen h-screen bg-black bg-opacity-30 top-0 fixed z-[1000]">
    <div class="bg-white w-1/5 flex flex-col justify-center items-center p-2 rounded-2xl">
      <div class="mb-3">
        <slot name="header">

        </slot>
      </div>
      <div class="w-full">
        <slot name="body">

        </slot>
      </div>
      <div class="flex justify-center">
        <slot name="actions">
          <Button class="my-2">
            <slot name="button"></slot>
          </Button>
        </slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/Button.vue";

const props = defineProps({
  isOpen: Boolean
})
const emit = defineEmits(['close'])
const closeModal = () => {
  emit('close');
}
</script>

