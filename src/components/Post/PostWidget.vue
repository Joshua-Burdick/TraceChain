<template>
    <div class="flex flex-row h-full w-full rounded-lg text-slate-50 justify-center cursor-pointer shadow-lg shadow-black">
        <div class="flex w-full rounded-lg bg-stone-700 block p-3 sm:text-sm md:text-lg lg:text-lg ion-text-wrap">
            <!-- <div v-if="post.isInformative" class="flex flex-row w-[10px] rounded-lg bg-green mr-3"></div>
            <div v-if="!post.isInformative" class="flex flex-row w-[10px] rounded-lg bg-red mr-3"></div> -->
            <div class="flex flex-col items-start">
                <p class="text-xs text-white">{{ post.isEdited ? 'Edited' : 'Posted' }} @{{ timeString }} on {{ dateString }}</p>
                <h1 class="text-white text-2xl p-2">
                    {{ post.content }}
                </h1>
                <div class="flex flex-row justify-center align-center">
                    <div class="mr-2">
                        <button class="hover:text-green-500">
                            <ion-icon :icon="thumbsUpSharp"></ion-icon>
                        </button>
                        {{ post.likes || 0}}
                    </div>
                    <div class="mr-5">
                        <button class="hover:text-red-500">
                            <ion-icon :icon="thumbsDownSharp"></ion-icon>
                        </button>
                        {{ post.dislikes || 0 }}
                    </div>
                    <div>
                        <button class="hover:text-blue-500">
                            <ion-icon :icon="chatbubbleEllipsesOutline"></ion-icon>
                        </button>
                        {{ 0 }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent, IonList, IonItem} from '@ionic/vue';
import { onMounted, ref, PropType } from 'vue';
import { thumbsDownSharp, thumbsUpSharp, chatbubbleEllipsesOutline } from 'ionicons/icons';
import LikesDislikes from '@/components/LikesDislikes.vue';

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