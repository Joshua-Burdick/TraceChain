<template>
    <div class="flex flex-row w-full align-center justify-center bg-stone-800 py-5 px-3">
        <div class="flex w-2/3"></div>
        <button @click.stop="$router.push({ path: '/feed' })" class="flex w-full text-4xl rounded-full">
            <ion-icon aria-hidden="true" :icon="homeOutline" />
        </button>

        <button @click.stop="$router.push({ path: '/search' })" class="flex w-full text-4xl rounded-full">
            <ion-icon aria-hidden="true" :icon="searchOutline" />
        </button>

        <button @click.stop="$router.push({ path: '/create_post' })" class="flex w-full text-6xl rounded-full mr-4">
            <ion-icon aria-hidden="true" :icon="addCircleOutline" />
        </button>
        
        <button @click.stop="$router.push({ path: '/communities' })" class="flex w-full text-4xl rounded-full">
            <ion-icon aria-hidden="true" :icon="peopleOutline" />
        </button>

        <button @click.stop="$router.push({ path: '/profile' })" class="flex w-full text-4xl rounded-full">
            <ion-icon aria-hidden="true" :icon="personCircleOutline" />
        </button>


    </div>
</template>

<script setup lang="ts">
import { homeOutline, personCircleOutline, addCircleOutline, peopleOutline, searchOutline } from 'ionicons/icons';
</script>