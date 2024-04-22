<template>
      <ion-page class="bg-neutral-900">
        <div class="flex flex-col items-center justify-center min-h-[75vh]">
            <!-- Adjust the margin here by changing mt-5 to a smaller value or removing it -->
            <div class="flex items-center justify-center mt-24 mr-12">
              <ion-img class="w-32 mt-5" src="/TraceChain.svg" alt="Logo"></ion-img>
              <span class="text-5xl font-bold -ml-2 text-white">TraceChain</span>
            </div>
          <ion-card class="bg-neutral-900 bg-gradient-to-br from-neutral-900 to-neutral-700 text-white rounded-xl w-full max-w-lg m-auto p-5">
            <ion-card-header class="flex flex-col items-center justify-center mb-2 mt-2">
              <ion-card-title class="text-2xl text-white">Reset Password</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div v-if="!emailSubmitted">
                <label for="email" class="text-sm font-bold text-white">Email Address:</label>
                <input id="email" type="email" v-model="email" class="bg-neutral-700 w-full border rounded-sm h-12 mb-2 p-2.5 mt-2" placeholder="john.doe@snhu.edu">
                <button @click="submitEmail" class="bg-[#922525] my-2 p-2 w-full rounded-sm text-lg font-semibold">Submit</button>
              </div>
              <div v-if="emailSubmitted">
                <p class="text-neutral-400 text-center mb-3">You will receive an email with a 4-digit code. Please enter it below.</p>
                <label for="code" class="text-sm font-bold text-white">Enter your 4-digit code:</label>
                <input id="code" type="text" v-model="code" class="bg-neutral-700 w-full border rounded-sm h-12 mb-2 p-2.5 mt-2" placeholder="1234">
                <button @click="verifyCode" class="bg-[#922525] my-2 p-2 w-full rounded-sm text-lg font-semibold">Verify</button>
              </div>
            </ion-card-content>
          </ion-card>
        </div>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/vue';
  
  const email = ref('');
  const code = ref('');
  const emailSubmitted = ref(false);
  
  const isValidEmail = (email) => {
    // Simple Regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const submitEmail = () => {
    if (!isValidEmail(email.value)) {
      // Show an error message or handle invalid email
      alert("Please enter a valid email address.");
      return;
    }
    // Only set emailSubmitted to true if the email is valid
    emailSubmitted.value = true;
  };
  
  const verifyCode = () => {
    // Logic to verify the code
    // Continue with password reset process or error handling
  };
  </script>
  
  