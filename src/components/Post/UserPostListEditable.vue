<template>
    <div class="flex flex-row h-full w-full text-slate-50 justify-center">
        <ion-list class="w-1/2 bg-red">
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
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent, IonList, IonItem} from '@ionic/vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

import LikesDislikes from '@/components/LikesDislikes.vue';

interface Post {
    time: Date,
    content: String,
    sources: [String],
    isInformative: Boolean,
    likes: Number,
    dislikes: Number
}

const posts = ref<Array<Post>>([]);

defineProps({
    posts: Array<Post>
})

onMounted(async () => {
    const userPosts = await axios.get('post/65318daae491ca0391dc0805').then((res) => posts.value = res.data);
    posts.value.forEach(post => {
        const datePosted = new Date(post.time).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
        post.time = post.time as Date;
    });
})
</script>