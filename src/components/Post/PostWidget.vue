<template>
    <div class="flex flex-row h-full w-full text-slate-50 justify-center cursor-pointer">
        <div class="flex w-full bg-stone-700 hover:bg-stone-800 active:bg-stone-900 block border-2 border-stone-400 p-3 rounded sm:text-sm md:text-lg lg:text-lg ion-text-wrap">
            <div v-if="post.isInformative" class="flex flex-row w-[10px] rounded-lg bg-green mr-3"></div>
            <div v-if="!post.isInformative" class="flex flex-row w-[10px] rounded-lg bg-red mr-3"></div>
            <div class="flex flex-col items-start">
                <h1 class="text-white text-2xl">
                    {{ post.content }}
                </h1>
                <p class="text-sm mt-3 text-white">@{{ timeString }} on {{ dateString }}</p>
                <LikesDislikes :post="post" class="mt-3"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent, IonList, IonItem} from '@ionic/vue';
import { onMounted, ref, PropType } from 'vue';

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

const dateString = ref("");
const timeString = ref("");

const props = defineProps({
    post: {
        type: Object as PropType<Post>,
        required: true
    }
});

onMounted(() => {
    dateString.value = new Date(props.post.time).toLocaleDateString('en-US', { year: "numeric", month: "numeric", day: "numeric" });
    timeString.value = new Date(props.post.time).toLocaleTimeString('en-US', { hour12: false });
});
</script>