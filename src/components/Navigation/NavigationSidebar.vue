<template>
    <div class="flex flex-col align-center bg-stone-800 min-[1000px]:h-full max-[999px]:h-0 max-[999px]:w-0 text-slate-50">
        <div class=" flex flex-row mt-10 mb-20 align-center">
            <img aria-hidden="true" src="/TraceChain.svg" class="w-20"/>
            <p class="text-4xl font-semibold">TraceChain</p>
        </div>

        <div v-for="target in navTargets" :key="target.path">
            <button @click.stop="$router.push({ path: target.path })" class="z-20 my-2 p-3 rounded-full hover:bg-blur-sm hover:bg-gradient-to-r hover:from-[#2f0000] hover:via-[#790909] hover:via-35% hover:to-[#b00700]">
                <div class="w-full h-full bg-gradient-to-r from-[#2f0000] via-[#790909] via-35% -inset-1 blur-sm z-0"></div>
                <ion-label class="text-4xl z-20" position="floating">
                    <ion-icon aria-hidden="true" :icon="target.icon" />
                    {{ target.label }}
                </ion-label>
            </button>
        </div>

        <div class="flex flex-col h-[100px]"></div>
        
        <button @click.stop="$router.push({ path: '/create_post' })" class="mt-3 p-3 rounded-full h-12 w-[175px] text-slate-50 text-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700">
            + Create Post
        </button>

        <div class="flex flex-col h-full"></div>

        <button @click.stop="$router.push({ path: '/settings' })" class="mb-5 p-3 rounded-full hover:bg-gradient-to-r hover:from-[#2f0000] hover:via-[#790909] hover:via-35% hover:to-[#b00700]">
            <ion-label class="text-3xl" position="floating">
            <ion-icon aria-hidden="true" :icon="settingsOutline" />
            Settings
            </ion-label>
        </button>
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSckesx4Bz74KLl2mFEGKDQRa7zw2pUYDjRlqHfoX2Ur8kPk-w/viewform"
            target="_blank"
            class="text-blue-500 underline text-sm pb-1"
        >
            Having Issues? Submit a Bug Report
        </a>
    </div>
</template>

<script setup lang="ts">
import { IonIcon, IonLabel } from '@ionic/vue';
import { homeOutline, personCircleOutline, searchOutline, peopleOutline, settingsOutline } from 'ionicons/icons';

type NavTarget = {
    path: string,
    icon: string,
    label: string
}

const navTargets: Array<NavTarget> = [
    {
        path: '/feed',
        icon: homeOutline,
        label: 'Feed'
    },
    {
        path: '/profile',
        icon: personCircleOutline,
        label: 'Profile'
    },
    {
        path: '/communities',
        icon: peopleOutline,
        label: 'Communities'
    },
    {
        path: '/search',
        icon: searchOutline,
        label: 'Search'
    }
]
</script>