<template>
  <ion-page>
      <ion-header>
    <ion-toolbar>
      <ion-title style = "text-align: center;">TraceChain</ion-title>
    </ion-toolbar>
  </ion-header>
    <ion-content class="ion-padding">
      <div class="signin-container">
        <ion-img class="logo" src="@/assets/TraceChain.png" alt="Logo"></ion-img>
        <ion-card class="signin-card">
          <ion-card-header>
            <ion-card-title class="sign-in-text" >Sign In</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-label position="floating">Username</ion-label>
                <ion-input v-model="username" type="username"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Password</ion-label>
                <ion-input v-model="password" type="password"></ion-input>
              </ion-item>
              </ion-list>
              <ion-button expand="full" color="danger" class="sign-in-button">Sign In</ion-button>
              <router-link to="/createAccount">
              <ion-button expand="full" class="join-now-button" color="dark" > Not a Member? <br> Join Now</ion-button>
              </router-link>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonImg } from '@ionic/vue';
import { useIonRouter } from '@ionic/vue';
import axios from 'axios';

const username = ref('');
const password = ref('');
const router = useIonRouter();


</script>

<style scoped>
.sign-in-text{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
}
.signin-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
  
}

.logo {
  width: 100px;
  height: 100px;
  
  margin-top: 20px;
}

.signin-card {
  background: radial-gradient(circle, #050505, #0d0d0d, #1a1a1a, #2a2a2a, #3b3b3b);
color: #fff; 
border-radius: 15px;
width: 100%;
width: 120%; /* Adjust the width as needed */
max-width: 600px; /* Set a maximum width if necessary */
margin: auto;
}

.sign-in-button {
background-color: #cf3c4f;
color: #cf3c4f;
border-radius: 15px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
margin-bottom: 10px;
margin-top: 10px;
}

.join-now-button {
color: dark;
border-radius: 15px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
