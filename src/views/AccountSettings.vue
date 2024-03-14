<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-button @click="$router.push('/feed')">
                        <ion-icon slot="icon-only" :icon="homeOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
                
            </ion-toolbar>
        </ion-header>


        <ion-content id="main-content">
            <div class="min-h-screen bg-neutral-900 flex flex-col items-center justify-center">
                <div class="absolute top-0 w-full h-25 h-1/2 bg-neutral-800"></div>

                <div class="w-11/12 md:2/3 w-75 h-100 bg-neutral-900 rounded-sm shadow-xl z-10 p-9
                flex flex-col lg:flex-row -mt-10 space-x-0 lg:space-x-10">

                    <div class="flex-1">
                        <h2 class="text-2xl font-semibold">Account Settings</h2>
                        <p class="text-stone-600 text-sm mb-6">Edit your name, avatar, etc</p>
                        <form @submit.prevent="updateAccount">
                            <div class="mb-4">
                                <label for="displayName" class="block text-stone-300 text-sm font-bold mb-2">Display Name</label>
                                <input type="text" id="displayName" v-model="user.displayName" class="shadow appearance-none
                                border rounded bg-neutral-800 w-[400px] py-2 px-3 leading-tight focus:outline-none 
                                focus:shadow-outline mb-4">
                                <label for="uName" class="block text-stone-300 text-sm font-bold mb-2">Username</label>
                                <input type="text" id="uName" v-model="user.username" class="shadow appearance-none
                                border rounded bg-neutral-800 w-[400px] py-2 px-3 leading-tight focus:outline-none 
                                focus:shadow-outline mb-10">
                                <label for="email" class="block text-stone-300 text-sm font-bold mb-2">Email</label>
                                <input type="email" id="email" v-model="user.email" class="shadow appearance-none
                                border rounded bg-neutral-800 w-[400px] py-2 px-3 leading-tight focus:outline-none 
                                focus:shadow-outline mb-4">
                                <label for="password" class="block text-stone-300 text-sm font-bold mb-2">Password</label>
                                <input type="password" id="password" placeholder="password" class="shadow appearance-none
                                border rounded bg-neutral-800 w-[400px] py-2 px-3 leading-tight focus:outline-none 
                                focus:shadow-outline">
                            </div>
                        <button type="submit" fill="solid" color="light" class="mt-6 ml-5 bg-neutral-800 py-2 px-4
                        rounded-md text-sm font-bold" style="--background-activated: transparent; --background-focused: transparent;">Save Changes</button>
                            </form>
                    </div>

                    <!--Profile Picture-->
                    <div class="flex lg:flex-1 lg:flex-col items-center justify-start lg:justify-start">
                        <div class="w-28 h-28 md:w-36 md:h-36 xl:w-44 xl:h-44 rounded-full overflow-hidden
                        bg-stone-800 mt-6 ml-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                            alt="Profile Image">
                    </div>
                        <button fill="solid" color="light" class="mt-6 ml-5 bg-neutral-800 py-2 px-4 font-bold
                        rounded-md text-sm" style="--background-activated: transparent; --background-focused: transparent;">Upload Picture</button>

                    <div class="w-full mt-4">
                        <label for="bio" class="block text-stone-300 text-sm font-bold mb-1 ml-8">Bio</label>
                        <textarea id="bio" rows="4" placeholder="Tell us about yourself..." class="ml-8 w-[75vh] h-[27vh] px-3
                        py-2 text-white bg-neutral-800 rounded shadow appearance-none
                        leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>

                    <div class="mt-5 flex justify-center ml-8">
                        <button  @click="onDelete" class="bg-red-800 w-36 h-12 rounded-lg font-bold">Delete Account</button>
                    </div>


                </div>
            </div>
        </div>
        </ion-content> 
        <ion-menu content-id="main-content" side="start">
            <ion-content>
                <ion-list lines="none" class="h-full">
                    <ion-menu-toggle auto-hide="false">
                        <h1 class="font-bold text-2xl ml-10 pt-[190px] mb-3">Settings</h1>
                        <ion-item @click="$router.push('/settings')" class="flex items-center p-3 hover:bg-neutral-700
                        rounded"
                        style="--background: transparent; --background-hover: bg-neutral-700; --ripple-color: transparent;">
                            <ion-icon slot="start" :icon="personCircleOutline" class="text-lg mr-3 ml-4"></ion-icon>
                            <ion-label>Account</ion-label>
                        </ion-item>
                        <ion-item @click="$router.push('/settings/appearance')" class="flex items-center p-3 hover:bg-neutral-700 rounded"
                        style="--background: transparent; --background-hover: bg-neutral-700; --ripple-color: transparent;">
                            <ion-icon slot="start" :icon="sunnyOutline" class="text-lg mr-3 ml-4"></ion-icon>
                            <ion-label>Appearance</ion-label>
                        </ion-item>
                        <ion-item @click="$router.push('/settings/privacy')" class="flex items-center p-3 hover:bg-neutral-700 rounded" 
                        style="--background: transparent; --background-hover: bg-neutral-700; --ripple-color: transparent;">
                            <ion-icon slot="start" :icon="lockClosedOutline" class="text-lg mr-3 ml-4"></ion-icon>
                            <ion-label>Privacy</ion-label>
                        </ion-item>
                        <ion-item @click.stop="logout" class="flex items-center p-3 hover:bg-neutral-700 rounded pb-"
                        style="--background: transparent; --background-hover: bg-neutral-700; --ripple-color: transparent;">
                            <ion-icon slot="start" :icon="logOutOutline" class="text-lg mr-3 ml-4"></ion-icon>
                            <ion-label>Log Out</ion-label>
                        </ion-item>
                    </ion-menu-toggle>
                </ion-list>
            </ion-content>
        </ion-menu>
        <ion-alert
      :isOpen="showDeleteAlert"
      @onDidDismiss="onDismissAlert"
      header="Delete Account"
      message="Are you sure you want to delete your account? This action cannot be undone."
      :buttons="deleteAlertButtons"
    ></ion-alert>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
 IonList, IonItem, useIonRouter, IonMenu, IonIcon, IonInput } from '@ionic/vue';
