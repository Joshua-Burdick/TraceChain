<template>
    <div class="flex h-full overflow-y-scroll">
        <div class="flex flex-row w-full justify-center">
            <ion-list v-if="!loading" class="flex flex-col w-1/2 bg-[#1d1f20]">
                <li class="flex w-full mb-5" v-for="post in feed" :key="post.id">
                    <PostWidget :post="post" class="flex w-full" :variant="'feed'"/>
                </li>
            </ion-list>
            <div v-if="loading" class="flex flex-row w-full h-full justify-center items-center overflow-hidden">
                <v-progress-circular color="blue-lighten-3" class="flex w-1/2 h-1/2 justify-center items-center" :width="15" indeterminate></v-progress-circular>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Search from '@/components/Search.vue';
import PostWidget from '@/components/Post/PostWidget.vue';

interface User {
    username: String,
    usertag: String
}

interface Post {
    id: string,
    time: Date,
    content: String,
    sources: [String],
    isInformative: Boolean,
    isEdited: Boolean,
    likes: Number,
    dislikes: Number
}

let isSearchVisible = true;
const feed = ref<Array<Post>>([]);
const loading = ref(true);

onMounted(async () => {
    try {
        const feedResponse = await axios.get("/post/feed");
        feed.value = feedResponse.data;
        console.log(feed.value);
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

// console.log("userResponse", userResponse);

// feed.value.forEach(post => {
//   console.log("post content in feed", post.content);
// })

// feed.value.forEach(feed => {
//   console.log(feed, " has type ", typeof (feed));
//   const datePosted = new Date(feed.createdAt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
//   feed.createdAt = feed.createdAt as Date;
//   feed.createdAt = datePosted;
// });

</script>