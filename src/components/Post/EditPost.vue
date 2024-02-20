<template>
    <div class="flex flex-col w-full h-full align-center">
        <div class="text-5xl font-semibold">
            Edit Post
        </div>
        <div class="flex flex-col align-center p-5 w-full h-full">
            <div class="px-2 py-2 w-full rounded-lg bg-zinc-800 h-full shadow-md shadow-black">
                <textarea class="focus:outline-none text-white text-lg w-full h-full resize-none" :maxlength="maxLength"
                    v-model="(post.content as string)" placeholder="Write something..."></textarea>
                <p :class="post.content.length == maxLength ? 'text-red' : 'text-white'"
                    class="flex w-full justify-end pt-2 pr-2">{{ post.content.length }}/500</p>
            </div>
        </div>
        <div class="flex flex-col w-full h-auto pt-7 justify-center align-center">
            <p class="text-4xl font-semibold pb-3">Sources</p>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" v-model="post.isInformative">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-lg text-gray-900 dark:text-gray-300">Is this post informative?</span>
            </label>
        </div>
        <div
            class="flex flex-col h-full justify-center align-center overflow-y-scroll mt-5"
            :class="{
                'rounded-lg border-2 border-zinc-600 shadow-md shadow-black': post.isInformative && post.sources.length > 0,
            }"
        >
            <div
                v-if="post.isInformative"
                class="flex flex-col w-full h-full p-2"
            >
                <div v-for="(value, index) in post.sources" :key="index" class="flex w-full justify-center align-center mb-3">
                    <select
                        v-model="post.sources[index].type"
                        class="bg-gray-50 cursor-pointer border text-sm rounded-lg block w-1/4 dark:bg-stone-700 dark:bg-opacity-90 dark:text-slate-100 mr-2 mt-2 p-2.5 shadow-sm shadow-black"
                    >
                        <option value="Article">Article</option>
                        <option value="Book">Book</option>
                        <option value="Video">Video</option>
                    </select>

                    <div class="flex flex-col w-full h-full">
                        <div v-for="(field, fieldIndex) in sourceFields[post.sources[index].type]" :key="fieldIndex" class="w-full h-full mt-2">
                            <input
                                v-model="post.sources[index].data[field]" :placeholder="field"
                                class="w-full h-full rounded-lg bg-zinc-800 p-2 shadow-sm shadow-black"
                            />
                        </div>
                    </div>
                    <ion-icon :icon="trash" @click="post.sources.splice(index, 1); post.sources.splice(index, 1)"
                        class="text-4xl hover:text-5xl hover:cursor-pointer text-red-600 ml-2" />
                </div>
                <button
                    class="p-2 mt-2 w-full h-14 rounded-lg hover:bg-gray-700 hover:bg-opacity-70 active:bg-gray-600 active:bg-opacity-70 text-2xl"
                    @click.stop="post.sources.push({ type: 'Article', data: {} })"
                >
                    +
                </button>
            </div>
        </div>
        <div class="flex flex-row align-center justify-center mt-3 p-5">
            <button class="rounded-full w-36 h-14 text-slate-100 text-xl bg-gradient-to-r from-[#700000] via-[#7d0404] via-35% to-[#930600]"
            @click.stop="submitPost">Update</button>
        </div>
        <div v-if="error" class="text-red text-lg py-3">{{ error }}</div>
    </div>
</template>


<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon } from '@ionic/vue';
import { pencilSharp, trash, alertCircle } from 'ionicons/icons';
import { onMounted, ref, Ref, watch } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

import { Article, Book, Video } from '@/types/postTypes';

const router = useRouter();
const emit = defineEmits(['closeDialog']);

interface Sources {
    type: string,
    data: {
        [key: string]: string
    }
}

interface Post {
    _id: string,
    content: String,
    sources: [Sources],
    isInformative: Boolean
}

interface SourceTypes {
    [key: string]: string[]
}

const sourceFields: SourceTypes = {
    "Article": ["URL"],
    "Book": ["Title", "Author"],
    "Video": ["URL"]
};

const props = defineProps({
    postId: String
});

const post: Ref<Post> = ref({
    content: ""
} as unknown as Post);
const maxLength = 500;
const error = ref('');
const userId = sessionStorage.getItem("userId");

onMounted(async () => {
    post.value = await axios.get(`/post/${props.postId}`)
        .then((res) => res.data);
});

const submitPost = () => {
    const newInformative = post.value.sources
    .map((source) => {
        if (JSON.stringify(source.data) === '{}') {
            return undefined;
        }
        return source;
    })
    .filter((source) => source !== undefined)
    .length > 0;

    const newPost = {
        content: post.value.content,
        sources: post.value.sources,
        isInformative: newInformative,
        time: Date.now(),
    };

    axios.put(`/post/${props.postId}`, newPost)
    .then((res) => {
        console.log(res);
        console.log("Submitted: ", newPost);
    })
    .catch((error) => {
        console.log('the following error occured when trying to post a new deck', error);
    });

    emit('closeDialog');
};

</script>