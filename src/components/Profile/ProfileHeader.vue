<template>
    <div class="relative">
        <div class="absolute w-full h-full bg-gradient-to-r from-[#2f0000] via-[#790909] via-35% -inset-1 blur-sm z-0"></div>
        <div class="flex flex-row w-full h-full z-20">
            <!-- Profile Image -->
            <div class="flex align-center justify-center lg:ml-7 lg:mt-7 m-3 shadow-lg shadow-black rounded-full lg:h-60 h-36 lg:w-60 w-36">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                    alt="Profile Image"
                    class="rounded-full lg:h-60 h-36 lg:w-60 w-36"
                >
            </div>
            <div class="flex flex-col lg:ml-2">
                <div class="flex lg:h-14 h-10"></div>
                <!-- Display Name -->
                <div class="font-semibold lg:text-6xl text-2xl">
                    {{ displayName }}
                </div>
                <!-- User's @ tag' -->
                <div class="lg:text-2xl text-sm ml-2">
                    @{{ usertag }}
                </div>

                <div class="flex flex-row text-md mt-7 ml-2">
                    <div class="flex flex-col align-center mr-5 hover:bg-slate-700 hover:bg-opacity-70 rounded-lg p-3 cursor-pointer">
                        <p>{{ numFollowers ? numFollowers : 0 }}</p>
                        <p>Followers</p>
                    </div>
                    <div class="flex flex-col align-center mr-5 hover:bg-slate-700 hover:bg-opacity-70 rounded-lg p-3 cursor-pointer">
                        <p>{{ numFollowing ? numFollowing : 0 }}</p>
                        <p>Following</p>
                    </div>
                    <div class="flex flex-col align-center hover:bg-slate-700 hover:bg-opacity-70 rounded-lg p-3 cursor-pointer">
                        <p>{{ numCommunities ? numCommunities : 0 }}</p>
                        <p>Communities</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonLabel, IonList, IonItem, IonAvatar, IonIcon} from '@ionic/vue';

defineProps({
    displayName: String,
    usertag: String,
    numFollowers: Number,
    numFollowing: Number,
    numCommunities: Number
})
</script>