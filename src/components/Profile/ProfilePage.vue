<template>
    <div class="flex flex-col w-full h-full overflow-y-scroll">
        <ProfileHeader :displayName="username" :usertag="usertag" :numCommunities="0" class="flex h-auto ml-1 lg:pb-5 sm:max-md:pb-1"/>
        <div class="flex text-xl bg-slate-800 bg-opacity-40 text-slate-100 justify-center border-b-2 border-slate-500 py-2">
            <div>
                <button
                    class="mr-10 hover:bg-stone-700 hover:bg-opacity-70 active:bg-stone-800 active:bg-opacity-80 rounded-lg p-2 cursor-pointer"
                    :class="{
                        'underline underline-offset-4 decoration-2 decoration-[#096b8e] text-[#0f8ebb] font-semibold': selectedTab === 'Posts'
                    }"
                    @click="selectedTab = 'Posts'"
                >
                    Posts
                </button>
                <button
                class="mr-10 hover:bg-stone-700 hover:bg-opacity-70 active:bg-stone-800 active:bg-opacity-80 rounded-lg p-2 cursor-pointer"
                    :class="{
                        'underline underline-offset-4 decoration-2 decoration-[#096b8e] text-[#0f8ebb] font-semibold': selectedTab === 'Media'
                    }"
                    @click="selectedTab = 'Media'"
                >
                    Media
                </button>
                <button
                    class="hover:bg-stone-700 hover:bg-opacity-70 active:bg-stone-800 active:bg-opacity-80 rounded-lg p-2 cursor-pointer"
                    :class="{
                        'underline underline-offset-4 decoration-2 decoration-[#096b8e] text-[#0f8ebb] font-semibold': selectedTab === 'Communities'
                    }"
                    @click="selectedTab = 'Communities'"
                >
                    Communities
                </button>
            </div>
        </div>
        <div
            class="flex w-full justify-center pt-3"
            :class="{
                'h-full' : selectedTab !== 'Posts'
            }"
        >
            <UserPostListEditable v-if="selectedTab === 'Posts' && isThisUser" class="flex flex-row"/>
            <UserPostList v-else-if="selectedTab === 'Posts' && !isThisUser" class="flex flex-row"/>
            <UserMediaList v-else-if="selectedTab === 'Media'" class="flex flex-row"/>
            <UserCommunityList v-else-if="selectedTab === 'Communities'" class="flex flex-row"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonLabel, IonList, IonItem, IonAvatar, IonIcon} from '@ionic/vue';
import axios from "axios";
import { ref, onMounted, Ref } from 'vue';
import ProfileHeader from '@/components/Profile/ProfileHeader.vue';
import UserPostList from '@/components/Post/UserPostList.vue';
import UserPostListEditable from '@/components/Post/UserPostListEditable.vue';
import UserMediaList from '@/components/Media/UserMediaList.vue';
import UserCommunityList from '@/components/Communities/UserCommunityList.vue';

const username = ref("initial");
const usertag = ref("initial");
const selectedTab: Ref<"Posts" | "Media" | "Communities"> = ref("Posts");
const isThisUser = ref(false);

onMounted(async () => {
    const userResponse = await axios.get("/account/65318daae491ca0391dc0805").then((res) => res.data);
    username.value = userResponse.username;
    usertag.value = userResponse.usertag;
});
</script>