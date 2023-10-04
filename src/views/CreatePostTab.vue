<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="flex h-full py-1 px-1">
        <div class="flex flex-col lg:w-1/3"></div>
        <div class="flex flex-col lg:w-1/3 w-full">
          <div class="flex flex-row lg:h-1/6"></div>
          <div class="flex flex-row lg:h-2/3 h-5/6">
            <div class="px-1 py-1 w-full rounded-lg border-2 border-zinc-600 bg-zinc-800">
              <textarea
                class="focus:outline-none text-white text-lg font-semibold w-full h-full resize-none"
                maxlength="500"
                v-model="postContent"
                placeholder="Write something..."
              ></textarea>
            </div>
          </div>
          <div class="flex flex-row">
            <div class="flex flex-col lg:w-full"></div>
            <button class="mt-3 rounded-full lg:w-20 w-full h-10 bg-orange-500 hover:bg-orange-600 active:bg-orange-700">Post</button>
          </div>
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
