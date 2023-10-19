<template>
    <ion-page>
      <!-- <ion-header>
        <ion-toolbar>
          <ion-title>Tab 1</ion-title>
        </ion-toolbar>
      </ion-header> -->
      <ion-content :fullscreen="true">
        <ComingSoon name="Account Feed"/>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import ComingSoon from '@/components/ComingSoon.vue';
  </script>