<template>
    <ion-page>
        <ion-header class="flex items-center justify-center">
            <ion-toolbar class="flex items-center justify-center">
                <ion-title class="flex items-center justify-center text-2xl">Profile</ion-title>
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
            <div class="grid grid-cols-10 h-full">

                <!-- 20% of the screen is this column, which holds the menu for a profile -->
                <div class="col-span-2 flex items-center justify-center">
                    <ion-list class="w-full bg-transparent">
                        <ion-item class="cursor-pointer">
                            <h1 class="ion-text-wrap text-lg">Posts</h1>
                        </ion-item>
                        <ion-item class="cursor-pointer">
                            <h1 class="ion-text-wrap text-lg">Media</h1>
                        </ion-item>
                        <ion-item class="cursor-pointer">
                            <h1 class="ion-text-wrap text-lg">Communities</h1>
                        </ion-item>
                    </ion-list>
                </div>

                <!-- 20% of the screen is this column, which holds profile and its   -->
                <div class="col-span-8 whitespace-normal">
                    <div class="max-w-340px flex justify-center items-center flex-col mt-10 whitespace-normal">
                        <!-- Profile Image -->
                        <div class="text-center block overflow-hidden mb-5">
                            <!-- <ion-img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Frog_on_palm_frond.jpg"
                                alt="Profile Image"></ion-img> -->
                            <ion-avatar class="cursor-pointer max-w-full">
                                <!-- <img src="https://i.scdn.co/image/ab6761610000e5ebba025c8f62612b2ca6bfa375"
                                    alt="Profile Image"> -->
                            </ion-avatar>
                        </div>


                        <!-- Username -->
                        <div class="text center block">
                            <ion-label class="text-3xl font-semibold" style="font-size: 1.75rem;"
                                v-model="username">{{ username }}</ion-label>
                        </div>

                        <!-- User's @ tag' -->
                        <div class="text center block ">
                            <ion-label class="text-lg" style="font-size: 1.5rem;">{{ usertag }}</ion-label>
                        </div>

                        <!-- Communities User is involved in -->
                        <div class="text center block mb-5">
                            <ion-label class="text-lg" style="font-size: 1.25rem;">Involved in {{ numCommunities }}
                                communities.</ion-label>
                        </div>

                        <!-- Recent posts section -->
                        <ion-list class="max-w-full h-screen overflow-hidden bg-transparent">
                            <ion-item class="cursor-pointer max-w-full overflow-hidden md:my-5">
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
                            </ion-item>
                            <!-- on screens with 280px width this one is not appearing -->
                            <ion-item class="cursor-pointer max-w-full whitespace-normal overflow-hidden">
                                <ion-label
                                    class="sm:text-xs md:text-lg lg:text-2xl ion-text-wrap max-w-full whitespace-normal overflow-hidden sm:my-8 md:my-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minima porro neque
                                    quis hic provident suscipit facilis, dolorum perferendis nesciunt nihil aut perspiciatis
                                    nobis iste amet eaque recusandae illo reprehenderit.
                                </ion-label>
                            </ion-item>
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

const username = ref("initial");
const usertag = ref("initial");
const numCommunities = ref(3);


onMounted(async () => {
    const response = await axios.get("/account/65318daae491ca0391dc0805").then((res) => res.data);
    username.value = response.username;
    usertag.value = response.usertag;
    console.log(response);
});


</script>