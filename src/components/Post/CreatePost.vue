<template>
    <div class="flex flex-col w-full h-full align-center">
        <div class="flex flex-row w-full h-auto py-7 bg-stone-800 bg-opacity-70 align-center justify-center text-6xl font-semibold">
            Make a Post
            <ion-icon :icon="pencilSharp" class="ml-2" />
        </div>
        <div class="flex flex-col align-center pt-15 w-full h-full">
            <div class="px-2 py-2 w-3/4 rounded-lg bg-zinc-800 h-full shadow-md shadow-black">
                <textarea class="focus:outline-none text-white text-lg w-full h-full resize-none" :maxlength="maxLength"
                    v-model="postContent" placeholder="Write something..."></textarea>
                <p :class="postContent.length == maxLength ? 'text-red' : 'text-white'"
                    class="flex w-full justify-end pt-2 pr-2">{{ postContent.length }}/500</p>
            </div>
        </div>
        <div class="flex flex-col w-full h-auto pt-7 justify-center align-center">
            <p class="text-4xl font-semibold pb-3">Sources</p>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" v-model="isInformative">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-lg text-gray-900 dark:text-gray-300">Is this post informative?</span>
            </label>
        </div>
        <div
            class="flex flex-col w-1/3 h-full justify-center align-center overflow-y-scroll mt-5"
            :class="{
                'rounded-lg border-2 border-zinc-600 shadow-sm shadow-black': isInformative && sources.length > 0,
            }"
        >
            <div
                v-if="isInformative"
                class="flex flex-col w-full h-full p-2"
            >
                <div v-for="(value, index) in sources" :key="index" class="flex w-full justify-center align-center">
                    <select
                        v-model="sourceTypes[index]"
                        class="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="article">Article</option>
                        <option value="book">Book</option>
                        <option value="video">Video</option>
                    </select>

                    <div class="flex flex-col w-full h-full">
                        <div v-for="(field, fieldIndex) in sourceFields[sourceTypes[index]]" :key="fieldIndex" class="w-full h-full border-2 border-green-500">
                            <!-- <input
                                v-model="sources[index][field]" placeholder="test"/> -->
                            {{ field }}
                        </div>
                    </div>
                    <ion-icon :icon="trash" @click="sources.splice(index, 1)"
                        class="text-4xl hover:cursor-pointer text-red-500" />
                </div>
                <button
                    class="p-2 w-full h-14 rounded-lg hover:bg-gray-700 hover:bg-opacity-70 active:bg-gray-600 active:bg-opacity-70 text-2xl"
                    @click.stop="sourceTypes.push('article'); sources.push({})"
                >
                    +
                </button>
            </div>
        </div>
        <div class="flex flex-row align-center justify-center p-5">
            <button class="rounded-full w-36 h-14 text-slate-100 text-xl bg-gradient-to-r from-[#700000] via-[#7d0404] via-35% to-[#930600]"
            @click.stop="submitPost">Post</button>
        </div>
    </div>
</template>


<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon } from '@ionic/vue';
import { pencilSharp, trash, alertCircle } from 'ionicons/icons';
import { ref, Ref, watch } from 'vue';
import axios from 'axios';

import { Article, Book, Video } from '@/types/postTypes';

const userId = sessionStorage.getItem("userId");
const postContent = ref('');
const isInformative = ref(true);
const sourceTypes: Ref<string[]> = ref(['article']);
const sources: Ref<object[]> = ref([{}]);

interface SourceTypes {
    [key: string]: string[]
}

const sourceFields: SourceTypes = {
    "article": ["url"],
    "book": ["title", "author"],
    "video": ["url"]
};

const maxLength = 500;

const error = ref('');

const submitPost = () => {
//   if (isInformative.value) {
//     if (sources.value.length === 0 || (sources.value.length === 1 && sources.value[0] === '')) {
//       error.value = 'Please add at least one source.';
//       return;
//     }
//   }

//   error.value = '';

//   const post = {
//     userId: userId,
//     content: postContent.value,
//     sources: [... new Set(sources.value)],
//     isInformative: isInformative.value,
//     isEdited: false,
//     timestamp: new Date().toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false }),
//   };

//   console.log("post content: ", post.content);

//   axios.post(`/post/${userId}`, post)
//     .then((res) => {
//       console.log(res);
//       console.log("Submitted: ", post);
//     })
//     .catch((error) => {
//       console.log('the following error occured when trying to post a new deck', error);
//     })
};

</script>