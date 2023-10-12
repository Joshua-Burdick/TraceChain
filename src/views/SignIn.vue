<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style = "text-align: center;">TraceChain</ion-title>
      </ion-toolbar>
    </ion-header>

   
   <ion-content>
      <ion-card color = "danger">
      <ion-card-header>
      <div class="text-center">
      <ion-card-title>Welcome to TraceChain!</ion-card-title>
      <ion-card-subtitle>Sign in below!</ion-card-subtitle>
      </div>
      </ion-card-header>
      </ion-card>

      <ion-list inset="true">
        <form @submit.prevent="handleLogin">

          <ion-item>
            <ion-label position="stacked">Username</ion-label>
            <ion-input v-model="username" name="username" autocomplete type="username"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Password</ion-label>
            <ion-input v-model="password" name="password" autocomplete type="password"></ion-input>
          </ion-item>
          <ion-button style = "text-align: center;" type="submit" fill="clear">Login</ion-button>

        </form>
      </ion-list>
      </ion-content>

      <ion-footer>
      <ion-toolbar>
      <ion-title>
      <div class="text-center">
      <router-link to="/createAccount">
        <ion-button>join now</ion-button>
        </router-link>
      </div>
      </ion-title>
      </ion-toolbar>
      </ion-footer>

  </ion-page>
</template>

<script setup lang="ts">
import {createAccount} from "@/views/CreateAccount.vue";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonLabel, IonList, IonItem, IonAvatar } from '@ionic/vue';
import { ref } from 'vue';

const username = ref("initial");
const numCommunities = ref(3);
const password = ref("password");

function handleLogin() {
  // TODO - handle login
}

</script>