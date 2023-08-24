<template>
  <div class="flex flex-col w-full h-full items-center">
    <div
        class="flex items-end justify-center h-[85vh] w-[60vw] bg-white bg-opacity-40 rounded-2xl px-2 overflow-hidden">
      <div class="flex flex-col h-full w-full justify-start items-center">
        <div class="flex items-center justify-center h-[90%] w-[93%] bg-white bg-opacity-30 rounded-2xl mt-2">
          <div ref="top" class="flex flex-col h-full w-full overflow-y-scroll">
            <div class="flex-1  w-full">
              <div v-for="message in messages" :key="message.id" class="p-2">
                <div class="flex w-full justify-start"
                     :class="{'justify-end':message.isUser}">
                  <div
                      class="flex flex-col bg-green-500 text-white rounded-lg p-2 max-w-2xl bg-opacity-50 overflow-y-auto"
                      :class="{'bg-gradient-to-r from-[#f3a1b7] to-[#848cf8]':!message.isUser}">
                    {{ message.text }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex h-1/8 items-center w-[55%] bg-white p-2 rounded-xl shadow-2xl absolute bottom-12 left-2/2">
        <textarea
            class="p-1 resize-none bg-transparent border-none w-full overflow-y-auto  min-h-[1rem] max-h-28 outline-none"
            placeholder="Talk to me anything" rows="1" @input="handelInput" @keyup.enter.exact="sendMessage" autofocus
            v-model="messageText"></textarea>
          <div class="flex justify-end w-[46px] ">
            <svg class="transition-all duration-200 rounded-md px-[2px] me-1" @click="sendMessage" :class="bgColor"
                 width="34px"
                 height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                    d="M9.51002 4.23001L18.07 8.51001C21.91 10.43 21.91 13.57 18.07 15.49L9.51002 19.77C3.75002 22.65 1.40002 20.29 4.28002 14.54L5.15002 12.81C5.37002 12.37 5.37002 11.64 5.15002 11.2L4.28002 9.46001C1.40002 3.71001 3.76002 1.35001 9.51002 4.23001Z"
                    :stroke="strokeColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M5.44 12H10.84" :stroke="strokeColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"></path>
              </g>
            </svg>
          </div>
          <div class="flex justify-end w-[42px]" @click="toggleVoice">
            <svg class="ease-in-out duration-200 rounded-md  me-1 cursor-pointer" :class="voiceClass"
                 width="64px"
                 height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                    d="M12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8V13C6 16.31 8.69 19 12 19Z"
                    :stroke="voiceStroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11" :stroke="voiceStroke"
                      stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M9.11011 7.47993C10.8901 6.82993 12.8301 6.82993 14.6101 7.47993" :stroke="voiceStroke"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10.03 10.4799C11.23 10.1499 12.5 10.1499 13.7 10.4799" :stroke="voiceStroke"
                      stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import {computed, onMounted, onUpdated, ref} from "vue";
import Swal from "sweetalert2";
import http from "@/helpers/http";


const inputValue = ref('')
const messageText = ref('')
const agiName = ref('')
const welcomeMessage = ref('')
const top = ref(null)
const toggleVoiceClass = ref(false)
const isRecording = ref(false);
const user = ref('')
import speech from "@/AIModels/TTS.js";

const Recognition = window.webkitSpeechRecognition;

const messages = ref([])

const handelInput = (event) => {
  const textarea = event.target;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
  inputValue.value = event.target.value.trim().charAt(0)
};
const strokeColor = computed(() => {
  return messageText.value ? '#ffffff' : '#838cf8'
})
const bgColor = computed(() => {
  return messageText.value ? 'bg-[#878cf8] hover:cursor-pointer hover:scale-105' : ''
})
const voiceClass = computed(() => {
  return toggleVoiceClass.value ? 'bg-[#888cf8] scale-150 pulsating-circle' : ''
})
const voiceStroke = computed(() => {
  return toggleVoiceClass.value ? '#ffffff' : '#888cf8'
})
const sendMessage = async (event) => {
  const textarea = event.target;
  textarea.style.height = 'auto';
  textarea.style.height = '32px';
  const trimmedMessage = messageText.value.trim();
  if (trimmedMessage === '' || trimmedMessage === '\n') {
    await Swal.fire({
      icon: 'warning',
      title: 'Please enter a message',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    messageText.value = null;
    return
  } else {
    if (isRecording.value) {
      sr.stop();
      toggleVoiceClass.value = false
    }
    messages.value.push({
      id: messages.value.length + 1,
      sender: user.value,
      text: messageText.value,
      isUser: true
    })
    const text = messageText.value;
    messageText.value = null;
    scrollToBottom();
    const {data} = await http.post('/chat', {
      "text": text
    })
    await speech(data.value)
    messages.value.push({
      id: messages.value.length + 1,
      sender: agiName.value,
      text: data.value,
      isUser: false
    })
  }
}

function scrollToBottom() {
  if (top.value) {
    top.value.scrollTop = top.value.scrollHeight;
  }
}

const fetchConversation = async () => {
  try {
    const {data} = await http.get('/conversation')
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

const sr = new Recognition(); //speech recognition
onMounted(() => {
  fetchConversation()
  welcomeMessage.value = JSON.parse(localStorage.getItem("welcomeMessage"))
  user.value = JSON.parse(localStorage.getItem("user"))
  agiName.value = JSON.parse(localStorage.getItem("agiName"))
  messages.value = [
    {id: 1, sender: agiName.value, text: welcomeMessage.value, isUser: false},
  ]
  speech(welcomeMessage.value)
  sr.continuous = true;
  sr.interimResults = true;

  sr.onstart = () => {
    isRecording.value = true;
  }
  sr.onend = () => {
    isRecording.value = false;
  }
  sr.onresult = (event) => {
    messageText.value = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript).join('');
  }
})
const toggleVoice = () => {
  if (isRecording.value) {
    sr.stop();
    toggleVoiceClass.value = false
  } else {
    sr.start();
    toggleVoiceClass.value = true
  }
}


onUpdated(() => {
  scrollToBottom();
})
</script>

<style>
@keyframes pulsate {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.7);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.pulsating-circle {
  padding: 1px;
  border-radius: 100%;
  background-color: #888cf8;
  animation: pulsate 2s infinite;
  transform-origin: center;
}
</style>