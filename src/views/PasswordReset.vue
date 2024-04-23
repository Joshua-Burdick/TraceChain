<template>
    <ion-page class="bg-neutral-900">
      <div class="flex flex-col items-center justify-center min-h-screen">
        <ion-card class="bg-neutral-900 bg-gradient-to-br from-neutral-900 to-neutral-700 text-white rounded-xl w-full max-w-md m-auto p-5">
          <ion-card-header class="flex flex-col items-center justify-center mb-4">
            <ion-card-title class="text-2xl text-white">Enter New Password</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <input type="password" v-model="newPassword" placeholder="New Password" class="bg-neutral-700 w-full border rounded-sm h-12 mb-2 p-2.5">
            <button @click="resetPassword" class="bg-[#922525] my-2 p-2 w-full rounded-sm text-lg font-semibold">Reset Password</button>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-page>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';

const route = useRoute();
const token = route.params.token;
const newPassword = ref('');

const resetPassword = async () => {
  if (!newPassword.value) {
    alert("Please enter a new password.");
    return;
  }
};
</script>