<template>
    <!-- <ion-searchbar :animated="true" color="dark" placeholder="Search..." v-model="searchContent" @keydown.enter="search"></ion-searchbar> -->
    <input type="text" class="bg-[#141313] text-white block w-full p-4 ps-10 text-xl border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search..." v-model="searchContent" @keydown.enter="search">
    <div v-if="searchContent !== ''" class="text-white bg-stone-900 transition hover:bg-sky-500 pb-6 hover:text-black" v-for="(result, index) in searchResults" :key="index">
        <div class="ml-40 cursor-pointer">
            <h1 class="text-xl font-bold">{{ result.username }}</h1>
            <h2 class="text-grey">{{ result.usertag }}</h2>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue';
import axios from 'axios';

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonSearchbar } from '@ionic/vue';
import { pencilSharp, trash, alertCircle } from 'ionicons/icons';

interface User {
    username: String,
    usertag: String,
}

const searchContent = ref('');
const searchResults = ref<Array<User>>([]);

const search = () => {
    console.log(searchContent.value);

    axios.get(`/account/search/`, {
        params: {
            searchParam: searchContent.value
        }
    })
        .then((res) => {
            searchResults.value = res.data;
            searchResults.value.forEach(accountRes => {
                console.log(accountRes);
            })
        })
        .catch((err) => console.log("This is hte error: ", err))
}


</script>