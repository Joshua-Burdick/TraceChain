<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <NavigationWrapper :pageComponent="CreatePost"/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon } from '@ionic/vue';
import NavigationWrapper from '@/components/Navigation/NavigationWrapper.vue';
import CreatePost from '@/components/Post/CreatePost.vue';

const tempUserId = `65318daae491ca0391dc0805`;

</script>