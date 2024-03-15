<template>
    <div class="flex flex-col items-center bg-neutral-900 h-full text-slate-100">
        <!--Logo + Name-->
        <div class="flex items-center mt-10">
            <img aria-hidden="true" src="/TraceChain.svg" class="w-20"/>
            <p class="text-3xl font-semibold mb-3 mr-4">TraceChain</p>
        </div>

        <div
            v-for="target in navTargets"
            :key="target.path"
        >
        <!--Main navigation buttons-->
            <button
                @click.stop="$router.push({ path: target.path })"
                class="flex items-center justify-center text-2xl z-20 my-2 p-3 rounded-full hover:bg-blur-sm hover:bg-gradient-to-r hover:from-[#2f0000] hover:via-[#790909] hover:via-35% hover:to-[#b00700]"
                :class="{
                    'text-slate-400': $route.path === target.path
                }"
            >
                <ion-icon aria-hidden="true" :icon="target.icon" class="text-2xl mr-2" />
                    {{ target.label }}
            </button>
        </div>
        
        <!--Create Post button-->
        <button @click.stop="$router.push({ path: '/create_post' })" class="flex items-center justify-center text-xl p-3 mt-3 rounded-full h-14 w-46 text-slate-100 bg-gradient-to-r from-[#700000] via-[#7d0404] via-35% to-[#930600]">
            <ion-icon aria-hidden="true" :icon="addOutline" class="text-2xl mr-2"/>
                Create Post
        </button>

        <div class="flex flex-col h-full"></div>

        <!--Setting button-->
        <button @click.stop="$router.push({ path: '/settings' })" class="flex items-center text-2xl p-3 mb-3 rounded-full hover:bg-gradient-to-r hover:from-[#2f0000] hover:via-[#790909] hover:via-35% hover:to-[#b00700]">
            <ion-icon aria-hidden="true" :icon="settingsOutline" class="text-2xl mr-2" />
                Settings
        </button>

        <!--Logout Button-->
        <button @click.stop="logout" class="flex items-center justify-center p-3 mb-2 rounded-full h-12 w-32 text-slate-50 text-xl bg-gradient-to-r from-[#700000] via-[#7d0404] via-35% to-[#930600]">
            <ion-icon aria-hidden="true" :icon="logOutOutline" class="text-xl mr-2"/>
                Logout
        </button>

        <!--Bug submit-->
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSckesx4Bz74KLl2mFEGKDQRa7zw2pUYDjRlqHfoX2Ur8kPk-w/viewform"
            target="_blank"
            class="text-blue-700 underline text-sm pb-1 mt-3"
        >
            Having Issues? Submit a Bug Report
        </a>
    </div>
</template>

<script setup lang="ts">
import { IonIcon, IonLabel } from '@ionic/vue';
import { homeOutline, personCircleOutline, searchOutline, peopleOutline, settingsOutline, logOutOutline, addOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

type NavTarget = {
    path: string,
    icon: string,
    label: string
}

const router = useRouter();

const userId = sessionStorage.getItem('userId');

const navTargets: Array<NavTarget> = [
    {
        path: '/feed',
        icon: homeOutline,
        label: 'Feed'
    },
    {
        path: `/profile/${userId}`,
        icon: personCircleOutline,
        label: 'Profile'
    },
    {
        path: '/communities',
        icon: peopleOutline,
        label: 'Communities'
    },
    {
        path: '/search',
        icon: searchOutline,
        label: 'Search'
    }
]

const logout = () => {
  // Clear user authentication state
  localStorage.removeItem('user_token');
  localStorage.removeItem('userId');
  sessionStorage.removeItem('user_token');
  sessionStorage.removeItem('userId');
  router.push({path: '/login'});
};

</script>