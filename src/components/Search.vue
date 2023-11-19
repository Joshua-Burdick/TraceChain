<template>
    <ion-searchbar :animated="true" placeholder="Search..." v-model="searchContent" @keydown.enter="search"></ion-searchbar>
    <div class="transition hover:bg-sky-500 pb-6 hover:text-black" v-for="result in searchResults" :key="result">
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