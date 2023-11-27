<template>
    <div class="flex flex-col align-center bg-stone-800 min-[1000px]:h-full max-[999px]:h-0 max-[999px]:w-0 text-slate-50">
        <div class="mt-10 mb-20">
            <ion-label class="text-4xl" position="floating">
                <ion-icon aria-hidden="true" src="/favicon.png" class="bg-red-600"/>
                TraceChain
            </ion-label>
        </div>

        <button @click.stop="$router.push({ path: '/feed' })" class="my-2 p-3 rounded-full hover:bg-zinc-700">
            <ion-label class="text-4xl" position="floating">
                <ion-icon aria-hidden="true" :icon="homeOutline" />
                Feed
            </ion-label>
        </button>

        <button @click.stop="$router.push({ path: '/profile' })" class="my-2 p-3 rounded-full hover:bg-zinc-700">
            <ion-label class="text-4xl" position="floating">
                <ion-icon aria-hidden="true" :icon="personCircleOutline" />
                Profile
            </ion-label>
        </button>

        <div class="flex flex-col h-[100px]"></div>
        
        <button @click.stop="$router.push({ path: '/create_post' })" class="mt-3 p-3 rounded-full h-12 w-[175px] text-slate-50 text-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700">
            + Create Post
        </button>

        <div class="flex flex-col h-full"></div>

        <button @click.stop="" class="mb-5 p-3 rounded-full hover:bg-zinc-700">
            <ion-label class="text-3xl" position="floating">
            <ion-icon aria-hidden="true" :icon="settingsOutline" />
            Settings
            </ion-label>
        </button>
    </div>
</template>

<script setup lang="ts">
import { homeOutline, personCircleOutline, settingsOutline } from 'ionicons/icons';
</script>