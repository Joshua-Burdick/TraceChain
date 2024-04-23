<template>
    <div class="flex flex-col w-full h-full align-center">
        <div
            class="flex flex-row w-full h-auto py-7 bg-stone-800 bg-opacity-70 align-center justify-center text-6xl font-semibold">
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

        <!-- Community dropdown -->
        <div class="pt-5">
            <label for="communityDropdown" class="text-2xl font-semibold text-white">Post to a Community:</label>
                <select id="communityDropdown" v-model="selectedCommunity" class="mt-2 p-2 text-lg rounded-lg bg-gray-800 text-white">
                    <option value="" disabled>Select a community</option>
                    <option v-for="community in userCommunities" :key="community._id" :value="community._id">{{ community.name }}</option>
                </select>
        </div>

        <div class="flex flex-col w-full h-auto pt-7 justify-center align-center">
            <p class="text-4xl font-semibold pb-3">Sources</p>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" v-model="isInformative">
                <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
                <span class="ms-3 text-lg text-gray-900 dark:text-gray-300">Is this post informative?</span>
            </label>
        </div>
        <div class="flex flex-col lg:w-1/2 h-full justify-center align-center overflow-y-scroll mt-5" :class="{
            'rounded-lg border-2 border-zinc-600 shadow-md shadow-black': isInformative && sources.length > 0,
        }">
            <div v-if="isInformative" class="flex flex-col w-full h-full p-2">
                <div v-for="(value, index) in sources" :key="index" class="flex w-full justify-center align-center mb-3">
                    <select v-model="sourceTypes[index]"
                        class="bg-gray-50 cursor-pointer border text-sm rounded-lg block w-1/4 dark:bg-stone-700 dark:bg-opacity-90 dark:text-slate-100 mr-2 mt-2 p-2.5 shadow-sm shadow-black">
                        <option value="Article">Article</option>
                        <option value="Image">Image</option>
                        <option value="Book">Book</option>
                        <option value="Video">Video</option>
                    </select>

                    <div class="flex flex-col w-full h-full">
                        <div v-for="(field, fieldIndex) in sourceFields[sourceTypes[index]]" :key="fieldIndex"
                            class="w-full h-full mt-2">
                            <template v-if="field !== 'Upload From Local Machine'">
                                <input v-model="sources[index][field]" :placeholder="field"
                                    class="w-full h-full rounded-lg bg-zinc-800 p-2 shadow-sm shadow-black" />
                            </template>
                            <template v-else>
                                <!-- <button type="button"
                                    class="w-full h-full rounded-lg bg-zinc-800 p-2 shadow-sm shadow-black"
                                    accept="image/jpeg, image/png" @click="handleButtonClick">
                                    Upload Image
                                </button> -->
                                <input id="fileInput" name="fileInput" ref="fileInput" type="file" :placeholder="field" 
                                    multiple class="w-full h-full rounded-lg bg-zinc-800 p-2 shadow-sm shadow-black" />
                            </template>
                        </div>
                    </div>
                    <ion-icon :icon="trash" @click="sourceTypes.splice(index, 1); sources.splice(index, 1)"
                        class="text-4xl hover:text-5xl hover:cursor-pointer text-red-600 ml-2" />
                </div>
                <button
                    class="p-2 mt-2 w-full h-14 rounded-lg hover:bg-gray-700 hover:bg-opacity-70 active:bg-gray-600 active:bg-opacity-70 text-2xl"
                    @click.stop="sourceTypes.push('Article'); sources.push({})">
                    +
                </button>
            </div>
        </div>
        <div class="flex flex-row align-center justify-center mt-3 p-5">
            <button class="rounded-full w-36 h-14 text-slate-100 text-xl"
                :class="{
                    'bg-gradient-to-r from-[#700000] via-[#7d0404] via-35% to-[#930600]': !loading,
                    'bg-gray-500': loading
                }"
            @click.stop="submitPost">Post</button>
        </div>
        <div v-if="error" class="text-red text-lg py-3">{{ error }}</div>
    </div>
