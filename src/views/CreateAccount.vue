<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <NavigationWrapper :pageComponent="CreateAccount"/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon } from '@ionic/vue';
import NavigationWrapper from '@/components/NavigationWrapper.vue';
import CreateAccount from '@/components/CreateAccount.vue';


</script>