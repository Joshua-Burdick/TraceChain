<template>
    <div
      class="flex flex-row h-full w-full rounded-lg text-slate-100 justify-center cursor-pointer shadow-lg shadow-black"
    >
      <div class="flex w-full rounded-lg bg-stone-700 block p-3 sm:text-sm md:text-lg lg:text-lg ion-text-wrap">
        <div class="flex flex-col items-start w-full">
            <div>
              <span class="text-md hover:underline">{{ community.name }}</span>
            </div>
          <div class="flex flex-row justify-center align-center text-slate-200">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import { IonIcon } from '@ionic/vue';
  import { chatbubbleEllipsesOutline } from 'ionicons/icons';
  
  const props = defineProps({
    community: {
      type: Object,
      required: true
    }
  });
  </script>
  