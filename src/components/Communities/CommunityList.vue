<template>
    <div class="flex flex-col w-full h-full text-white align-center">
    <div class="flex flex-row justify-center w-full py-7 px-4 items-center bg-stone-800 bg-opacity-50 text-8xl font-semibold" style="border-bottom: 2px solid rgba(255, 255, 255, 0.8);">
      Communities
    </div>
    <div style="border-bottom: 2px solid rgba(255, 255, 255, 0.8);"></div> 
     <div class="mt-4 px-4 self-end"> 
      <router-link to="/createCommunity" class="create-community-button">
        <button class="bg-white rounded p-3 font-bold">Create Community</button>
      </router-link>
    </div>      
    <ion-list v-if="!loading" class="flex flex-col w-3/4 mx-auto" style="background-color: #1d1f20;">
      <router-link v-for="community in communities" :key="community._id" :to="'/community/' + community._id" style="text-decoration: none;">
        <ion-card class="mb-4" style="border: 2px solid var(--ion-color-danger);">
          <ion-card-content class="flex flex-row items-center justify-between bg-stone-800">
            <div>
              <h2 class="text-white">{{ community.name }}</h2>
              <p class="text-white">{{ community.description }}</p>
            </div>
            <ion-button @click="joinCommunity(community)" color="danger">Join</ion-button>
          </ion-card-content>
        </ion-card>
      </router-link>
    </ion-list>
    
    
  
    </div>
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

const joinCommunity = async (community: Community) => {
  try {
    const communityId = community._id;
    console.log('Selected community ID:', communityId);

    const response = await axios.post(`/community/${communityId}/join/${userId}`);
    console.log(response.data); 
    console.log("Joined community:", community.name);
  } catch (error) {
    console.error("Error joining community:", error);
  }
}

onMounted(async () => {
    try {
        const response = await axios.get(`/community/${userId}/communities`);
        communities.value = response.data.map((community: Community) => ({
          _id: community._id, 
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

<style scoped>
.mb-4 {
  margin-bottom: 1rem; 
}
</style>