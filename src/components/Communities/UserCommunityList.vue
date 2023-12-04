<template>
    <div v-if="!loading" class="flex w-full h-full justify-center align-center">
        <div v-if="communities.length === 0" class="flex flex-col">
            <h1 class="text-4xl font-semibold text-gray-300">
                {{ isThisUser ? 'No Communities' : 'This User is Not Part of Any Communities Yet' }}
            </h1>
        </div>
    </div>
    <div v-if="loading" class="flex flex-row w-full h-full justify-center items-center overflow-hidden">
        <v-progress-circular color="blue-lighten-3" class="flex w-1/2 h-1/2 justify-center items-center" :width="15" indeterminate></v-progress-circular>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent, IonLabel, IonList, IonItem} from '@ionic/vue';
import { onMounted, Ref, ref } from "vue";

const communities: Ref<object[]> = ref([]);
const isLoggedIn: Ref<boolean> = ref(true);
const isThisUser: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(true);

onMounted(() => {
    loading.value = false;
})
</script>