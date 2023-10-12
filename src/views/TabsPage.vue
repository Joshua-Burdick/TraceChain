<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="feed" href="/feed">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
        </ion-tab-button>

        <ion-tab-button tab="create-post" href="/create_post">
          <ion-icon aria-hidden="true" :icon="addCircleOutline" />
        </ion-tab-button>

        <ion-tab-button tab="account" href="/profile">
          <ion-icon aria-hidden="true" :icon="personCircleOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { addCircleOutline, homeOutline, personCircleOutline } from 'ionicons/icons';
</script>