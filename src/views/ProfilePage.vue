<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>what is this</ion-title>
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
                <div class="col-span-1 bg-red-800"> </div>
                <div class="col-span-9 bg-yellow-800">
                    <div class="flex justify-center items-center flex-col">
                        <!-- Profile Image -->
                        <div class="text-center block w-20 h-20 rounded-full">
                            <ion-img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Frog_on_palm_frond.jpg"
                                alt="Profile Image"></ion-img>
                        </div>


                        <!-- Username -->
                        <div class="text center block">
                            <ion-label class="text-xl">USRENAME</ion-label>
                        </div>

                        <!-- User's @ tag' -->
                        <div class="text center block ">
                            <ion-label class="text-lg">@usertag123</ion-label>
                        </div>
                    </div>
                </div>
            </div>

        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonLabel } from '@ionic/vue';
export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonImg,
        IonLabel,
    },
};
</script>