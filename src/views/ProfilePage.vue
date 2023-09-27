<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Profile</ion-title>
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

            <div class="grid grid-cols-10 h-full">
                <div class="col-span-2 flex items-center justify-center">
                    <ion-list class="w-full">
                        <ion-item class="">
                            <h1 class="ion-text-wrap">Posts</h1>
                        </ion-item>
                        <ion-item class="">
                            <h1 class="ion-text-wrap">Media</h1>
                        </ion-item>
                        <ion-item class="">
                            <h1 class="ion-text-wrap">Communities</h1>
                        </ion-item>
                    </ion-list>
                </div>
                <div class="col-span-8 whitespace-normal">
                    <div class="max-w-full flex justify-center items-center flex-col mt-10 whitespace-normal">
                        <!-- Profile Image -->
                        <div class="text-center block overflow-hidden mb-5">
                            <!-- <ion-img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Frog_on_palm_frond.jpg"
                                alt="Profile Image"></ion-img> -->
                            <ion-avatar class="max-w-full">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Frog_on_palm_frond.jpg"
                                    alt="Profile Image">
                            </ion-avatar>
                        </div>


                        <!-- Username -->
                        <div class="text center block">
                            <ion-label class="text-3xl font-semibold" v-model="username">USRENAME5125</ion-label>
                        </div>

                        <!-- User's @ tag' -->
                        <div class="text center block ">
                            <ion-label class="text-lg">@usertag123</ion-label>
                        </div>

                        <!-- Communities User is involved in -->
                        <div class="text center block mb-5">
                            <ion-label class="text-lg">Involved in {{ numCommunities }} communities.</ion-label>
                        </div>

                        <!-- Recent posts section -->
                        <ion-list class="max-w-full h-screen overflow-hidden">
                            <ion-item class="max-w-full overflow-hidden md:my-5">
                                <ion-label class="ion-text-wrap max-w-full whitespace-normal overflow-hidden text- sm:my-7 md:my-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod, nesciunt
                                    reiciendis laborum possimus, deserunt eius iusto qui culpa animi consequatur assumenda
                                    incidunt dolor, non perferendis et doloremque alias odio!
                                </ion-label>
                            </ion-item>
                            <ion-item class="max-w-full whitespace-normal overflow-hidden">
                                <ion-label class="ion-text-wrap max-w-full whitespace-normal overflow-hidden sm:my-7 md:my-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, distinctio magni
                                    optio cumque id doloremque porro, harum enim consectetur reprehenderit ipsa hic voluptas
                                    blanditiis quis, nemo cupiditate ea aperiam exercitationem.
                                </ion-label>
                            </ion-item>
                            <ion-item class="max-w-full whitespace-normal overflow-hidden">
                                <ion-label class="ion-text-wrap max-w-full whitespace-normal overflow-hidden sm:my-7 md:my-5">
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

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonLabel, IonList, IonItem, IonAvatar } from '@ionic/vue';
export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonImg,
        IonLabel,
        IonList,
        IonItem,
        IonAvatar
    },
    data() {
        return {
            username: "initial",
            numCommunities: 3
        };
    }
};
</script>