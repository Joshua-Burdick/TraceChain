<template>
    <ion-page>
      <ion-content :fullscreen="true" class="bg-[#141313]">
        <NavigationWrapper :pageComponent="CommunityList" />
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/vue';
  import { ref, onMounted } from 'vue';
  import NavigationWrapper from '@/components/Navigation/NavigationWrapper.vue';
  import CommunityList from '@/components/Communities/CommunityList.vue';
  </script>