</template>


<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon } from '@ionic/vue';
import { pencilSharp, trash, alertCircle } from 'ionicons/icons';
import { ref, Ref, watch, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

import { Article, Book, Video } from '@/types/postTypes';
import CommunityList from '../Communities/CommunityList.vue';

const router = useRouter();

const userId = sessionStorage.getItem("userId");
const selectedCommunity: Ref<string> = ref(''); 
const postContent = ref('');
const isInformative = ref(true);
const sourceTypes: Ref<string[]> = ref(['Article']);
const sources: Ref<SourceContent[]> = ref([{}]);
const fileInput = ref(null);
//const photoHashes: String[] = [];
const photosSet: Ref<string[]> = ref([]);

interface FileInputElement {
    readonly inputElement: HTMLInputElement;
}
const userCommunities = ref<Community[]>([]); 

const updateSelectedCommunity = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    selectedCommunity.value = target.value;
};

interface SourceTypes {
    [key: string]: string[]
}

interface SourceContent {
    [key: string]: string
}

interface Community {
    _id: string;
    name: string;
}

const sourceFields: SourceTypes = {
    "Article": ["URL"],
    "Image": ["Upload From Local Machine"],
    "Book": ["Title", "Author"],
    "Video": ["URL"]
};

const maxLength = 500;
const error = ref('');
const loading = ref(false);

const handleImages = async (fileElement: HTMLInputElement | null, postId: string) => {
    console.log("handleFileUpload");
    
    const files: any[] = fileElement?.files as any;
    console.log(files);
    let promises = [];

    let formData = new FormData();

    promises = Array.from(files).map(async (file) => {
        formData.append('file', file);
        
        try {
            const response = await axios.post(`http://localhost:1776/api/upload/${postId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then((res) => res.data)
            .catch((err) => console.log(err));

            const hash = response.image.hash;
            photosSet.value.push(hash);
            console.log("hash: ", hash);
        } catch (err) {
            console.error("The following error happened in axios.post for an image: ", err);
        }
    });

    // Wait for all promises to resolve before continuing
    await Promise.all(promises);

    console.log("after Promise.all, here is photosSet.value: ", photosSet.value);
}


const submitPost = async () => {
    loading.value = true;
    error.value = '';

    const fileElement: HTMLInputElement | null = document.getElementById('fileInput') as HTMLInputElement;

    const reduced = sources.value
        .map((source, ind) => {
            return {
                type: sourceTypes.value[ind],
                data: {
                    ...source
                }
            }
        })
        .map((source, ind) => {
            if (JSON.stringify(source.data) === '{}') {
                return undefined;
            }
            return source;
        })
        .filter((source) => source !== undefined);

    if (isInformative.value) {
        if (reduced.length === 0 && fileElement.files?.length === 0) {
            error.value = 'Please add at least one source.';
            loading.value = false;
            return;
        }
    }
    
    const post = {
      userId: userId,
      content: postContent.value,
      sources: [... new Set(reduced)],
      parentPostId: "",
      isInformative: isInformative.value,
      isEdited: false,
      time: Date.now(),
      communityId: selectedCommunity.value
    };

    const postId = await axios.post(`http://localhost:1776/api/post/${userId}`, post)
        .then((res) => res.data)
        .catch((error) => {
            console.log('the following error occured when trying to post a new post', error);
        });
    
    await handleImages(fileElement, postId);
    await axios.post(`/post/${postId}/images`, {
        photos: photosSet.value
    });

    sources.value = [];
    sourceTypes.value = [];
    postContent.value = '';

    setTimeout(() => {
        loading.value = false;
        router.push({ path: `/profile/${userId}/redirect` });
    }, 100);
};

onMounted(async () => {
    try {
        const response = await axios.get(`/community/user/${userId}`);
        userCommunities.value = response.data;
    } catch (error) {
        console.error('Error fetching user communities:', error);
    }
});

</script>