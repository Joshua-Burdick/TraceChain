<template>
    <div class="flex flex-row h-full w-full justify-center">
        <ion-list v-if="!loading" class="flex flex-col w-1/2 bg-[#1d1f20]">
            <li class="flex w-full mb-5" v-for="post in posts" :key="post.id">
                <PostWidget :post="post" class="flex w-full"/>
            </li>
        </ion-list>
        <div v-if="loading" class="flex flex-row w-full h-full justify-center items-center overflow-hidden">
            <v-progress-circular color="blue-lighten-3" class="flex w-1/2 h-1/2 justify-center items-center" :width="15" indeterminate></v-progress-circular>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent, IonList, IonItem} from '@ionic/vue';
import axios from 'axios';
import { onMounted, Ref, ref } from 'vue';

import PostWidget from '@/components/Post/PostWidget.vue';

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

const loading: Ref<boolean> = ref(true);
const posts: Ref<Array<Post>> = ref<Array<Post>>([]);

onMounted(async () => {
    const userPosts = await axios.get('post/65318daae491ca0391dc0805').then((res) => posts.value = res.data);
    loading.value = false;
})
</script>