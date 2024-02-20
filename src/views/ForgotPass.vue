<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title class="text-center">TraceChain</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="flex justify-center items-center h-screen">
                <div class="bg-neutral-800 h-3/4 w-1/2 mb-12 text-center">
                    <h6 class="font-extrabold text-3xl text-center mt-10 mb-3">Reset Password</h6>
                    <p class="text-neutral-400 text-center">Please enter the email registered to your accouunt
                        and click submit.</p> 
                    <p class="text-neutral-400 mb-3 text-center">You will receive an email with a 4-digit code.</p>

                    <div class="text-start mx-40 mt-8">
                        <label for="large_input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                        <input type="text" id="large-input" class="bg-neutral-700 shadow-lg text-white text-sm block w-96 p-2.5" placeholder="john.doe@snhu.edu" required>
                        <button class="mt-4 w-96 h-8 bg-neutral-700 rounded-md hover:bg-red-800">Submit</button>
                    </div>

                    <div class="text-start mx-40 mt-8">
                        <label for="large_input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your 4-digit code</label>
                        <input type="text" id="large-input" class="bg-neutral-700 shadow-lg text-white text-sm block w-96 p-2.5" placeholder="1234" required>
                        <button class="mt-4 w-96 h-8 bg-neutral-700 rounded-md hover:bg-red-800">Submit</button>
                    </div>
                    
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>



<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
</script>