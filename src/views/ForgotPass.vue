<template>
  <ion-page class="bg-neutral-900">
    <div class="flex flex-col items-center justify-center min-h-[75vh]">
      <div class="flex items-center justify-center mt-24 mr-12">
        <ion-img class="w-32 mt-5" src="/TraceChain.svg" alt="Logo"></ion-img>
        <span class="text-5xl font-bold -ml-2 text-white">TraceChain</span>
      </div>
      <ion-card class="bg-neutral-900 bg-gradient-to-br from-neutral-900 to-neutral-700 text-white rounded-xl w-full max-w-lg m-auto p-5">
        <ion-card-header class="flex flex-col items-center justify-center mb-2 mt-2">
          <ion-card-title class="text-2xl text-white">Reset Password</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <label for="email" class="text-sm font-bold text-white">Email Address:</label>
          <input id="email" type="email" v-model="email" class="bg-neutral-700 w-full border rounded-sm h-12 mb-2 p-2.5 mt-2" placeholder="john.doe@snhu.edu">
          <button @click="submitEmail" class="bg-[#922525] my-2 p-2 w-full rounded-sm text-lg font-semibold">Submit</button>
        </ion-card-content>
      </ion-card>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/vue';

const email = ref('');

const submitEmail = async () => {
};
</script>
