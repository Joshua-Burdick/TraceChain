<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true" class=" bg-[#141313]">
      <Search v-if="isSearchVisible" />
      <FeedPage />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import ComingSoon from '@/components/ComingSoon.vue';
import Search from '@/components/Search.vue';
import FeedPage from './FeedPage.vue';
</script>