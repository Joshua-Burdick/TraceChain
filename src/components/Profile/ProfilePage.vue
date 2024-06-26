<template>
    <div class="flex flex-col w-full h-full overflow-y-scroll">
        <ProfileHeader :displayName="user.username" :usertag="user.usertag" :bio="user.bio" :numFollowers="user.followers.length" :numFollowing="user.following.length" :numCommunities="0" class="flex h-auto ml-1 lg:pb-5 sm:max-md:pb-1"/>
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
import { ref, Ref, onMounted, onBeforeUpdate } from 'vue';
import ProfileHeader from '@/components/Profile/ProfileHeader.vue';
import UserPostList from '@/components/Post/UserPostList.vue';
import UserPostListEditable from '@/components/Post/UserPostListEditable.vue';
import UserMediaList from '@/components/Media/UserMediaList.vue';
import UserCommunityList from '@/components/Communities/UserCommunityList.vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

type User = {
    username: string,
    usertag: string,
    followers: Array<string>,
    following: Array<string>,
    bio: string
}

const user: Ref<User> = ref({
    username: "",
    usertag: "",
    followers: [],
    following: [],
    bio: ""
})
const selectedTab: Ref<"Posts" | "Media" | "Communities"> = ref("Posts");
const userId = ref(sessionStorage.getItem("userId") || (localStorage.getItem("userId)"))) ?? "";
const isThisUser = ref(route.params.id === userId.value);

onMounted(async () => {
    const userResponse = await axios.get(`account/${route.params.id}`)
        .then((res) => res.data)
        .catch();
    
    user.value = userResponse ?? {
        username: "deleted",
        usertag: "deleted-user",
        followers: [],
        following: [],
        bio: ""
    };
});
</script>