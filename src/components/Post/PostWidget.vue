<template>
    <div
        @click.stop="$router.push(`/post/${post._id}`)"
        class="flex flex-row h-full w-full rounded-lg text-slate-100 justify-center cursor-pointer shadow-lg shadow-black"
    >
        <div class="flex w-full rounded-lg bg-stone-700 block p-3 sm:text-sm md:text-lg lg:text-lg ion-text-wrap">
            <div v-if="post.isInformative" class="flex flex-row w-[10px] rounded-lg mr-3 bg-gradient-to-b from-[#068005] via-[#169f0a] via-35% to-[#10aa09]"></div>
            <div v-else-if="!post.isInformative" class="flex flex-row w-[10px] rounded-lg mr-3 bg-gradient-to-b from-[#800000] via-[#9f0a0a] via-35% to-[#b00700]"></div>
            <div class="flex flex-col items-start w-full">
                <div>
                    <span class="text-md">{{ variant === 'feed' ? `${username}@${usertag} ` : '' }}</span>
                    <span class="text-xs text-slate-300">{{ post.isEdited ? 'Edited' : 'Posted' }} @{{ timeString }} on {{ dateString }}</span>
                </div>
                <div v-if="post.content.length < 200" class="text-2xl px-2 py-3 mb-2">
                    {{ post.content }}
                </div>
                <div v-else class="text-2xl px-2 py-3 mb-2">
                    {{ post.content.substring(0,200) + "..." }} <p class="text-sm text-blue-400 hover:underline">Read More</p>
                </div>
                <div v-if="post.isInformative" class="mb-2 text-sm hover:text-blue-500">Cites {{ post.sources.length }} {{ post.sources.length !== 1 ? 'Sources' : 'Source' }}</div>
                <div class="flex flex-row justify-center align-center text-slate-200">
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
                        {{ 0 }} <!-- TODO add comments array to posts and display array.length -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon, IonItem } from '@ionic/vue';
import { onMounted, ref, PropType } from 'vue';
import { thumbsDownSharp, thumbsUpSharp, chatbubbleEllipsesOutline } from 'ionicons/icons';
import axios from 'axios';

interface Post {
    _id: string,
    userId: string,
    time: Date,
    content: String,
    sources: [String],
    isInformative: Boolean,
    isEdited: Boolean,
    likes: Number,
    dislikes: Number
}

type Variant = "feed" | "profile";

const dateString = ref("");
const timeString = ref("");
const username = ref("");
const usertag = ref("");

const props = defineProps({
    post: {
        type: Object as PropType<Post>,
        required: true
    },
    variant: {
        type: String as PropType<Variant>,
        default: "profile"
    }
});

onMounted(async () => {
    dateString.value = new Date(props.post.time).toLocaleDateString('en-US', { year: "numeric", month: "numeric", day: "numeric" });
    timeString.value = new Date(props.post.time).toLocaleTimeString('en-US', { hour12: false });

    const postHeader = await axios.get(`account/${props.post.userId}/header`).then((res) => res.data);
    username.value = postHeader.username;
    usertag.value = postHeader.usertag;
});
</script>