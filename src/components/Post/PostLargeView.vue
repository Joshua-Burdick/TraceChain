<template>
    <div v-if="loading" class="flex flex-row w-full h-full justify-center items-center overflow-hidden">
        <v-progress-circular color="blue-lighten-3" class="flex w-1/2 h-1/2 justify-center items-center" :width="15" indeterminate></v-progress-circular>
    </div>
    <div v-if="!loading" class="flex flex-col w-full h-full align-center justify-center overflow-y-scroll text-slate-100">
        <div class="flex flex-col h-auto w-2/3">
            <div class="flex flex-row h-full w-full bg-stone-700 p-5 rounded-lg shadow-lg shadow-black">
                <div v-if="post.isInformative" class="flex flex-row w-[10px] rounded-lg mr-3 bg-gradient-to-b from-[#068005] via-[#169f0a] via-35% to-[#10aa09]"></div>
                <div v-else-if="!post.isInformative" class="flex flex-row w-[10px] rounded-lg mr-3 bg-gradient-to-b from-[#800000] via-[#9f0a0a] via-35% to-[#b00700]"></div>
                <div class="flex flex-col items-start w-full">
                    <div class="flex flex-row align-center">
                        <span class="text-4xl">{{ username }}</span>
                        <span class="text-md text-slate-400 ml-3">{{ post.isEdited ? 'Edited' : 'Posted' }} @{{ timeString }} on {{ dateString }}</span>
                    </div>
                    <span
                        class="text-2xl text-slate-300 hover:underline cursor-pointer"
                        @click.stop="$router.push(`/profile/${post.userId}`)"
                    >
                        @{{ usertag }}
                    </span>
                    <div class="text-5xl px-2 py-3 mb-2 mt-10">
                        {{ post.content }}
                    </div>
                </div>
            </div>
            <div class="flex flex-row text-slate-200 mt-3 text-xl">
                <div class="mr-2">
                    <button
                        class="hover:text-green-500"
                        :class="{
                            'text-green-600': userId && post.likes.includes(userId)
                        }"
                        @click.stop="updateLikesDislikes('like')"
                    >
                        <ion-icon :icon="thumbsUpSharp"></ion-icon>
                    </button>
                    {{ post.likes.length || 0}}
                </div>
                <div>
                    <button
                        class="hover:text-red-500"
                        :class="{
                            'text-red-600': userId && post.dislikes.includes(userId)
                        }"
                        @click.stop="updateLikesDislikes('dislike')"
                    >
                        <ion-icon :icon="thumbsDownSharp"></ion-icon>
                    </button>
                    {{ post.dislikes.length || 0 }}
                </div>
            </div>
        </div>
        <div v-if="post.isInformative" class="h-auto mt-7 mb-10 p-5 border-2 border-gray-600 rounded-lg shadow-md shadow-black">
            <div class="text-2xl text-slate-300 mb-5">This post cites {{ post.sources.length }} {{ post.sources.length !== 1 ? 'Sources' : 'Source' }}:</div>
            <div v-for="(value, index) in post.sources" :key="index">
                <div class="flex flex-row align-center">
                    <span class="text-xl mr-3">{{ value.type }}: </span>
                    <div class="flex flex-col">
                        <div v-for="(field, fieldIndex) in value.data" :key="fieldIndex" class="flex flex-col">
                            <span
                                class="text-xl"
                                :class="{
                                    'text-blue-400 hover:underline cursor-pointer': fieldIndex == 'URL',
                                    'text-slate-300': fieldIndex != 'URL'
                                }"
                            >
                                <a v-if="fieldIndex == 'URL'" :href="field" target="_blank">{{ field }}</a>
                                <p v-else-if="fieldIndex == 'Title'">"{{ field }}"</p>
                                <p v-else-if="fieldIndex == 'Author'">By {{ field }}</p>
                                <p v-else>{{ field }}</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex align-center bg-stone-800 w-2/3 m-3 p-3 rounded-lg text-slate-400 cursor-pointer" @click="replyDialog = true">
            <p class="flex w-full">Add Your Reply...</p>
            <ion-icon aria-hidden="true" :icon="sendOutline" class="text-lg"></ion-icon>
        </div>
        <div>
            <div v-if="post.replies.length > 0" class="flex flex-col text-2xl text-slate-400 align-start w-full h-auto mt-10">
                {{ post.replies.length }} {{ post.replies.length !== 1 ? 'Replies' : 'Reply' }}
                <div class="flex flex-row w-full justify-center pt-10">
                    <ion-list v-if="!repliesLoading" class="flex flex-col bg-[#1d1f20]">
                        <li class="flex w-full mb-5" v-for="reply in postReplies" :key="reply._id">
                            <PostWidget :post="reply" class="flex w-full" :variant="'feed'"/>
                        </li>
                    </ion-list>
                    <div v-if="repliesLoading" class="flex flex-row w-full h-full justify-center items-center overflow-hidden">
                        <v-progress-circular color="blue-lighten-3" class="flex w-1/2 h-1/2 justify-center items-center" :width="15" indeterminate></v-progress-circular>
                    </div>
                </div>  
            </div>
            <div v-else class="text-4xl text-slate-400 h-auto mt-10">
                This post doesn't have any comments yet
            </div>
        </div>
        <v-dialog v-model="replyDialog" class="w-1/3">
            <div class="flex flex-col bg-[#1d1f20] text-slate-100 rounded-lg border-2 border-slate-700 p-5 w-full justify-center">
                <PostReply :parentPostId="post._id" @closeDialog="replyDialog = false"/>
            </div>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonLabel, IonList, IonItem, IonAvatar,} from '@ionic/vue';
