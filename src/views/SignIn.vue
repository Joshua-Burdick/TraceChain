<template>
  <ion-page class="bg-neutral-900">
      <div class="flex flex-col items-center justify-center min-h-[75vh]">
        <div class="flex items-center justify-center mt-5 mr-12">
          <ion-img class="w-32 mt-5" src="/TraceChain.svg" alt="Logo"></ion-img>
          <span class="text-5xl font-bold -ml-2 text-white">TraceChain</span>
        </div>
        <ion-card class="bg-neutral-900 bg-gradient-to-br from-neutral-900 to-neutral-700 text-white rounded-xl w-full max-w-lg m-auto p-5">
          <ion-card-header class="flex flex-col items-center justify-center mb-2 mt-2">
            <ion-card-title class="text-2xl text-white">Sign In</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <div>
              <label for="username" class="text-sm font-bold text-white">Username:</label>
              <input id="username" type="text" v-model="username" class="bg-neutral-700 w-full border rounded-sm h-12 mb-2 p-2.5">
              <label for="password" class="text-sm font-bold text-white">Password:</label>
              <div class="relative">
                <input 
                  id="password" 
                  :type="showPassword ? 'text' : 'password'" 
                  v-model="password"
                  class="bg-neutral-700 border border-gray-600 rounded h-12 p-2.5 text-white mb-3 w-full pr-10" 
                  required
                  @keyup.enter="loginUser"/>
                <button 
                  type="button" 
                  class="absolute inset-y-0 right-0 pr-3 flex items-center mb-3"
                  @click="togglePasswordVisibility">
                  <ion-icon :icon="showPassword ? eyeOutline : eyeOffOutline" class="text-white text-lg"></ion-icon>
                </button>
              </div>
            </div>
            <div class="flex items-center mb-5">
              <input id="remember-checkbox" type="checkbox" v-model="rememberMe" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="remember-checkbox" class="ml-2 text-sm font-medium text-white">Remember Me</label>
            </div>
            <button @click="loginUser" class="my-2 p-2 w-full rounded-sm text-lg font-semibold mx-auto block" :class="{
              'bg-[#922525]': !loading,
              'bg-gray-500': loading
            }">{{ loading ? "Signing In..." : "Sign In" }}</button>
            <router-link to="/forgotpass" class="block text-center">
              <button class="bg-[#922525] my-2 p-2 w-full rounded-sm text-lg font-semibold">Forgot Password</button>
            </router-link>
            <router-link to="/createAccount" class="block text-center">
              <button class="bg-neutral-600 my-2 p-2 w-full rounded-sm text-lg font-semibold">Not a Member?</button>
            </router-link>
          </ion-card-content>
        </ion-card>
      </div>
      <ion-alert
        class="showAlert"
        v-model="showAlert"
        :header="'Error'"
        :subHeader="'Sign-in failed'"
        :message="alertMessage"
        :buttons="[{ text: 'OK', handler: () => showAlert = false }]"
      />
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonAlert, IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/vue';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
const router = useRouter();

const username = ref('');
const password = ref('');
const showAlert = ref(false);
const alertMessage = ref<string>('');
const loading = ref(false);
const rememberMe = ref(false);
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const showErrorAlert = (message: string) => {
  console.log('Error alert triggered:', message);
  alert('Enter a valid username and password, or register below ');
};

const loginUser = () => {
  if (username.value === '' || password.value === '') {
    showErrorAlert('Please enter a valid username and password');
    return;
  }
  loading.value = true;

  const userlogin = {
    username: username.value,
    password: password.value,
  };

  console.log("loginUser is actually executing this!! :D ");
  console.log(userlogin);

  axios.post('/login', userlogin)
    .then((res) => {
      console.log('login reposnse:', res);
      const token = res.data.token;
      console.log('remember me:', rememberMe.value);

      if (rememberMe.value) {
        localStorage.setItem('user_token', token);
        localStorage.setItem('userId', res.data.user._id);
      }
      sessionStorage.setItem('user_token', token);
      sessionStorage.setItem('userId', res.data.user._id);
      router.push({ path: '/feed'});
    })
    .catch((error) => {
      loading.value = false;
      showErrorAlert('Incorrect Username/Password');
    })
    .finally(() => {
      loading.value = false;
    });
};

const checkAuthentication = () => {
  const token = sessionStorage.getItem('user_token') || localStorage.getItem('user_token');
  const userId = sessionStorage.getItem('userId') || localStorage.getItem('userId');
  console.log('Retreived token:', token);
  console.log('Retreived userId:', userId);
  if (token && userId) {
    router.push({ path: '/feed'});
  } else {
    console.log('no token found. user is not authenticated');
  }
};

onMounted(checkAuthentication);

</script>

<style scoped>
.sign-in-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;

}

.logo {
  width: 150px;
  height: 150px;
  margin-top: 20px;
}

.showAlert {
  color: #000;
}

.login-card {
  background: radial-gradient(circle, #050505, #0d0d0d, #1a1a1a, #2a2a2a, #3b3b3b);
color: #fff; 
border-radius: 15px;
width: 100%;
width: 120%; /* Adjust the width as needed */
max-width: 600px; /* Set a maximum width if necessary */
margin: auto;
}

.join-now-button {
  color: dark;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>