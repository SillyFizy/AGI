<template>
  <div class="relative">
    <div class="absolute top-1/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <img class="w-150 h-100" src="../assets/heroBG.png" alt="">
    </div>
    <div class="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white p-40">
      <h1 class="text-4xl font-bold">Welcome to <span class="bg-gradient-to-r from-[#6976fb] to-[#d2868c] text-transparent bg-clip-text">AIVA</span></h1>
      <p class="text-lg">Engage in seamless and intuitive conversations with our cutting-edge chatbot that brings voice interaction to the forefront. Say goodbye to typing and hello to effortless communication. Our advanced technology allows you to effortlessly converse with the bot using your own voice.</p>
    </div>
    <div class="absolute top-2/3 left-1/3 ">
      <router-link :to="{name:'SignUp'}">
        <Button>
          Get Started Now
        </Button>
      </router-link>
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg"
         class="transition duration-300 ease-in-out delay-150">

      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#6976fb"></stop>
          <stop offset="95%" stop-color="#d2868c"></stop>
        </linearGradient>
      </defs>
      <path
          d="M 0,700 C 0,700 0,233 0,233 C 99.11961722488039,243.14354066985646 198.23923444976077,253.2870813397129 306,253 C 413.7607655502392,252.7129186602871 530.1626794258374,241.99521531100476 619,245 C 707.8373205741626,248.00478468899524 769.11004784689,264.732057416268 861,266 C 952.88995215311,267.267942583732 1075.397129186603,253.07655502392342 1177,245 C 1278.602870813397,236.92344497607658 1359.3014354066986,234.96172248803828 1440,233 C 1440,233 1440,700 1440,700 Z"
          stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53"
          class="transition-all duration-300 ease-in-out delay-150 path-0"></path>

      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#6976fb"></stop>
          <stop offset="95%" stop-color="#d2868c"></stop>
        </linearGradient>
      </defs>
      <path
          d="M 0,700 C 0,700 0,466 0,466 C 105.34928229665073,463.33014354066984 210.69856459330146,460.66028708133973 308,465 C 405.30143540669854,469.33971291866027 494.555023923445,480.68899521531097 581,495 C 667.444976076555,509.31100478468903 751.0813397129186,526.5837320574162 841,504 C 930.9186602870814,481.4162679425837 1027.1196172248804,418.97607655502395 1128,406 C 1228.8803827751196,393.02392344497605 1334.44019138756,429.511961722488 1440,466 C 1440,466 1440,700 1440,700 Z"
          stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
    </svg>
  </div>
  <section>
    <div class="h-[100vh] bg-gradient-to-r from-[#6976fb] to-[#d2868c]">
      <div class="flex flex-col w-full justify-center items-center">
        <h1 class="text-4xl text-white">What makes <span class="bg-gradient-to-r from-[#c5849a] via-[#ba82a6] to-[#7978ea] text-transparent bg-clip-text">AIVA</span> so special?</h1>
        <div class="flex flex-col justify-center items-center text-white">
          <div class="w-1/2 mx-auto rounded-md shadow-md p-4">
            <div class="grid grid-cols-2 gap-x-32 gap-y-6">
              <div class="bg-gradient-to-tr from-[#7377f1] to-[#ca8595] rounded-md shadow-md p-4 flex flex-col justify-center items-center hover:scale-105 transition ease-in-out">
                <!-- Card 1 -->
                <img src="../assets/voice-icon.svg" alt="">
                <h2 class="text-xl font-bold">Voice Interactivity</h2>
                <p class="text-center">Engage in Conversations with Your Voice!
                  Say goodbye to typing and hello to effortless communication with our chatbot's voice interactivity feature. Simply speak your queries or commands, and our chatbot understands and responds in real-time, providing a natural and seamless conversation experience.</p>
              </div>
              <div class="bg-gradient-to-tr from-[#7377f1] to-[#ca8595] rounded-md shadow-md p-4 flex flex-col justify-center items-center hover:scale-105 transition ease-in-out">
                <img class="mb-2" src="../assets/intelligence-icon.svg" alt="">
                <!-- Card 2 -->
                <h2 class="text-xl font-bold">Intelligent and Knowledgeable</h2>
                <p class="text-center">
                  Our chatbot is powered by advanced AI algorithms, allowing it to provide intelligent and knowledgeable assistance. From answering questions to offering personalized recommendations, our chatbot is equipped to understand your needs and deliver accurate and helpful responses.</p>
              </div>
              <div class="bg-gradient-to-tr from-[#7377f1] to-[#ca8595] rounded-md shadow-md p-4 flex flex-col justify-center items-center hover:scale-105 transition ease-in-out">
                <img src="../assets/interactive-icon.svg" alt="">
                <!-- Card 3 -->
                <h2 class="text-xl font-bold">Understands You Better</h2>
                <p class="text-center">Our chatbot employs state-of-the-art natural language processing (NLP) techniques to understand your messages and respond appropriately. It can decipher context, sentiment, and nuances in your queries, ensuring more accurate and contextually relevant interactions.</p>
              </div>
              <div class="bg-gradient-to-tr from-[#7377f1] to-[#ca8595] rounded-md shadow-md p-4 flex flex-col justify-center items-center hover:scale-105 transition ease-in-out">
                <img src="../assets/preferences-icon.svg" alt="">
                <!-- Card 4 -->
                <h2 class="mt-[20px] text-xl font-bold">Tailored Just for You</h2>
                <p class="text-center">Experience a chatbot that adapts to your preferences and needs. Our chatbot learns from your interactions, gaining insights to provide a personalized user experience. From remembering your preferences to offering tailored recommendations, it's like having a virtual assistant crafted just for you..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import Button from "@/components/Button.vue";
