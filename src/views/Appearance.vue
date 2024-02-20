<template>
    <ion-page>
        <ion-header>
                <ion-toolbar>
                    <ion-title></ion-title>
                    <ion-buttons slot="start">
                        <ion-menu-button></ion-menu-button>
                    </ion-buttons>
                    <ion-buttons slot="end">
                        <ion-button @click="$router.push('/feed')">
                            <ion-icon slot="icon-only" :icon="homeOutline"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" class="bg-[#141313]">
            <div class="flex flex-col lg:w-full h-full mr-10">
                <ComingSoon name="Appearance Settings" />
            </div>
        </ion-content>
        <ion-menu content-id="main-content" side="start">
            <ion-content>
                <ion-list lines="none" class="h-full">
                    <ion-menu-toggle auto-hide="false">
                        <h1 class="font-bold text-2xl ml-10 pt-[190px] mb-3">Settings</h1>
                        <ion-item @click="$router.push('/settings')" class="flex items-center p-3 hover:bg-neutral-700
                        rounded"
                        style="--background: transparent; --background-hover: bg-neutral-700; --ripple-color: transparent;">
                            <ion-icon slot="start" :icon="personCircleOutline" class="text-lg mr-3 ml-4"></ion-icon>
                            <ion-label>Account</ion-label>
                        </ion-item>
                        <ion-item @click="$router.push('/settings/appearance')" class="flex items-center p-3 hover:bg-neutral-700 rounded"
                        style="--background: transparent; --background-hover: bg-neutral-700; --ripple-color: transparent;">
                            <ion-icon slot="start" :icon="sunnyOutline" class="text-lg mr-3 ml-4"></ion-icon>
                            <ion-label>Appearance</ion-label>
                        </ion-item>
                        <ion-item @click="$router.push('/settings/privacy')" class="flex items-center p-3 hover:bg-neutral-700 rounded" 
                        style="--background: transparent; --background-hover: bg-neutral-700; --ripple-color: transparent;">
                            <ion-icon slot="start" :icon="lockClosedOutline" class="text-lg mr-3 ml-4"></ion-icon>
                            <ion-label>Privacy</ion-label>
                        </ion-item>
                        <ion-item @click="logout" class="flex items-center p-3 hover:bg-neutral-700 rounded pb-"
                        style="--background: transparent; --background-hover: bg-neutral-700; --ripple-color: transparent;">
                            <ion-icon slot="start" :icon="logOutOutline" class="text-lg mr-3 ml-4"></ion-icon>
                            <ion-label>Log Out</ion-label>
                        </ion-item>
                        <div class="pt-20"></div>
                        <div class="pt-20"></div>
                        <div class="pt-5"></div>
                    </ion-menu-toggle>
                </ion-list>
            </ion-content>
        </ion-menu>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonTitle, IonHeader, IonToolbar, IonContent, IonMenu } from '@ionic/vue';
import { lockClosedOutline, personCircleOutline, sunnyOutline, logOutOutline, homeOutline } from 'ionicons/icons';
import ComingSoon from '../components/ComingSoon.vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const highlightItem = (event: MouseEvent) => {
(event.target as HTMLElement).classList.add('item-highlight');
};

const unhighlightItem = (event: MouseEvent) => {
(event.target as HTMLElement).classList.remove('item-highlight');
};

const logout = () => {
  // Clear user authentication state
  sessionStorage.removeItem('user_token');
  sessionStorage.removeItem('userId');
  router.push({path: '/login'});
};

</script>
