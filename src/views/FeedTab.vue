<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <NavigationWrapper :pageComponent="ComingSoon"/>
      </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon } from '@ionic/vue';
import ComingSoon from '@/components/ComingSoon.vue';
import NavigationWrapper from '@/components/Navigation/NavigationWrapper.vue';
</script>