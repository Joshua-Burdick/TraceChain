<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="flex flex-col h-full">
          <div class="flex flex-row h-full bg-[#1d1f20]">
            <div v-if="$vuetify.display.lgAndUp" class="flex flex-col w-1/4">
            </div>
            <component :is="pageComponent" class="flex flex-col w-3/4"/>
          </div>
          <div v-if="$vuetify.display.mdAndDown" class="flex flex-row">
          </div>
        </div>
      </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">  
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon } from '@ionic/vue';
import { pencilSharp, trash, alertCircle } from 'ionicons/icons';


defineProps({
    pageComponent: Object
});

</script>