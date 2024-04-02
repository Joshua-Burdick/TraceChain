<template>
    <div class="flex flex-row h-full w-full justify-center align-center">
      <ion-list v-if="!loading" class="flex flex-col w-1/2 bg-[#1d1f20]">
        <div v-if="communities.length === 0" class="flex flex-col">
          <h1 class="text-4xl font-semibold text-gray-300">
            {{ 'This User Has not Joined any Communities Yet' }}
          </h1>
        </div>
        <li v-else class="flex w-full mb-5" v-for="community in communities" :key="community._id">
          <CommunityWidget :community="community" class="flex w-full"/>
        </li>
      </ion-list>
      <div v-if="loading" class="flex flex-row w-full h-full justify-center items-center overflow-hidden">
        <v-progress-circular color="blue-lighten-3" class="flex w-1/2 h-1/2 justify-center items-center" :width="15" indeterminate></v-progress-circular>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { IonList } from '@ionic/vue';
  import axios from 'axios';
  import { onMounted, Ref, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  import CommunityWidget from '@/components/Communities/CommunityWidget.vue';
  
  const route = useRoute();
  
  interface Community {
      _id: string,
      name: string,
  }
  
  const loading: Ref<boolean> = ref(true);
  const communities: Ref<Array<Community>> = ref<Array<Community>>([]);
  
  onMounted(async () => {
      const userCommunities = await axios.get(`community/user/${route.params.id}`)
          .then((res) => communities.value = res.data)
          .catch((error) => {
              console.error('Error fetching user communities:', error);
          });
      loading.value = false;
  })
  </script>
  