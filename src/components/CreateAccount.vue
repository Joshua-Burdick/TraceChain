<template>
  <ion-page class="w-full">
    <ion-content>
      <div class="flex flex-col items-center justify-center">
        <div class="flex items-center justify-center mt-5 mr-12">
          <ion-img class="w-32 mt-5" src="/TraceChain.svg" alt="Logo"></ion-img> <!-- width adjusted with Tailwind -->
          <span class="text-5xl font-bold -ml-2">TraceChain</span>
        </div>
        <ion-card class="bg-gradient-to-br from-neutral-900 to-neutral-700 text-white rounded-xl w-full max-w-lg m-auto p-5"> <!-- Tailwind gradient background -->
          <ion-card-header class="flex flex-col items-center justify-center my-4">
            <ion-card-title class="text-2xl text-white font-bold">Register</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <div class="flex flex-col space-y-2">
              <!--Email-->
              <label for="email" class="text-sm font-bold">Email:</label>
              <input 
                id="email" 
                type="email" 
                v-model="email" 
                placeholder="jane.doe@gmail.com"
                class="bg-neutral-700 border border-gray-600 rounded h-12 p-2.5 text-white placeholder-neutral-500" 
                required/>
              <!--Username-->
              <label for="username" class="text-sm font-bold">Username:</label>
              <input 
                id="username"
                type="text" 
                v-model="username" 
                placeholder="JaneDoe"
                class="bg-neutral-700 border border-gray-600 rounded h-12 p-2.5 text-white placeholder-neutral-500" 
                required/>
              <!--Display Name-->
              <label for="displayName" class="text-sm font-bold">Display Name:</label>
              <input 
                id="displayName" 
                type="text" 
                v-model="displayName" 
                placeholder="Jane Doe"
                class="bg-neutral-700 border border-gray-600 rounded h-12 p-2.5 text-white placeholder-neutral-500" 
                required/>
                <!--Password-->
              <label for="password" class="text-sm font-bold">Password:</label>
              <div class="relative">
                <input 
                  id="password" 
                  :type="showPassword ? 'text' : 'password'" 
                  v-model="password"
                  class="bg-neutral-700 border border-gray-600 rounded h-12 p-2.5 text-white mb-3 w-full pr-10" 
                  required
                  placeholder="Password"/>
                <button 
                  type="button" 
                  class="absolute inset-y-0 right-0 pr-3 flex items-center mb-3"
                  @click="togglePasswordVisibility">
                  <ion-icon :icon="showPassword ? eyeOutline : eyeOffOutline" class="text-white text-lg"></ion-icon>
                </button>
              </div>
            </div>
            <button @click="registerUser" class="mt-4 bg-[#922525] text-white font-semibold py-2 px-4 rounded w-full">Create Account</button>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/vue';
  import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
  import axios from 'axios';
  import router from '@/router';
 
  const username = ref('');
  const displayName = ref('');
  const email = ref('');
  const password = ref('');
  const showPassword = ref(false);

  const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

  const registerUser = () => {

    if (!username.value || !displayName.value || !email.value || !password.value) {
      alert('Please fill in all fields.'); // Show an alert or handle this more gracefully in your UI
      return;
    }
  
  const userRegister = {
    username: username.value,
    displayName: displayName.value,
    email: email.value,
    password: password.value,
  };

  console.log("user created: ", userRegister.email);

  axios.post('register', userRegister)
    .then((res) => {
      console.log(res);
      console.log("User Submitted: ", userRegister);
      router.push('/login');
    })
    .catch((error) => {
      console.log('the following error occured when trying to post a new deck', error);
    })

};
  
</script>