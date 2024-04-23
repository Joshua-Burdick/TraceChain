<template>
    <ion-page>
        <ion-content>
            <div class="flex flex-col">
              <!--Home + menu buttons-->
                <div class="flex justify-between items-center p-4 bg-neutral-800 text-white">
                    <button @click="toggleMenu" class="flex items-center justify-center">
                      <ion-icon :icon="menuOutline" class="text-2xl"></ion-icon>
                    </button>
                    <button @click="$router.push('/feed')" class="flex items-center justify-center">
                      <ion-icon :icon="homeOutline" class="text-2xl"></ion-icon>
                    </button>
                  </div>
                <!-- Sidebar -->
                <div :class="{ 'translate-x-0': showMenu, '-translate-x-full': !showMenu }"
                     class="w-64 bg-neutral-800 text-white h-screen fixed z-20 transform transition-transform duration-500 ease-in-out"
                >
                  <div class="flex justify-end">
                    <button @click="toggleMenu" class="flex items-center justify-center p-4">
                      <ion-icon :icon="closeOutline" class="text-2xl"></ion-icon>
                    </button>
                  </div>
                  <div class="font-bold text-2xl pl-12 mb-10 pt-40">Settings</div>
                  <ul class="space-y-10 justify-start ml-7">
                    <li>
                      <button @click="$router.push('/settings'); toggleMenu()" class="w-full flex items-center text-lg px-5 py-2">
                        <ion-icon aria-hidden="true" :icon="personCircleOutline" class="text-lg mr-2"/>
                        Account
                      </button>
                    </li>
                    <li>
                      <button @click="$router.push('/settings/privacy'); toggleMenu()" class="w-full flex items-center text-lg px-5 py-2">
                        <ion-icon aria-hidden="true" :icon="lockClosedOutline" class="text-lg mr-2"/>
                        Privacy
                      </button>
                    </li>
                    <li>
                      <button @click="logout" class="w-full flex items-center text-md px-5 py-2">
                        <ion-icon aria-hidden="true" :icon="logOutOutline" class="text-lg mr-2"/>
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            <!--Main-->
            <div class="flex flex-col items-center p-4 bg-neutral-900">
                <!-- Large Card -->
                <div class="bg-neutral-800 border-[7px] text-white border-x-stone-700 border-y-stone-600 rounded-lg shadow-xl w-full h-[300px] lg:w-4/5 p-6 mt-6 mb-6">
                  <h1 style="font-weight: 800; font-size: 1.8em;"
                  class="pt-4 pb-6">Privacy Policy for TraceChain
                  </h1>
                  <p style="color:darkgray" class="pb-6"><b>Last Updated:</b> December 7, 2023</p>
                  <p>Welcome to TraceChain, the social media platform where truth and citation matter.</p>
                  <p class="mt-1">This Privacy Policy describes how we collect, use, process, 
                  and disclose your information,</p>
                  <p style="margin-top: 1vh;">including personal information, in conjunction with your access to and use of the TraceChain platform.</p> 
                </div>
                <div class="flex flex-row justify-center gap-4 w-full lg:w-4/5">
                <!-- Medium Card 1 -->
                <div class="bg-neutral-800 border-[7px] border-x-stone-700 text-white border-y-stone-600 rounded-lg shadow-xl w-full h-[500px] p-4 divide-y px-15 divide-x-stone-700 mb-6">
                  <div>
                    <h1 style="font-weight: 900;" class="text-white text-2xl pt-8">Information We Collect</h1>
                    <h1 style="font-weight: 700; font-size: 1em; color: darkgray;" class="pt-5">What You Provide to Us:</h1>
                    <p style="font-size: 0.9em;" class="py-8"><b>Account Information: </b>When you sign up for a TraceChain account, we require
                    certain information such as your <i>username</i>, <i>password</i>, and <i>email address</i>.</p>
                  </div>
                  <p style="font-size: 0.9em;" class="py-10"><b>Profile Information: </b>You may choose to provide additional information as part 
                  of your TraceChain profile, such as a profile picture, bio, and other details.</p>
                  <p style="font-size: 0.9em;" class="py-10"><b>Content Information: </b> We collect the content you post on TraceChain, including
                  your posts, likes, and the citations you provide.</p>
                </div>
                <!-- Medium Card 2 -->
                <div class="bg-neutral-800 border-[7px] border-x-stone-700 text-white border-y-stone-600 rounded-lg shadow-xl w-1/2  p-4 mb-6">
                    <h1 class="text-2xl font-black pt-7">Sharing Policy</h1>
                    <h2 style="color: darkgray" class="text-base pt-5 font-bold">We Do Not:</h2>
                    <ul class="list-disc px-8 pt-5">
                        <li class="text-sm">Share your personal information with third parties except as described in this Privacy Policy.</li>
                    </ul>
                    <h2 style="color: darkgray" class="text-base pt-5 font-bold">We May:</h2>
                    <ul class="list-disc px-8 pt-5">
                        <li class="text-sm">Share your information with third-party service providers that help us to operate or improve services.</li>
                        <li class="text-sm pt-5">Disclose your information to comply with legal requirements, enforce our policies, respond to legal requests, protect anyone's rights, or reduce our legal risks.</li>
                    </ul>
                </div>
                </div>
                <div class="bg-neutral-800 border-[7px] border-x-stone-700 text-white border-y-stone-600 rounded-lg shadow-xl w-full h-[600px] lg:w-4/5 p-6 mb-6">
                    <h1 style="font-weight: 800; font-size: 1.8em;
                    " class="pt-3 pb-6">Contact Us</h1>
                    <h1 class="font-base text-lg pb-3">Have Questions or Feedback?</h1>
                    <p>Your insights and inquiries are invaluable to us. Whether it's a question about how to use</p> 
                    <p>TraceChain, feedback on your experience, or suggestions for new features, we're all ears.</p>
                    <h1 class="font-base text-lg pb-3 pt-5">Need Help or Support?</h1>
                    <p>Encountering an issue or need guidance on the platform? Our dedicated support team is here </p>
                    <p>to assist you with any technical difficulties, account concerns, or general queries about TraceChain.</p>
                    <h1 class="font-base text-lg pb-3 pt-5">Reach Out to Us:</h1>
                    <p class="pb-2"><b>Email: </b>customerservice@TraceChain.com</p>
                    <p class="pb-2"><b>Phone: </b>(603) 123-4567</p>
                    <p><b>Address: </b>2500 N River Rd</p>
                    <p class="pb-9">Manchester, New Hampshire 03106</p>
                    <p>Thank you for choosing TraceChain as your go-to platform for insightful and cited content.</p>
                    <p>Let's continue to create a knowledgeable and connected world, together.</p>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { lockClosedOutline, personCircleOutline, sunnyOutline, logOutOutline, homeOutline, menuOutline, closeOutline } from 'ionicons/icons';
import {useRouter} from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const showMenu = ref(false);

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
}

const logout = () => {
  // Clear user authentication state
  sessionStorage.removeItem('user_token');
  sessionStorage.removeItem('userId');
  localStorage.removeItem('user_token');
  localStorage.removeItem('userId');
  router.push({path: '/login'});
};

</script>

