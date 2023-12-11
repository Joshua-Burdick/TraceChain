<template>
    <div class="flex flex-row w-full align-center justify-center bg-neutral-900 py-5 px-3">
        <div class="flex w-2/3"></div>
        <div
            class="flex w-full text-slate-100"
            v-for="target in navTargets"
            :key="target.path"
        >
            <button
                @click.stop="$router.push({ path: target.path })"
                class="flex w-full rounded-full text-4xl"
                :class="{
                    'text-6xl' : target.path === '/create_post',
                    'text-slate-400': $route.path === target.path
                }"
            >
                <ion-icon aria-hidden="true" :icon="target.icon" />
            </button>
        </div>


    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon } from '@ionic/vue';
import { homeOutline, personCircleOutline, addCircleOutline, peopleOutline, searchOutline } from 'ionicons/icons';

type NavTarget = {
    path: string,
    icon: string
}

const userId = sessionStorage.getItem('userId');

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
        path: '/create_post',
        icon: addCircleOutline,
    },
    {
        path: '/communities',
        icon: peopleOutline
    },
    {
        path: `/profile/${userId}`,
        icon: personCircleOutline
    }
]
</script>