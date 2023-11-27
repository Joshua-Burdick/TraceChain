<template>
    <div class="flex flex-row w-full align-center justify-center bg-stone-800 py-5">
        <div class="flex w-1/4"></div>
        <button @click.stop="$router.push({ path: '/feed' })" class="flex w-1/4 text-4xl rounded-full">
            <ion-icon aria-hidden="true" :icon="homeOutline" />
        </button>

        <button @click.stop="$router.push({ path: '/create_post' })" class="flex w-1/4 text-4xl rounded-full">
            <ion-icon aria-hidden="true" :icon="addCircleOutline" />
        </button>

        <button @click.stop="$router.push({ path: '/profile' })" class="flex w-1/4 text-4xl rounded-full">
            <ion-icon aria-hidden="true" :icon="personCircleOutline" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { homeOutline, personCircleOutline, addCircleOutline } from 'ionicons/icons';
</script>