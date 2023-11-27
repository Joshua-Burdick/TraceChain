<template>
  <ion-page class="flex flex-row">
    <ion-tabs class="flex">
      <ion-router-outlet></ion-router-outlet>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import router from '@/router';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { addCircleOutline, homeOutline, personCircleOutline, settingsOutline } from 'ionicons/icons';
</script>