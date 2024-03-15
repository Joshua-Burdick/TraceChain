<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="text-align: center;">TraceChain</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="login-container">
        <ion-img class="logo" src="/TraceChain.svg" alt="Logo"></ion-img>
        <ion-card class="login-card">
          <ion-card-header>
            <ion-card-title class="sign-in-text">Sign In</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-label position="floating">Username</ion-label>
                <ion-input v-model="username" name="username" type="text" @keyup.enter="loginUser"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Password</ion-label>
                <ion-input v-model="password" name="password" type="password" @keyup.enter="loginUser"></ion-input>
              </ion-item>
              </ion-list>
              <div class="flex items-center mt-2">
                <input id="remember-checkbox" type="checkbox" v-model="rememberMe" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="remember-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember Me</label>
              </div>
              <button @click="loginUser" class="my-2 p-2 w-full h-auto text-semibold text-lg rounded-sm" :class="{
                'bg-[#cf3c4f]': !loading,
                'bg-gray-500': loading
              }">{{ loading ? "Signin In..." : "Sign In" }}</button>
              <router-link to="/forgotpass">
              <button @click="loginUser" class="bg-[#cf3c4f] my-2 p-2 w-full h-auto text-semibold text-lg rounded-sm">Forgot Password</button>
              </router-link>
              <router-link to="/createAccount">
                <button class="bg-neutral-500 my-2 p-2 w-full h-auto text-semibold text-lg rounded-sm">Not a Member? <br> Join Now</button>
              </router-link>
          </ion-card-content>
        </ion-card>
      </div>
      <ion-alert class="showAlert" v-model="showAlert" :header="'Error'" :subHeader="'Sign-in failed'"
        :message="alertMessage" :buttons="[{ text: 'OK', handler: () => showAlert = false }]" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonAlert, IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonImg, IonTitle, IonToolbar, IonHeader } from '@ionic/vue';
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

const showErrorAlert = (message: string) => {
  console.log('Error alert triggered:', message);
  alert('Enter a valid Username or Password, or register below ');
};

const loginUser = () => {
  loading.value = true;
  const userlogin = {
    username: username.value, // Input field for username or email
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
      console.log('Sign-in error:', error.response.data.message);
      showErrorAlert('Incorrect Username/Password');
    });

  loading.value = false;
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
