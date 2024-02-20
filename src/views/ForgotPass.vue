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
                        <input type="text" id="large-input" class="bg-neutral-700 shadow-lg text-white text-sm block w-96 p-2.5" placeholder="john.doe@snhu.edu" :disabled="emailSubmitted" required>
                        <button @click="emailSubmitted = true" class="mt-4 w-96 h-8 bg-neutral-700 rounded-sm hover:bg-red-800">Submit</button>
                    </div>

                    <div class="text-start mx-40 mt-8">
                        <label for="large_input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your 4-digit code</label>
                        <input type="text" id="large-input" class="bg-neutral-700 shadow-lg text-white text-sm block w-96 p-2.5" placeholder="1234" required>
                        <button @click="showModal = true" class="mt-4 w-96 h-8 bg-neutral-700 rounded-sm hover:bg-red-800">Submit</button>
                    </div>
                    
                </div>
            </div>
            <div id="app">
                <div v-if="showModal" class="fixed inset-0 bg-neutral-800 bg-opacity-50 flex justify-center items-center">
                <div class="w-1/3 bg-neutral-700 p-4 rounded-lg">
                    <h2 class="text-lg font-bold text-center">Change Password</h2>
                    <div class="flex flex-col items-center mt-5">
                        <div class="w-full my-1">
                            <label for="new-pass" class="block mb-2">New Password:</label>
                            <input id="new-pass" class="w-full h-8 bg-neutral-600 rounded-sm mb-1 p-2.5" type="password" @focus="showRequirements = true" @blur="showRequirements = false">
                            <div v-if="showRequirements" class="text-xs text-gray-400 mt-2">
                                <p>Password requirements:</p>
                        <ul class="list-disc pl-5">
                            <li>At least 10 characters</li>
                            <li>At least one lowercase character</li>
                            <li>At least one special character, e.g., ! @ # ?</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-full mt-5">
                <label for="confirm-pass" class="block mb-2">Confirm Password:</label>
                <input id="confirm-pass" class="w-full h-8 bg-neutral-600 rounded-sm p-2.5" type="password">
                <button @click="showModal = false" class="mt-6 bg-neutral-800 hover:bg-red-900 px-4 py-2 rounded">Close</button>
            </div>
        </div>
    </div>
</div>

        </ion-content>
    </ion-page>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  components: {
    IonPage,
    IonContent
  },
  setup() {
    const emailSubmitted = ref(false);
    const showModal = ref(false);
    const showRequirements = ref(false);
    

    return {
      emailSubmitted,
      showModal,
      showRequirements
    };
  }
});
</script>