import { thumbsDownSharp, thumbsUpSharp, sendOutline } from 'ionicons/icons';
import axios from 'axios';
import { onMounted, ref, Ref } from 'vue';
import { useRoute } from 'vue-router';

import PostReply from './PostReply.vue';
import PostWidget from './PostWidget.vue';

const route = useRoute();
const userId = sessionStorage.getItem("userId");

interface Sources {
    type: string,
    data: {
        [key: string]: string
    }
}

interface Post {
    _id: string,
    userId: string,
    time: Date,
    content: String,
    sources: [Sources],
    replies: [String],
    isInformative: Boolean,
    isEdited: Boolean,
    likes: [String],
    dislikes: [String]
}

const post: Ref<Post> = ref({
    content: ""
} as unknown as Post);
const postReplies: Ref<Post[]> = ref([]);

const username: Ref<string> = ref("");
const usertag: Ref<string> = ref("");
const dateString: Ref<string> = ref("");
const timeString: Ref<string> = ref("");
const loading: Ref<boolean> = ref(true);
const repliesLoading: Ref<boolean> = ref(true);
const replyDialog: Ref<boolean> = ref(false);

onMounted(async () => {
    const response = await axios.get(`/post/${route.params.id}`).then((res) => res.data);
    post.value = response;

    const postHeader = await axios.get(`account/${post.value.userId}/header`)
        .then((res) => res.data)
        .catch((err) => {
            console.error("Error fetching post header:", err);
            return {
                username: "deleted",
                usertag: "deleted-user"
            }
        });
    username.value = postHeader.username;
    usertag.value = postHeader.usertag;

    dateString.value = new Date(post.value.time).toLocaleDateString('en-US', { year: "numeric", month: "numeric", day: "numeric" });
    timeString.value = new Date(post.value.time).toLocaleTimeString('en-US', { hour12: false });

    loading.value = false;

    if (post.value.replies.length > 0) {
        const repliesResponse = await axios.get(`/post/${post.value._id}/replies`)
            .then((res) => res.data)
            .catch((err) => {
                console.error("Error fetching post replies:", err);
                return [];
            });
        postReplies.value = repliesResponse;
    }

    repliesLoading.value = false;
});

const updateLikesDislikes = async (type: string) => {
    if (!userId) {
        console.log("Invalid request. No User Id.");
        return;
    }

    if (type === 'like') {
        if (post.value.likes.includes(userId)) {
            post.value.likes.splice(post.value.likes.indexOf(userId), 1);

            const response = await axios.put(`post/${post.value._id}/likes_dislikes`,{
                userId: userId,
                like: true,
                remove: true
            }).then((res) => res.data);
            
            console.log(response);
        }
        else {
            post.value.likes.push(userId);
            post.value.dislikes.splice(post.value.dislikes.indexOf(userId), 1);
    
            const response = await axios.put(`post/${post.value._id}/likes_dislikes`,{
                userId: userId,
                like: true
            }).then((res) => res.data);

            console.log(response);
        }

    }
    else if (type === 'dislike') {
        if (post.value.dislikes.includes(userId)) {
            post.value.dislikes.splice(post.value.dislikes.indexOf(userId), 1);

            const response = await axios.put(`post/${post.value._id}/likes_dislikes`,{
                userId: userId,
                dislike: true,
                remove: true
            }).then((res) => res.data);
            
            console.log(response);
        }
        else {
            post.value.dislikes.push(userId);
            post.value.likes.splice(post.value.dislikes.indexOf(userId), 1);

            const response = await axios.put(`post/${post.value._id}/likes_dislikes`,{
                userId: userId,
                dislike: true
            }).then((res) => res.data);

            console.log(response);
        }
    }
    else {
        console.error("Invalid type passed to updateLikesDislikes");
    }
}
</script>