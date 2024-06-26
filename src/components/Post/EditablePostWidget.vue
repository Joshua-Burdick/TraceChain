<template>
    <div class="flex flex-row h-full w-full rounded-lg text-slate-50 justify-center cursor-pointer shadow-lg shadow-black">
        <div class="flex w-full rounded-lg bg-stone-700 block p-3 sm:text-sm md:text-lg lg:text-lg ion-text-wrap">
            <div v-if="post.isInformative" class="flex flex-row w-[10px] rounded-lg mr-3 bg-gradient-to-b from-[#068005] via-[#169f0a] via-35% to-[#10aa09]"></div>
            <div v-else-if="!post.isInformative" class="flex flex-row w-[10px] rounded-lg mr-3 bg-gradient-to-b from-[#800000] via-[#9f0a0a] via-35% to-[#b00700]"></div>
            <div class="flex flex-col items-start w-full">
                <div
                    @click.stop="$router.push(`/post/${post._id}`)"
                    class="w-full"
                >
                    <div class="flex flex-row w-full align-center">
                        <span class="text-xs text-slate-300 w-full">{{ post.isEdited ? 'Edited' : 'Posted' }} @{{ timeString }} on {{ dateString }}</span>
                        <PostContextMenu :postId="post._id"/>
                    </div>
                    <div v-if="post.content.length < 200" class="text-2xl px-2 py-3 mb-2">
                        {{ post.content }}
                    </div>
                    <div v-else class="text-2xl px-2 py-3 mb-2">
                        {{ post.content.substring(0,200) + "..." }} <p class="text-sm text-blue-400 hover:underline">Read More</p>
                    </div>
                </div>
                <div
                    v-if="post.parentPostId"
                    class="flex flex-row border-2 border-stone-400 bg-stone-600 hover:bg-stone-500 rounded-lg p-2 mx-8 mb-2 w-3/4"
                    @click="$router.push(`/post/${parentPost._id}`)"
                >
                    <div v-if="parentPost.isInformative" class="flex flex-row w-[10px] rounded-lg mr-3 bg-gradient-to-b from-[#068005] via-[#169f0a] via-35% to-[#10aa09]"></div>
                    <div v-else-if="!parentPost.isInformative" class="flex flex-row w-[10px] rounded-lg mr-3 bg-gradient-to-b from-[#800000] via-[#9f0a0a] via-35% to-[#b00700]"></div>
                    <div class="flex flex-col">
                        <div v-if="parentPost.content">
                            <span
                                class="text-md hover:underline"
                                @click.stop="$router.push({ path: `/profile/${parentPost.userId}` })"
                            >
                                {{ `${parentPostMeta.username}@${parentPostMeta.usertag}` }}
                            </span>
                            <span class="text-xs text-slate-300">{{ parentPost.isEdited ? ' Edited' : ' Posted' }} @{{ timeString }} on {{ dateString }}</span>
                        </div>
                        <div v-if="parentPost.content?.length < 200" class="text-2xl px-2 py-3 mb-2">
                            {{ parentPost.content }}
                        </div>
                        <div v-else-if="!parentPost.content" class="text-2xl px-2 py-3 mb-2">
                            [This Post has been Deleted]
                        </div>
                        <div v-else class="text-2xl px-2 py-3 mb-2">
                            {{ parentPost.content.substring(0,200) + "..." }} <p class="text-sm text-blue-400 hover:underline">Read More</p>
                        </div>
                    </div>
                </div>
                <div
                    v-if="post.isInformative"
                    class="mb-2 text-sm hover:text-blue-500"
                    @click.stop="$router.push(`/post/${post._id}`)"
                >
                    Cites {{ post.sources.length }} {{ post.sources.length !== 1 ? 'Sources' : 'Source' }}
                </div>
                <div class="flex flex-row justify-center align-center text-slate-200">
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
                    <div class="mr-5">
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
                    <div>
                        <button
                            class="hover:text-blue-500"
                            @click.stop="$router.push(`/post/${post._id}`)"
                        >
                            <ion-icon :icon="chatbubbleEllipsesOutline"></ion-icon>
                        </button>
                        {{ post.replies.length }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon, IonItem } from '@ionic/vue';
import { thumbsDownSharp, thumbsUpSharp, chatbubbleEllipsesOutline, ellipsisVerticalOutline, ellipsisVerticalSharp, pencilSharp, trash } from 'ionicons/icons';
import { onMounted, ref, Ref, PropType } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import PostContextMenu from '@/components/Post/PostContextMenu.vue';

const route = useRoute();

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
    parentPostId: String,
    likes: [String],
    dislikes: [String]
}

type Variant = "feed" | "profile";

const dateString = ref("");
const timeString = ref("");
const userId = sessionStorage.getItem("userId");
const contextMenu: Ref<boolean> = ref(false);
const parentPost: Ref<Post> = ref({} as Post);
const parentPostMeta: Ref<{username: string, usertag: string}> = ref({username: "", usertag: ""});

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
    timeString.value = new Date(props.post.time).toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit", hour12: false });

    if (props.post.parentPostId) {
        const parentPostResponse = await axios.get(`post/${props.post.parentPostId}`)
            .then((res) => res.data)
            .catch((err) => {
                return {
                    _id: "",
                    userId: "",
                    time: new Date(),
                    content: "",
                    sources: [],
                    replies: [],
                    isInformative: false,
                    isEdited: false,
                    parentPostId: "",
                    likes: [],
                    dislikes: []
                }
            });
        parentPost.value = parentPostResponse;

        const parentPostHeader = await axios.get(`account/${parentPost.value.userId}/header`)
            .then((res) => res.data)
            .catch((err) => {
                return {
                    username: "deleted",
                    usertag: "deleted-user"
                }
            });
        parentPostMeta.value.username = parentPostHeader.username;
        parentPostMeta.value.usertag = parentPostHeader.usertag;
    }

});

const updateLikesDislikes = async (type: string) => {
    if (!userId) {
        console.log("Invalid request. No User Id.");
        return;
    }

    if (type === 'like') {
        if (props.post.likes.includes(userId)) {
            props.post.likes = props.post.likes.filter(id => id !== userId) as [String];

            const response = await axios.put(`post/${props.post._id}/likes_dislikes`,{
                userId: userId,
                like: true,
                remove: true
            }).then((res) => res.data);
            
            console.log(response);
        }
        else {
            props.post.likes.push(userId);
            props.post.dislikes = props.post.dislikes.filter(id => id !== userId) as [String];
    
            const response = await axios.put(`post/${props.post._id}/likes_dislikes`,{
                userId: userId,
                like: true
            }).then((res) => res.data);

            console.log(response);
        }

    }
    else if (type === 'dislike') {
        if (props.post.dislikes.includes(userId)) {
            props.post.dislikes = props.post.dislikes.filter(id => id !== userId) as [String];

            const response = await axios.put(`post/${props.post._id}/likes_dislikes`,{
                userId: userId,
                dislike: true,
                remove: true
            }).then((res) => res.data);
            
            console.log(response);
        }
        else {
            props.post.dislikes.push(userId);
            props.post.likes = props.post.likes.filter(id => id !== userId) as [String];

            const response = await axios.put(`post/${props.post._id}/likes_dislikes`,{
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
