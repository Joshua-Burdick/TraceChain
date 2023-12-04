<template>
    <div class="flex flex-row h-full w-full justify-center">
        <ion-list class="flex flex-col w-1/2 bg-[#1d1f20]">
            <li class="flex w-full" v-for="post in posts" :key="post.id">
                <PostWidget :post="post" class="flex w-full"/>
            </li>
        </ion-list>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent, IonList, IonItem} from '@ionic/vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

import PostWidget from '@/components/Post/PostWidget.vue';
import LikesDislikes from '@/components/LikesDislikes.vue';

interface Post {
    id: string,
    time: Date,
    content: String,
    sources: [String],
    isInformative: Boolean,
    likes: Number,
    dislikes: Number
}

const posts = ref<Array<Post>>([]);

defineProps({
    posts: {
        type: Array<Post>,
        required: true
    }
})

onMounted(async () => {
    const userPosts = await axios.get('post/65318daae491ca0391dc0805').then((res) => posts.value = res.data);
    posts.value.forEach(post => {
        const datePosted = new Date(post.time).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
        post.time = post.time as Date;
    });
})
</script>