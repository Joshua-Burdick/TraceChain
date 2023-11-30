<template>
    <div class="flex flex-col">
        <ProfileHeader :displayName="username" :usertag="usertag" :numCommunities="numCommunities" class="flex h-auto ml-1 lg:pb-5 sm:max-md:pb-1"/>
        <div class="flex justify-center">
            <div>Posts</div>
            <div>Media</div>
            <div>Communities</div>
        </div>
        <div class="flex h-full"></div>
    </div>
    <!-- <div class="flex flex-row h-full text-slate-50 bg-[#1d1f20] overflow-scroll whitespace-normal">
        <div class="flex flex-col pt-10 align-center w-full">

            <div class="flex items-center justify-between">
                <ul class="flex items-center justify-between w-full bg-transparent">
                    <li class="cursor-pointer rounded-lg hover:bg-stone-700 active:bg-stone-800">
                        <h1 class="ion-text-wrap text-lg mx-10">Posts</h1>
                    </li>
                    <li class="cursor-pointer rounded-lg hover:bg-stone-700 active:bg-stone-800">
                        <h1 class="ion-text-wrap text-lg mx-10">Media</h1>
                    </li>
                    <li class="cursor-pointer rounded-lg hover:bg-stone-700 active:bg-stone-800">
                        <h1 class="ion-text-wrap text-lg mx-10">Communities</h1>
                    </li>
                </ul>
            </div>

            <ion-list class="w-1/2 bg-[#1d1f20]">
                <li class="cursor-pointer w-full bg-[#1d1f20]" v-for="post in posts">
                    <div class="flex bg-stone-700 hover:bg-stone-800 active:bg-stone-900 block border-2 border-stone-400 p-3 rounded sm:text-sm md:text-lg lg:text-lg ion-text-wrap max-w-full h-full my-5 whitespace-normal overflow-hidden">
                        <div v-if="post.isInformative" class="flex flex-row w-[10px] rounded-lg bg-green mr-3"></div>
                        <div v-if="!post.isInformative" class="flex flex-row w-[10px] rounded-lg bg-red mr-3"></div>
                        <div class="flex flex-col items-start">
                            <h1 class="text-white text-2xl">
                                {{ post.content }}
                            </h1>
                            <p class="text-sm mt-3 text-white">on {{ post.time }}</p>
                            <LikesDislikes :post="post" class="mt-3"/>
                        </div>
                    </div>
                </li>
            </ion-list>
        </div>
    </div> -->
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonLabel, IonList, IonItem, IonAvatar, IonIcon} from '@ionic/vue';
import axios from "axios";
import { ref, onMounted } from 'vue';
import ProfileHeader from '@/components/Profile/ProfileHeader.vue';
import LikesDislikes from '@/components/LikesDislikes.vue';

interface Post {
    time: Date,
    content: String,
    sources: [String],
    isInformative: Boolean,
    likes: Number,
    dislikes: Number
}

const username = ref("initial");
const usertag = ref("initial");
const numCommunities = ref(0);  
const posts = ref<Array<Post>>([]);

onMounted(async () => {
    const userResponse = await axios.get("/account/65318daae491ca0391dc0805").then((res) => res.data);
    username.value = userResponse.username;
    usertag.value = userResponse.usertag;

    const postsResponse = await axios.get('post/65318daae491ca0391dc0805').then((res) => posts.value = res.data);
    posts.value.forEach(post => {
        const datePosted = new Date(post.time).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
        post.time = post.time as Date;
    });
});
</script>