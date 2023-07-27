<template>
  <div class="flex w-full flex-col h-[70vh] justify-center items-center">
    <div
        class="flex flex-col items-center w-1/8 bg-gradient-to-r from-[#f3a1b7] to-[#8b8cf9] shadow-2xl p-6 rounded-2xl">
      <h2 v-if="errorMessage" class="text-3xl text-red-600 h-[5vh] p-4">{{ errorMessage }}</h2>
      <h1 class="text-3xl h-[10vh] p-4">Sign Up</h1>
      <div class="group h-[8vh]">
        <input id="username" v-model="form.username" autofocus required="" @keyup.enter="submitBotName" type="text"
               class="input">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Username</label>
      </div>
      <div class="group h-[8vh] ">
        <input id="password" v-model="form.password" autofocus required="" @keyup.enter="submitBotName" type="password"
               class="input">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Password</label>
      </div>
      <h1 class="text-3xl h-[8vh] p-4">Give your <span
          class="bg-gradient-to-r from-[#6976fb] to-[#d2868c] text-transparent bg-clip-text">AIVA</span> a name</h1>
      <div class="group m-auto">
        <input id="aginame" v-model="form.aginame" autofocus required="" @keyup.enter="submitBotName" type="text"
               class="input">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Name</label>
      </div>
      <Button class="mt-7" @click="signUp">Sign Up</Button>
      <p class="m-2">Already have an account?
        <router-link :to="{name: 'SignIn'}" class="text-blue-600">Sign in</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import http from "@/helpers/http";
import {useRouter} from "vue-router";

const errorMessage = ref('')
import Swal from "sweetalert2";

const router = useRouter()
import 'animate.css';
import Button from "@/components/Button.vue";

const form = ref({
  username: "",
  password: "",
  aginame: "",
})
const welcomeMessage = ref()

const signUp = async () => {
  errorMessage.value = null
  for (let key in form.value) {
    if (form.value[key] === '') {
      await Swal.fire({
        icon: 'warning',
        title: `Please fill all the fields`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      return
    }
  }
  try {
    const {data} = await http.post('/auth/signup', {
      ...form.value
    })
    localStorage.setItem("accessToken", data.token)
    localStorage.setItem("agiName", JSON.stringify(data.agi.aginame))
    localStorage.setItem("user", JSON.stringify(data.user.username))
    localStorage.setItem("welcomeMessage", JSON.stringify(data.welcomeMessage.value))
    welcomeMessage.value = JSON.parse(localStorage.getItem("welcomeMessage"))
    await router.push({name: 'Chat'})
    await http.post('/conversation', {
      aginame: form.value.aginame
    })
  } catch (e) {
    errorMessage.value = e.response.data.message
  }
}

const emit = defineEmits(['submit'])
const trimmedBotNameValue = computed(() => {
  if (aginame.value == null) {
    return '';
  } else {
    return aginame.value.trim();
  }
})
const submitBotName = () => {
  if (trimmedBotNameValue.value === '') {
    Swal.fire({
      icon: 'warning',
      title: 'Please enter a name',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    aginame.value = '';
    return
  }
  emit('submit', {
    botName: trimmedBotNameValue.value
  })
  router.push('/chat')
  aginame.value = '';
}

</script>
<style>
.group {
  position: relative;
}

.input {
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 200px;
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;
}

.input:focus {
  outline: none;
}

label {
  color: #515151;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.input:focus ~ label, .input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.96);
}

.bar {
  position: relative;
  display: block;
  width: 200px;
}

.bar:before, .bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264AE;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

.input:focus ~ .bar:before, .input:focus ~ .bar:after {
  width: 50%;
}

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

.input:focus ~ .highlight {
  animation: inputHighlighter 0.3s ease;
}

@keyframes inputHighlighter {
  from {
    background: #5264AE;
  }

  to {
    width: 0;
    background: transparent;
  }
}
</style>