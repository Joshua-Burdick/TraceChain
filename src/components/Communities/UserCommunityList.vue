<template>
    <div class="flex w-full h-full justify-center align-center">
        <div v-if="communities.length === 0" class="flex flex-col">
            <h1 class="text-4xl font-semibold text-gray-300">
                {{ isThisUser ? 'No Communities' : 'This User is Not Part of Any Communities Yet' }}
            </h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent, IonLabel, IonList, IonItem} from '@ionic/vue';
import { Ref, ref } from "vue";

const communities: Ref<object[]> = ref([]);
const isLoggedIn: Ref<boolean> = ref(true);
const isThisUser: Ref<boolean> = ref(false);
</script>