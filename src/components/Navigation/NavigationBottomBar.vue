<template>
    <div class="flex flex-row w-full align-center justify-center bg-stone-800 py-5 px-3">
        <div class="flex w-2/3"></div>
        <div class="flex w-full" v-for="target in navTargets" :key="target.path">
            <button
                @click.stop="$router.push({ path: target.path })"
                class="flex w-full rounded-full"
                :class="{
                    'text-6xl' : target.path === '/create_post',
                    'text-4xl' : target.path !== '/create_post',
                }"
            >
                <ion-icon aria-hidden="true" :icon="target.icon" />
            </button>
        </div>


    </div>
</template>

<script setup lang="ts">
import { homeOutline, personCircleOutline, addCircleOutline, peopleOutline, searchOutline } from 'ionicons/icons';

type NavTarget = {
    path: string,
    icon: string
}

const navTargets: Array<NavTarget> = [
    {
        path: '/feed',
        icon: homeOutline
    },
    {
        path: '/search',
        icon: searchOutline
    },
    {
        path: 'create_post',
        icon: addCircleOutline,
    },
    {
        path: '/communities',
        icon: peopleOutline
    },
    {
        path: '/profile',
        icon: personCircleOutline
    }
]
</script>