import { lockClosedOutline, personCircleOutline, sunnyOutline, logOutOutline, homeOutline } from 'ionicons/icons';
import {ref, onMounted, computed} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const showDeleteAlert = ref(false);
const router = useRouter();

const isMenuOpen = ref(false);

const showErrorAlert = (message: string) => {
  console.log('Error alert triggered:', message);
  alert('Are you  ');
};

const deleteAlertButtons = computed(() => [
  { text: 'Cancel', role: 'cancel', handler: onCancel },
  { text: 'Delete', role: 'delete', handler: onDelete }
]);

const showDeleteConfirmation = () => {
  showDeleteAlert.value = true;
};

const onDismissAlert = () => {
  showDeleteAlert.value = false;
};

const onCancel = () => {
  showDeleteAlert.value = false;
};

const user = ref({
    displayName: '',
    username: '',
    email: '',
});

const userId = ref(sessionStorage.getItem("userId") ?? "");
route.params.id = userId.value;

const fetchAccountInfo = async () => {
    try {
        console.log("User ID from route parameter:", route.params.id);
        const userResponse = await axios.get(`accountVerification/${route.params.id}`).then((res) => res.data);
        user.value = userResponse;
        console.log('Fetched account information:', user.value);
    } catch (error) {
        console.error('Error fetching account information:', error, route.params.id);
    }
};

onMounted(fetchAccountInfo);

const updateAccount = async () => {
    try {
        const response = await axios.put(`accountVerification/${route.params.id}/changeAccount`, user.value);
        console.log('Account updated successfully:', response.data);
        // Optionally, you can display a success message or navigate to another page
    } catch (error) {
        console.error('Error updating account:', error);
        // Optionally, you can display an error message
    }
};

const highlightItem = (event: MouseEvent) => {
(event.target as HTMLElement).classList.add('item-highlight');
};

const unhighlightItem = (event: MouseEvent) => {
(event.target as HTMLElement).classList.remove('item-highlight');
};
    
const logout = () => {
  // Clear user authentication state
  localStorage.removeItem('user_token');
  localStorage.removeItem('userId');
  sessionStorage.removeItem('user_token');
  sessionStorage.removeItem('userId');
  router.push({ path: '/login'});
};

const onDelete = async () => {
    try {
    console.log("hello");
    await axios.delete(`/accountVerification/${route.params.id}/delete`);
    sessionStorage.removeItem('user_token');
    sessionStorage.removeItem('userId');
    router.push('/login');
  } catch (error) {
    console.error('Error deleting account:', error);
  }
};


</script>