</script>

<style>
.path-0 {
  animation: pathAnim-0 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes pathAnim-0 {
  0% {
    d: path("M 0,700 C 0,700 0,233 0,233 C 99.11961722488039,243.14354066985646 198.23923444976077,253.2870813397129 306,253 C 413.7607655502392,252.7129186602871 530.1626794258374,241.99521531100476 619,245 C 707.8373205741626,248.00478468899524 769.11004784689,264.732057416268 861,266 C 952.88995215311,267.267942583732 1075.397129186603,253.07655502392342 1177,245 C 1278.602870813397,236.92344497607658 1359.3014354066986,234.96172248803828 1440,233 C 1440,233 1440,700 1440,700 Z");
  }
  25% {
    d: path("M 0,700 C 0,700 0,233 0,233 C 78.02870813397129,218.93301435406698 156.05741626794259,204.866028708134 256,212 C 355.9425837320574,219.133971291866 477.799043062201,247.46889952153109 581,234 C 684.200956937799,220.53110047846891 768.7464114832537,165.25837320574163 874,183 C 979.2535885167463,200.74162679425837 1105.2153110047848,291.4976076555024 1203,312 C 1300.7846889952152,332.5023923444976 1370.3923444976076,282.7511961722488 1440,233 C 1440,233 1440,700 1440,700 Z");
  }
  50% {
    d: path("M 0,700 C 0,700 0,233 0,233 C 76.83253588516749,220.3492822966507 153.66507177033498,207.69856459330143 249,229 C 344.334928229665,250.30143540669857 458.17224880382764,305.555023923445 565,304 C 671.8277511961724,302.444976076555 771.6459330143542,244.08133971291866 878,243 C 984.3540669856458,241.91866028708134 1097.244019138756,298.11961722488036 1192,306 C 1286.755980861244,313.88038277511964 1363.377990430622,273.4401913875598 1440,233 C 1440,233 1440,700 1440,700 Z");
  }
  75% {
    d: path("M 0,700 C 0,700 0,233 0,233 C 74.08612440191388,176.38755980861242 148.17224880382776,119.77511961722487 256,149 C 363.82775119617224,178.22488038277513 505.3971291866028,293.2870813397129 619,309 C 732.6028708133972,324.7129186602871 818.2392344497606,241.0765550239234 888,223 C 957.7607655502394,204.9234449760766 1011.6459330143541,252.40669856459334 1101,265 C 1190.3540669856459,277.59330143540666 1315.1770334928228,255.29665071770333 1440,233 C 1440,233 1440,700 1440,700 Z");
  }
  100% {
    d: path("M 0,700 C 0,700 0,233 0,233 C 99.11961722488039,243.14354066985646 198.23923444976077,253.2870813397129 306,253 C 413.7607655502392,252.7129186602871 530.1626794258374,241.99521531100476 619,245 C 707.8373205741626,248.00478468899524 769.11004784689,264.732057416268 861,266 C 952.88995215311,267.267942583732 1075.397129186603,253.07655502392342 1177,245 C 1278.602870813397,236.92344497607658 1359.3014354066986,234.96172248803828 1440,233 C 1440,233 1440,700 1440,700 Z");
  }
}
</style>
<style>
.path-1 {
  animation: pathAnim-1 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes pathAnim-1 {
  0% {
    d: path("M 0,700 C 0,700 0,466 0,466 C 105.34928229665073,463.33014354066984 210.69856459330146,460.66028708133973 308,465 C 405.30143540669854,469.33971291866027 494.555023923445,480.68899521531097 581,495 C 667.444976076555,509.31100478468903 751.0813397129186,526.5837320574162 841,504 C 930.9186602870814,481.4162679425837 1027.1196172248804,418.97607655502395 1128,406 C 1228.8803827751196,393.02392344497605 1334.44019138756,429.511961722488 1440,466 C 1440,466 1440,700 1440,700 Z");
  }
  25% {
    d: path("M 0,700 C 0,700 0,466 0,466 C 112.94736842105263,473.98086124401914 225.89473684210526,481.9617224880382 301,453 C 376.10526315789474,424.0382775119618 413.36842105263156,358.13397129186603 522,383 C 630.6315789473684,407.86602870813397 810.6315789473684,523.5023923444976 915,539 C 1019.3684210526316,554.4976076555024 1048.1052631578946,469.8564593301436 1123,441 C 1197.8947368421054,412.1435406698564 1318.9473684210527,439.0717703349282 1440,466 C 1440,466 1440,700 1440,700 Z");
  }
  50% {
    d: path("M 0,700 C 0,700 0,466 0,466 C 106.89952153110048,447.9521531100479 213.79904306220095,429.90430622009575 318,415 C 422.20095693779905,400.09569377990425 523.7033492822967,388.334928229665 621,384 C 718.2966507177033,379.665071770335 811.3875598086124,382.755980861244 903,400 C 994.6124401913876,417.244019138756 1084.7464114832537,448.64114832535887 1174,462 C 1263.2535885167463,475.35885167464113 1351.6267942583731,470.67942583732054 1440,466 C 1440,466 1440,700 1440,700 Z");
  }
  75% {
    d: path("M 0,700 C 0,700 0,466 0,466 C 81.98086124401917,470.1244019138756 163.96172248803833,474.2488038277512 264,481 C 364.03827751196167,487.7511961722488 482.1339712918659,497.1291866028708 592,492 C 701.8660287081341,486.8708133971292 803.5023923444977,467.2344497607656 891,457 C 978.4976076555023,446.7655502392344 1051.8564593301435,445.933014354067 1141,449 C 1230.1435406698565,452.066985645933 1335.0717703349283,459.03349282296654 1440,466 C 1440,466 1440,700 1440,700 Z");
  }
  100% {
    d: path("M 0,700 C 0,700 0,466 0,466 C 105.34928229665073,463.33014354066984 210.69856459330146,460.66028708133973 308,465 C 405.30143540669854,469.33971291866027 494.555023923445,480.68899521531097 581,495 C 667.444976076555,509.31100478468903 751.0813397129186,526.5837320574162 841,504 C 930.9186602870814,481.4162679425837 1027.1196172248804,418.97607655502395 1128,406 C 1228.8803827751196,393.02392344497605 1334.44019138756,429.511961722488 1440,466 C 1440,466 1440,700 1440,700 Z");
  }
}
</style>