<template>
    <div class="overflow-scroll">
        <Search v-if="isSearchVisible" />
        <!-- <ComingSoon name="Account Feed" /> -->
        <div class="flex justify-center  text-slate-50 bg-[#141313]">
            <div class="">
                <ul>
                    <li class="cursor-pointer w-full " v-for="post in feed" :key="post.id">
                        <PostWidget :post="post" :variant="'feed'" />
                    </li>
                </ul>
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

onMounted(async () => {
    try {
        const feedResponse = await axios.get("/post/feed");
        feed.value = feedResponse.data;
        console.log(feed.value);
    } catch (error) {
        console.error('Error fetching feed:', error);
    }
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