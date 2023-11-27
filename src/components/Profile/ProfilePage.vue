<template>
    <div class="h-full text-slate-50 bg-[#141313]">
        <div class="whitespace-normal bg-[#141313]">
            <div class="max-w-340px flex justify-center items-center flex-col pt-10 bg-[#141313] whitespace-normal">
                <!-- Profile Image -->
                <div class="text-center block overflow-hidden mb-5">
                    <!-- <ion-img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Frog_on_palm_frond.jpg"
                        alt="Profile Image"></ion-img> -->
                    <ion-avatar class="cursor-pointer max-w-full">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a2185d2d-96b8-43e6-89e9-0eaf5167af92/dfrv4fo-671aa9c2-49e9-491a-9550-9e4fa9575542.png/v1/fill/w_718,h_761,q_80,strp/gumball_s_funny_face_by_butterwhip2003_dfrv4fo-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzYxIiwicGF0aCI6IlwvZlwvYTIxODVkMmQtOTZiOC00M2U2LTg5ZTktMGVhZjUxNjdhZjkyXC9kZnJ2NGZvLTY3MWFhOWMyLTQ5ZTktNDkxYS05NTUwLTllNGZhOTU3NTU0Mi5wbmciLCJ3aWR0aCI6Ijw9NzE4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Sl96ojbOS_db8IT5Xe7JdxPTFJ5T5fz_9AuIvtyD18I"
                            alt="Profile Image">
                    </ion-avatar>
                </div>


                <!-- Username -->
                <div class="text center block">
                    <ion-label class="text-3xl font-semibold" style="font-size: 1.75rem;" v-model="username">{{
                        username }}</ion-label>
                </div>

                <!-- User's @ tag' -->
                <div class="text center block ">
                    <ion-label class="text-lg" style="font-size: 1.5rem;">@{{ usertag }}</ion-label>
                </div>

                <!-- Communities User is involved in -->
                <div class="text center block mb-10">
                    <ion-label class="text-lg" style="font-size: 1.25rem;">Involved in {{ numCommunities }}
                        communities.</ion-label>
                </div>

                <!-- 20% of the screen is this column, which holds the menu for a profile -->
                <div class="flex items-center justify-between">
                    <ul class="flex items-center justify-between w-full bg-transparent">
                        <li class="cursor-pointer  hover:transition-opacity hover:opacity-30">
                            <h1 class="ion-text-wrap text-lg mx-10">Posts</h1>
                        </li>
                        <li class="cursor-pointer hover:transition-opacity hover:opacity-30">
                            <h1 class="ion-text-wrap text-lg mx-10">Media</h1>
                        </li>
                        <li class="cursor-pointer hover:transition-opacity hover:opacity-30">
                            <h1 class="ion-text-wrap text-lg mx-10">Communities</h1>
                        </li>
                    </ul>
                </div>

                <br>

                <!-- Recent posts section -->
                <ion-list class="w-1/2 h-screen overflow-hidden bg-[#141313]">
                    <div class="bg-[#141313]">
                        <li class="cursor-pointer w-full bg-[#141313]" v-for="post in posts">
                            <div
                                class="block sm:text-sm md:text-lg lg:text-lg ion-text-wrap max-w-full my-10 bg-[#141313] whitespace-normal overflow-hidden sm:my-8 md:my-5">
                                <h1 class="text-white text-2xl">
                                    {{ post.content }}
                                </h1>
                                <p class="text-sm mt-3 text-white">on {{ post.time }}</p>
                                <LikesDislikes :post="post"/>
                            </div>
                        </li>
                    </div>
                </ion-list>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonLabel, IonList, IonItem, IonAvatar,} from '@ionic/vue';
import axios from "axios";
import { ref, onMounted } from 'vue';
import LikesDislikes from '@/components/LikesDislikes.vue';

interface Post {
    time: Date,
    content: String,
    sources: [String],
    likes: Number,
    dislikes: Number,
}

const username = ref("initial");
const usertag = ref("initial");
const numCommunities = ref(3);  
const posts = ref<Array<Post>>([]);

onMounted(async () => {
    const userResponse = await axios.get("/account/65318daae491ca0391dc0805").then((res) => res.data);
    username.value = userResponse.username;
    usertag.value = userResponse.usertag;
    // console.log("userResponse", userResponse);

    const postsResponse = await axios.get('post/65318daae491ca0391dc0805').then((res) => posts.value = res.data);
    // console.log("postsResponse", postsResponse);
    // console.log("type of postsResponse", typeof(postsResponse));
    console.log("posts", posts);
    posts.value.forEach(post => {
        console.log(post, " has type ", typeof (post));
        const datePosted = new Date(post.time).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
        post.time = post.time as Date;
        //post.time = datePosted;
    });
});
</script>