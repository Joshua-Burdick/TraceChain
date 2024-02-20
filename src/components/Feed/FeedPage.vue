<template>
    <div class="flex flex-col w-full h-full overflow-y-scroll divide-y-2">
        <FeedHeader class="flex h-auto"/>
        <div class="flex justify-center items-center pt-10 relative">

            <!--Feed List-->
            <ion-list v-if="!loading" class="flex flex-col w-1/2 bg-[#1d1f20]">
                <li class="flex w-full mb-5" v-for="post in feed" :key="post._id">
                    <PostWidget :post="post" class="flex w-full" :variant="'feed'"/>
                </li>
            </ion-list>

            <!--Dropdown filter-->
            <div class="absolute right-10 top-0 mt-10">
              <button @click="open = !open" class="px-4 py-2 mt-2 text-white bg-red-900 rounded-md focus:outline-none focus:shadow-outline">
                  Sort by
              </button>
              <div v-if="open" class="absolute right-0 mt-2 w-40 rounded-md shadow-lg z-10 bg-neutral-700">
                  <a class="block px-4 py-2 text-sm text-white hover:bg-neutral-600" href="#">Newest</a>
                  <a class="block px-4 py-2 text-sm text-white hover:bg-neutral-600" href="#">Oldest</a>
                  <a class="block px-4 py-2 text-sm text-white hover:bg-neutral-600" href="#">Most Popular</a>
                  <a class="block px-4 py-2 text-sm text-white hover:bg-neutral-600" href="#">Following</a>
              </div>
          </div>
            <div v-if="loading" class="flex flex-row w-full h-full justify-center items-center overflow-hidden">
                <v-progress-circular color="blue-lighten-3" class="flex w-1/2 h-1/2 justify-center items-center" :width="15" indeterminate></v-progress-circular>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import FeedHeader from '@/components/Feed/FeedHeader.vue';
import PostWidget from '@/components/Post/PostWidget.vue';

const open = ref(false);

function toggleDropdown() {
    open.value = !open.value;
}

interface User {
    username: String,
    usertag: String
}

interface Post {
    _id: string,
    userId: string,
    time: Date,
    content: String,
    sources: [String],
    isInformative: Boolean,
    isEdited: Boolean,
    likes: [String],
    dislikes: [String]
}

let isSearchVisible = true;
const feed = ref<Array<Post>>([]);
const loading = ref(true);

onMounted(async () => {
    try {
        const feedResponse = await axios.get("/post/feed");
        feed.value = feedResponse.data;
    } catch (error) {
        console.error('Error fetching feed:', error);
    }

    loading.value = false;
});

const formatSource = (source: any) => {
    if (source.startsWith('http://') || source.startsWith('https://')) {
        return source;
    } else {
        return 'http://' + source;
    }
}

</script>