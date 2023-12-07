<template>
    <div class="flex h-full w-full align-center justify-center font-semibold border-2 border-yellow-700 bg-gradient-to-tr from-yellow-800 to-yellow-950">
        <div>
            <p class="text-gray-300">{{ name }}</p>
            <div class="text-yellow-400 text-3xl">
                COMING SOON
                <ion-icon :icon="alertCircle" class="text-yellow-400" />
            </div>
            <p class="text-yellow-600 text-2xl">WORK IN PROGRESS</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { alertCircle } from 'ionicons/icons';

defineProps({
    name: String
})
</script>