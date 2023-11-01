<template>
    <ion-page>
        <ion-header class="">
            <ion-toolbar class="">
                <ion-title class=""></ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <!-- <ion-title size="xx-large">profile
                    </ion-title> -->
                </ion-toolbar>
            </ion-header>

            <!-- <div class="rounded-lg w-50">
                <ion-img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Frog_on_palm_frond.jpg" alt="A frog">
                </ion-img>
            </div> -->

            <!-- Divided the screen into 2 columns, sum of both columns = 100% -->
            <div class="h-full">

                <!-- 20% of the screen is this column, which holds profile and its   -->
                <div class="whitespace-normal">
                    <div class="max-w-340px flex justify-center items-center flex-col mt-10 whitespace-normal">
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

                        <!-- Recent posts section -->
                        <ion-list class="w-1/2 h-screen overflow-hidden bg-transparent">
                            <ion-item class="cursor-pointer w-full" v-for="post in posts">
                                <div
                                    class="block sm:text-sm md:text-lg lg:text-lg ion-text-wrap max-w-full whitespace-normal overflow-hidden sm:my-8 md:my-5">
                                    <h1>
                                        {{ post.content }}
                                    </h1>
                                    <p class="text-xs mt-3">on {{ post.time }}</p>
                                </div>
                            </ion-item>
                            <!-- <ion-item class="cursor-pointer max-w-full overflow-hidden md:my-5">
                                <ion-label
                                    class="sm:text-sm md:text-2
                                    xl lg:text-3xl ion-text-wrap max-w-full whitespace-normal overflow-hidden sm:my-8 md:my-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod, nesciunt
                                    reiciendis laborum possimus, deserunt eius iusto qui culpa animi consequatur assumenda
                                    incidunt dolor, non perferendis et doloremque alias odio!
                                </ion-label>
                            </ion-item>
                            <ion-item class="cursor-pointer max-w-full whitespace-normal overflow-hidden">
                                <ion-label
                                    class="sm:text-xs md:text-lg lg:text-2xl ion-text-wrap max-w-full whitespace-normal overflow-hidden sm:my-8 md:my-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, distinctio magni
                                    optio cumque id doloremque porro, harum enim consectetur reprehenderit ipsa hic voluptas
                                    blanditiis quis, nemo cupiditate ea aperiam exercitationem.
                                </ion-label>
                            </ion-item> -->
                            <!-- on screens with 280px width this one is not appearing -->
                            <!-- <ion-item class="cursor-pointer max-w-full whitespace-normal overflow-hidden">
                                <ion-label
                                    class="sm:text-xs md:text-lg lg:text-2xl ion-text-wrap max-w-full whitespace-normal overflow-hidden sm:my-8 md:my-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minima porro neque
                                    quis hic provident suscipit facilis, dolorum perferendis nesciunt nihil aut perspiciatis
                                    nobis iste amet eaque recusandae illo reprehenderit.
                                </ion-label>
                            </ion-item>  -->
                        </ion-list>
                    </div>
                </div>
            </div>

        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonLabel, IonList, IonItem, IonAvatar } from '@ionic/vue';
import axios from "axios";
import { ref, onMounted } from 'vue';

interface Post {
    time: Date,
    content: String,
    sources: [String]
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
        post.time = datePosted;
    });
});


</script>