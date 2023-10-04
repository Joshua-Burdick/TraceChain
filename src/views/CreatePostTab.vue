<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true">
      <div class="flex h-full py-1 px-1">
        <div class="flex flex-col md:w-1/3"></div>
        <div class="flex flex-col md:w-1/3 w-full">
          <div class="flex flex-row md:h-1/6"></div>
          <div class="flex flex-row md:h-2/3 h-5/6">
            <div class="px-1 py-1 w-full rounded-md border-2 border-zinc-600 bg-zinc-800">
              <textarea
                class="focus:outline-none text-white text-md font-semibold w-full h-full resize-none"
                maxlength="500"
                v-model="postContent"
                placeholder="Write something..."
              ></textarea>
            </div>
          </div>
          <div class="flex flex-row">
            <div class="flex flex-col w-full"></div>
            <button class="mt-1 rounded-full w-20 h-10 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 block">Post</button>
          </div>
        </div>
        <div class="flex flex-col md:w-1/3 w-full md:pl-10">
          <div class="flex flex-row md:h-1/6"></div>
          <div class="text-2xl font-bold">Sources</div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { ref, watch } from 'vue';

const postContent = ref('');

</script>
