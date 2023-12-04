<template>
    <div class="overflow-scroll">
        <Search v-if="isSearchVisible" />
        <!-- <ComingSoon name="Account Feed" /> -->
        <div class="flex justify-center  text-slate-50 bg-[#141313]">
            <div class="">
                <ul>
                    <li class="cursor-pointer w-full " v-for="post in feed">
                        <div class="flex bg-stone-700 hover:bg-stone-800 active:bg-stone-900 block border-2 border-stone-400 p-3 rounded sm:text-sm md:text-lg lg:text-lg ion-text-wrap max-w-full h-full my-5 whitespace-normal overflow-hidden">
                            <div v-if="post.isInformative" class="flex flex-row w-[10px] rounded-lg bg-green mr-3"></div>
                            <div v-if="!post.isInformative" class="flex flex-row w-[10px] rounded-lg bg-red mr-3"></div>
                            <div class="flex flex-col items-start">
                                <div class="flex flex-row">
                                    <h4 class="font-bold">author</h4>
                                    <h2>@tag</h2>
                                </div>
                                <h1 class="text-white text-2xl">
                                    {{ post.content }}
                                </h1>
                                <p class="text-sm mt-3 text-white">on {{ post.createdAt }}</p>
                                <LikesDislikes :post="post" class="mt-3"/>
                            </div>
                        </div>
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
import LikesDislikes from '@/components/LikesDislikes.vue';

interface User {
    username: String,
    usertag: String
}

interface Post {
    content: String,
    createdAt: Date,
    sources: [String],
    isInformative: String,
    likes: number,
    dislikes: number
}

let isSearchVisible = true;
const feed = ref<Array<Post>>([]);

onMounted(async () => {
    try {
        const feedResponse = await axios.get("/post/feed");
        feed.value = feedResponse.data;
        console.log(feed.value);

        feed.value.forEach(post => {
            console.log(post);

            console.log(post, " has type ", typeof (post));
            const datePosted = new Date(post.createdAt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
            post.createdAt = post.createdAt as Date;
        });


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