<template>
    <ion-page>
      <ion-content>
        <div class="flex flex-col">
            <!--Home + Menu buttons-->
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
          class="w-64 bg-neutral-800 text-white h-screen fixed z-20 transform transition-transform duration-300"
            >
            <div class="font-bold text-2xl pl-12 mb-10 pt-40">Settings</div>
            <ul class="space-y-10 justify-start ml-7">
                <li>
                <button @click="$router.push('/settings')" class="w-full flex items-center text-lg px-5 py-2">
                    <ion-icon aria-hidden="true" :icon="personCircleOutline" class="text-lg mr-2"/>
                    Account
                </button>
                </li>
                <li>
                <button @click="$router.push('/settings/appearance')" class="w-full flex items-center text-lg px-5 py-2">
                    <ion-icon aria-hidden="true" :icon="sunnyOutline" class="text-lg mr-2"/>
                    Appearance
                </button>
                </li>
                <li>
                <button @click="$router.push('/settings/privacy')" class="w-full flex items-center text-lg px-5 py-2">
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
        <div class="min-h-screen bg-neutral-900 flex flex-col items-center justify-center">
          <div class="w-11/12 md:w-5/6 h-[32rem] bg-neutral-800 rounded-sm shadow-xl z-10 lg:flex-row -mt-10 space-x-0 lg:space-x-10">
            <div class="text-2xl p-8 font-bold">Appearance Settings
              <p class="text-xs pt-1 text-stone-400">Edit your theme, colors, and font</p>
            </div>
            <div class="flex flex-col space-y-5">
              <h2 class="text-xl font-bold">Themes:</h2>
              <button class="w-1/4 h-12 bg-neutral-300 rounded-lg text-black font-bold flex items-center justify-center">
                <ion-icon aria-hidden="true" :icon="sunnyOutline" class="text-xl mr-2"/>
                Light Mode
              </button>
              <button class="w-1/4 h-12 bg-neutral-900 rounded-lg font-bold flex items-center justify-center">
                <ion-icon aria-hidden="true" :icon="moonOutline" class="text-lg mr-2"/>
                Dark Mode
              </button>
            </div>    
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { lockClosedOutline, personCircleOutline, sunnyOutline, logOutOutline, homeOutline, moonOutline, menuOutline } from 'ionicons/icons';
import {useRouter} from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const showMenu = ref(false);

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
}

const closeMenu = () => {
    if (showMenu.value) {
        showMenu.value = false;
    }
}

const logout = () => {
  // Clear user authentication state
  sessionStorage.removeItem('user_token');
  sessionStorage.removeItem('userId');
  router.push({path: '/login'});
};
</script>
