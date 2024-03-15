<template>
    <ion-page class="flex w-full">
      <ion-content class="ion-padding">
        <div class="createAccount-container">
          <ion-img class="logo" src="/TraceChain.svg" alt="Logo"></ion-img>
          <ion-card class="createAccount-card">
            <ion-card-header>
              <ion-card-title class="create-account-text" >Create Account</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-list>
                <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input  v-model="email" name="email" type="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Username</ion-label>
            <ion-input  v-model="username" name="username" type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Display Name</ion-label>
            <ion-input  v-model="displayName" name="displayName" type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Password</ion-label>
            <ion-input  v-model="password" name="password" type="password"></ion-input>
          </ion-item>
          <div class="ion-text-center">
        </div>
                </ion-list>
                <ion-button expand="full" color="danger" class="create-account-button" @click="registerUser" >Create Account</ion-button>
            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonImg } from '@ionic/vue';
  import axios from 'axios';
  import router from '@/router';
 
  
  const username = ref('');
  const displayName = ref('');
  const email = ref('');
  const password = ref('');

  
  const registerUser = () => {
  
  const userRegister = {
    username: username.value,
    displayName: displayName.value,
    email: email.value,
    password: password.value,
  };

  const userVerification = {
    recipientEmail: email.value,
    recipientName: displayName.value
  }

  console.log("user created: ", userRegister.email);

  axios.post('register', userRegister)
    .then((res) => {
      console.log(res);
      console.log("User Submitted: ", userRegister);

      axios.post('register/sendConfirmationEmail', userVerification)
      .then((response) => {
        console.log('Verification email sent successfully', response.data)
      })
      .catch((error) => {
        console.error('Error sending verification email:', error);
      })
      router.push('/login');
    })
    .catch((error) => {
      console.log('the following error occured when trying to post a new deck', error);
    })

};
  
  </script>
  
  <style scoped>
  .create-account-text{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .createAccount-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 75vh;
    
  }
  
  .logo {
    width: 150px;
    height: 150px;
    margin-top: 10px;
  }
  
  .createAccount-card {
    background: radial-gradient(circle, #050505, #0d0d0d, #1a1a1a, #2a2a2a, #3b3b3b);
  color: #fff; 
  border-radius: 15px;
  width: 100%;
  width: 120%; /* Adjust the width as needed */
  max-width: 600px; /* Set a maximum width if necessary */
  margin: auto;
  }
  
  .create-account-button {
  background-color: #cf3c4f;
  color: #cf3c4f;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  margin-top: 10px;
  }
  
  </style>
  