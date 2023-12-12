<template>
    <div class="flex flex-col w-full h-full align-center overflow-y-scroll">
        <input id="searchBar" type="text" class="flex bg-[#141313] rounded-full text-slate-100 w-5/6 block m-5 p-4 ps-10 text-xl border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search..." v-model="searchContent">
        <div v-if="searchContent !== ''" class="w-1/3 text-slate-100 rounded-xl bg-stone-900 mb-3 transition hover:bg-blue-400 hover:bg-opacity-60 hover:text-black" v-for="(result, index) in searchResults" :key="index">
            <div class="flex flex-row p-4 cursor-pointer" @click.stop="$router.push({ path: `/profile/${result._id}`})">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                    alt="Profile Image"
                    class="rounded-full h-12 w-12 mr-4"
                >
                <div class="flex flex-col">
                    <h1 class="text-xl font-bold">{{ result.username }}</h1>
                    <h2 class="text-gray-300">{{ result.usertag }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import axios from 'axios';

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonSearchbar } from '@ionic/vue';
import { pencilSharp, trash, alertCircle } from 'ionicons/icons';

interface User {
    username: String,
    usertag: String,
    _id: String
}

const searchContent = ref('');
const searchResults = ref<Array<User>>([]);

onMounted(() => {
    const searchBar = document.getElementById('searchBar');
    setTimeout(() => {
        searchBar?.focus();
    }, 1);
})

watch(searchContent, () => {
    search();
})

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