<template>
        <div class="flex flex-col w-full h-full text-white align-center">
    <div class="flex flex-row justify-center w-full py-7 px-4 items-center bg-stone-800 bg-opacity-50 text-8xl font-semibold" style="border-bottom: 2px solid rgba(255, 255, 255, 0.8);">
        {{ communityName }}
    </div>
    <div style="border-bottom: 2px solid rgba(255, 255, 255, 0.8);"></div> 
    <router-link to="/communities" class="leave-community-button" style="color: white;">
        <ion-button @click="leaveCommunity" color="dark">Leave Community</ion-button>
      </router-link>
    <div class="flex flex-row h-full w-full justify-center align-center">
        <ion-list v-if="!loading" class="flex flex-col w-1/2 bg-[#1d1f20]">
            <div v-if="posts.length === 0" class="flex flex-col">
                <h1 class="text-4xl font-semibold text-gray-300">
                    {{ 'This Community has no posts yet!' }}
                </h1>
            </div>
            <li v-else class="flex w-full mb-5" v-for="post in posts" :key="post._id">
                <PostWidget :post="post" class="flex w-full"/>
            </li>
        </ion-list>
        <div v-if="loading" class="flex flex-row w-full h-full justify-center items-center overflow-hidden">
            <v-progress-circular color="blue-lighten-3" class="flex w-1/2 h-1/2 justify-center items-center" :width="15" indeterminate></v-progress-circular>
        </div>
    </div>
      </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  import PostWidget from '@/components/Post/PostWidget.vue';
  const route = useRoute();
  const loading = ref(true);
  const posts = ref<Post[]>([]);
  const filteredPosts = ref<Post[]>([]);
  const communityName = ref<string>('');
    const userId = sessionStorage.getItem("userId");
    const communityId = route.params.id;


  interface Sources {
      type: string,
      data: {
          [key: string]: string
      }
  }
  
  interface Post {
      _id: string,
      userId: string,
      communityId: string,
      time: Date,
      content: String,
      sources: [Sources],
      replies: [String],
      isInformative: Boolean,
      isEdited: Boolean,
      parentPostId: String,
      likes: [String],
      dislikes: [String]
  }
  
    
  onMounted(async () => {
    try {
      // Fetch posts for the selected community using community ID
      const response = await axios.get(`/community/${communityId}/posts`).then((res) => posts.value = res.data);
      loading.value = false;
      filterPosts(communityId);
      fetchCommunityName(communityId); 
    } catch (error) {
      console.error('Error fetching community posts:', error);
    }
  });
  
  const filterPosts = (communityId = route.params.id) => {
      console.log('Filtering posts by community ID:', communityId);
      filteredPosts.value = posts.value.filter((post) => post.communityId === communityId);
      console.log('Filtered posts:', filteredPosts.value);
  };

  const fetchCommunityName = async (communityId = route.params.id) => {
  try {
    const response = await axios.get(`/community/${communityId}`);
    communityName.value = response.data.name; // Assuming the response contains the community name
  } catch (error) {
    console.error('Error fetching community name:', error);
  }
};

const leaveCommunity = async () => {
    try {
        await axios.post(`/community/leave/${communityId}/${userId}`);
    } catch (error) {
        console.error('Error leaving community:', error);
    }
}

  </script>