<template>
    <div class="flex flex-col min-[1000px]:w-1/3 w-full ml-10">
        <div class="flex flex-row lg:h-1/6 align-center justify-center text-6xl font-semibold">
            Make a Post
            <ion-icon :icon="pencilSharp" class="ml-2" />
        </div>
        <div class="flex flex-row lg:h-2/3 h-5/6">
            <div class="px-2 py-2 w-full rounded-lg border-2 border-zinc-600 bg-zinc-800 mb-5">
            <textarea class="focus:outline-none text-white text-lg w-full h-full resize-none" :maxlength="maxLength"
                v-model="postContent" placeholder="Write something..."></textarea>
            <p :class="postContent.length == maxLength ? 'text-red' : 'text-white'"
                class="flex w-full justify-end pt-1 pr-2">{{ postContent.length }}</p>
            </div>
        </div>
        <div class="flex flex-row">
            <div class="flex flex-col lg:w-full"></div>
            <button class="mt-3 rounded-full lg:w-20 w-full h-10 bg-orange-500 hover:bg-orange-600 active:bg-orange-700"
            @click.stop="submitPost">Post</button>
        </div>
        <div class="text-red">{{ error }}</div>
        </div>
        <div class="flex flex-col lg:w-1/3">
        <div class="flex flex-row lg:h-1/6"></div>
        <div class="flex flex-row lg:h-2/3 h-5/6">
            <div class="ml-5 px-1 py-1 w-full">
            <p class="text-2xl font-semibold">Sources</p>
            <ion-toggle v-model="isInformative" label-placement="end" class="py-5">Is this source
                informative?</ion-toggle>
            <br />
            <button v-if="isInformative" class="mb-2 p-2 h-10 hover:bg-gray-700 active:bg-gray-600"
                @click.stop="sources.push('')">+ Add Source</button>
            <div v-if="isInformative" class="p-2 h-2/3 w-2/3 overflow-scroll rounded-lg border-2 border-zinc-600">
                <div v-for="(value, index) in sources">
                <!-- <label for="source-select" class="text-sm">Type</label> -->
                <select name="source-select" class="bg-zinc-600 hover:bg-zinc-700 rounded-lg p-2 hover:cursor-pointer">
                    <option selected>Article</option>
                    <option>Book</option>
                    <option>Video</option>
                </select>
                <input type="text"
                    class="p-2 m-2 rounded-lg border-2 focus:outline-zinc-600 outline-offset-0 border-zinc-600 bg-zinc-800 outline-none"
                    v-model="sources[index]" placeholder="Source URL" />
                <ion-icon :icon="trash" @click="sources.splice(index, 1)"
                    class="hover:text-xl hover:cursor-pointer text-red-500" />
                </div>
                <br />
            </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue';
import axios from 'axios';

// import { Article, Book, Video } from '@/types/postTypes';

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon } from '@ionic/vue';
import { pencilSharp, trash, alertCircle } from 'ionicons/icons';

const tempUserId = `65318daae491ca0391dc0805`;

const postContent = ref('');
const isInformative = ref(true);
const sources = ref(['']);

const maxLength = 255;

const error = ref('');

const submitPost = () => {
  if (isInformative.value) {
    if (sources.value.length === 0 || (sources.value.length === 1 && sources.value[0] === '')) {
      error.value = 'Please add at least one source.';
      return;
    }
  }

  error.value = '';

  const post = {
    userId: tempUserId,
    content: postContent.value,
    sources: [... new Set(sources.value)],
    isInformative: isInformative.value,
    isEdited: false,
    timestamp: new Date().toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false }),
  };

  console.log("post content: ", post.content);

  axios.post(`/post/${tempUserId}`, post)
    .then((res) => {
      console.log(res);
      console.log("Submitted: ", post);
    })
    .catch((error) => {
      console.log('the following error occured when trying to post a new deck', error);
    })
};

</script>