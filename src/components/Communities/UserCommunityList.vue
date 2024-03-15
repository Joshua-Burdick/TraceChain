<template>
     <div class="flex flex-col w-full h-full text-slate-100 align-center">
        <div v-if="$vuetify.display.mdAndDown" class="flex relative w-full h-full align-center py-5">
            <div class="absolute w-full h-full bg-stone-800 bg-opacity-70 blur-sm z-0"></div>
            <div class="flex flex-row w-full h-full align-center justify-center z-20">
                <img aria-hidden="true" src="/TraceChain.svg" class="w-20"/>
                <p class="text-4xl font-semibold">TraceChain</p>
            </div>
        </div>
        <div class="flex flex-row w-full h-full py-7 justify-center bg-stone-800 bg-opacity-50 text-8xl font-semibold">
            Communities
        </div>
        <ion-list v-if="!loading" class="flex flex-col w-1/2 bg-[#1d1f20]">
            <ion-item v-for="community in communities" :key="community._id">
    <ion-label>
      <h2>{{ community.name }}</h2>
      <p>{{ community.description }}</p>
    </ion-label>
  </ion-item>
            </ion-list>
    </div>
    <router-link to="/createCommunity">
        <ion-button expand="full" class="create-community-button" color="dark" > Want to create your own community? <br> Create Now!</ion-button>
    </router-link>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent, IonLabel, IonList, IonItem, IonButton, IonToolbar, IonTitle} from '@ionic/vue';
import { onMounted, Ref, ref } from "vue";
import axios from 'axios';

const communities: Ref<Community[]> = ref([]);
const isLoggedIn: Ref<boolean> = ref(true);
const isThisUser: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(true);
const userId = sessionStorage.getItem('userId');

interface Community {
  _id: string; 
  name: string;
  description: string;
}

onMounted(async () => {
    try {
        const response = await axios.get(`/community/${userId}/communities`);
        communities.value = response.data.map((community: Community) => ({
          id: community._id, 
          name: community.name,
          description: community.description
        }));
        console.log('First post:', communities.value[0]);
    } catch (error) {
        console.error('Error fetching feed:', error);
    }

    loading.value = false;
});
</script>