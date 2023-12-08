<template>
  <ion-page>
      <ion-header>
    <ion-toolbar>
      <ion-title style = "text-align: center;">TraceChain</ion-title>
    </ion-toolbar>
  </ion-header>
    <ion-content class="ion-padding">
      <div class="createAccount-container">
        <ion-img class="logo" src="@/assets/TraceChain.png" alt="Logo"></ion-img>
        <ion-card class="createAccount-card">
          <ion-card-header>
            <ion-card-title class="create-account-text" >Create Account</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              <ion-item>
          <ion-label position="stacked">Email</ion-label>
          <ion-input  v-model="email" name="email" autocomplete type="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Username</ion-label>
          <ion-input  v-model="usertag" name="usertag" autocomplete type="usertag"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Display Name</ion-label>
          <ion-input  v-model="username" name="username" autocomplete type="username"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Password</ion-label>
          <ion-input  v-model="password" name="password" autocomplete type="password"></ion-input>
        </ion-item>
        <div class="ion-text-center">
      </div>
              </ion-list>
              <ion-button expand="full" color="danger" class="create-account-button">Create Account</ion-button>
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
const usertag = ref('');
const email = ref('');
const password = ref('');
const router = useIonRouter();


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
  width: 100px;
  height: 100px;
  
  margin-bottom: 15px;
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