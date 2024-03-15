<template>
    <ion-page>
      <ion-content :fullscreen="true" class="bg-[#141313]">
        <NavigationWrapper :pageComponent="UserCommunityList" />
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/vue';
  import { ref, onMounted } from 'vue';
  import NavigationWrapper from '@/components/Navigation/NavigationWrapper.vue';
import UserCommunityList from '@/components/Communities/UserCommunityList.vue';
  </script>