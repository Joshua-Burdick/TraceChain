<template>
  <ion-page class="flex flex-row">
    <div class="flex min-[1000px]:flex-row min-[1000px]:w-1/4 h-full">
      <ion-tab-bar class="flex flex-col w-full h-full bg-stone-800">
        <div>
          <ion-label class="text-4xl text-white" position="floating">
            <ion-icon aria-hidden="true" src="/favicon.png" class="bg-red-600"/>
            TraceChain
          </ion-label>
        </div>

        <button @click.stop="$router.push({ path: '/feed' })" class="m-3 p-3 rounded-full hover:bg-zinc-700">
          <ion-label class="text-4xl" position="floating">
            <ion-icon aria-hidden="true" :icon="homeOutline" />
            Feed
          </ion-label>
        </button>

        <button @click.stop="$router.push({ path: '/profile' })" class="m-3 p-3 rounded-full hover:bg-zinc-700">
          <ion-label class="text-4xl" position="floating">
            <ion-icon aria-hidden="true" :icon="personCircleOutline" />
            Profile
          </ion-label>
        </button>

        <div class="flex flex-col h-[100px]"></div>
        
        <button @click.stop="$router.push({ path: '/create_post' })" class="mt-3 p-3 rounded-full h-12 w-[175px] text-white text-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700">
          + Create Post
        </button>

        <div class="flex flex-col h-1/3"></div>

        <button @click.stop="" class="m-3 p-3 rounded-full hover:bg-zinc-700">
          <ion-label class="text-3xl" position="floating">
            <ion-icon aria-hidden="true" :icon="settingsOutline" />
            Settings
          </ion-label>
        </button>
      </ion-tab-bar>
    </div>

    <ion-tabs class="flex">
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom" class="min-[1000px]:h-0">
        <ion-tab-button tab="feed" href="/feed">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
        </ion-tab-button>

        <ion-tab-button tab="create-post" href="/create_post">
          <ion-icon aria-hidden="true" :icon="addCircleOutline" />
        </ion-tab-button>

        <ion-tab-button tab="account" href="/profile">
          <ion-icon aria-hidden="true" :icon="personCircleOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import router from '@/router';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { addCircleOutline, homeOutline, personCircleOutline, settingsOutline } from 'ionicons/icons';
</script>