<template>
    <div class="flex flex-col w-full h-full text-slate-100 align-center">
        <div v-if="$vuetify.display.mdAndDown" class="flex relative w-full h-full align-center py-5">
            <div class="absolute w-full h-full bg-stone-800 bg-opacity-70 blur-sm z-0"></div>
            <div class="flex flex-row w-full h-full align-center justify-center z-20">
                <img aria-hidden="true" src="/TraceChain.svg" class="w-20"/>
                <p class="text-4xl font-semibold">TraceChain</p>
            </div>
        </div>
        <div class="flex flex-row w-full h-full py-7 justify-center bg-stone-800 bg-opacity-50 text-8xl font-semibold">
            For You
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