<template>
    <div class="flex flex-col w-full h-full align-center">
        <div class="flex flex-row w-full h-auto py-7 bg-stone-800 bg-opacity-70 align-center justify-center text-6xl font-semibold">
            Create your own Community
            <ion-icon :icon="peopleCircleSharp" class="ml-2" />
        </div>
        <div class="flex flex-col align-center pt-15 w-full h-full">
            <div class="px-2 py-2 w-3/4 rounded-lg bg-zinc-800 h-full shadow-md shadow-black">
                <textarea class="focus:outline-none text-white text-lg w-full h-full resize-none" :maxlength="maxLength"
                    v-model="communityName" placeholder="Provide a name for your community"></textarea>
                <p :class="communityName.length == maxNameLength ? 'text-red' : 'text-white'"
                    class="flex w-full justify-end pt-2 pr-2">{{ communityName.length }}/50</p>
            </div>
        </div>
        <div class="flex flex-col align-center pt-15 w-full h-full">
            <div class="px-2 py-2 w-3/4 rounded-lg bg-zinc-800 h-full shadow-md shadow-black">
                <textarea class="focus:outline-none text-white text-lg w-full h-full resize-none" :maxlength="maxLength"
                    v-model="communityDescription" placeholder="Provide a description of your community..."></textarea>
                <p :class="communityDescription.length == maxLength ? 'text-red' : 'text-white'"
                    class="flex w-full justify-end pt-2 pr-2">{{ communityDescription.length }}/500</p>
            </div>
        </div>
        <div>
            <div 
                class="flex flex-col w-full h-full p-2"
            >
                <button
                    class="p-2 mt-2 w-full h-14 rounded-lg hover:bg-gray-700 hover:bg-opacity-70 active:bg-gray-600 active:bg-opacity-70 text-2xl"
                > 
                </button>
            </div>
        </div>
        <div class="flex flex-row align-center justify-center mt-3 p-5">
            <button class="rounded-full w-36 h-14 text-slate-100 text-xl bg-gradient-to-r from-[#700000] via-[#7d0404] via-35% to-[#930600]"
            @click="createCommunity">Create</button>
        </div>
        <div v-if="error" class="text-red text-lg py-3">{{ error }}</div>
    </div>
</template>


<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon } from '@ionic/vue';
import { peopleCircleSharp} from 'ionicons/icons';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();

const userId = sessionStorage.getItem("userId");
const communityName = ref('');
const communityDescription = ref('');
const maxLength = 500;
const maxNameLength = 50;
const error = ref('');

const createCommunity = () => {

  const community = {
    userId: userId,
    name: communityName.value,
    description: communityDescription.value,
    time: Date.now(),
  };


    axios.post(`/community/${userId}`, community)
    .then((res) => {
      console.log(res);
      console.log("Submitted: ", community);
      router.push({ path: `/communities` });
    })
    .catch((error) => {
      console.log('the following error occured when trying to post a new deck', error);
    })
    communityName.value = '';
    communityDescription.value = '';

   
};

</script>