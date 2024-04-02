<template>
    <ion-page>
        <ion-content>
            <div class="flex flex-col">
                <!--Home + menu buttons-->
                <div class="flex justify-between items-center p-4 bg-neutral-800 text-white">
                    <button @click="toggleMenu" class="flex items-center justify-center">
                      <ion-icon :icon="menuOutline" class="text-2xl"></ion-icon>
                    </button>
                    <button @click="$router.push('/feed')" class="flex items-center justify-center">
                      <ion-icon :icon="homeOutline" class="text-2xl"></ion-icon>
                    </button>
                  </div>
                <!-- Sidebar -->
                <div :class="{ 'translate-x-0': showMenu, '-translate-x-full': !showMenu }"
                     class="w-64 bg-neutral-800 text-white h-screen fixed z-20 transform transition-transform duration-300"
                >
                  <div class="font-bold text-2xl pl-12 mb-10 pt-40">Settings</div>
                  <ul class="space-y-10 justify-start ml-7">
                    <li>
                      <button @click="$router.push('/settings')" class="w-full flex items-center text-lg px-5 py-2">
                        <ion-icon aria-hidden="true" :icon="personCircleOutline" class="text-lg mr-2"/>
                        Account
                      </button>
                    </li>
                    <li>
                      <button @click="$router.push('/settings/appearance')" class="w-full flex items-center text-lg px-5 py-2">
                        <ion-icon aria-hidden="true" :icon="sunnyOutline" class="text-lg mr-2"/>
                        Appearance
                      </button>
                    </li>
                    <li>
                      <button @click="$router.push('/settings/privacy')" class="w-full flex items-center text-lg px-5 py-2">
                        <ion-icon aria-hidden="true" :icon="lockClosedOutline" class="text-lg mr-2"/>
                        Privacy
                      </button>
                    </li>
                    <li>
                      <button @click="logout" class="w-full flex items-center text-md px-5 py-2">
                        <ion-icon aria-hidden="true" :icon="logOutOutline" class="text-lg mr-2"/>
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            <!--Main-->
            <div class="min-h-screen bg-neutral-900 flex flex-col items-center justify-center">
                <div class="w-11/12 md:2/3 w-75 h-100 bg-neutral-800 rounded-sm shadow-xl z-10 p-9
                flex flex-col lg:flex-row -mt-10 space-x-0 lg:space-x-10">

                    <div class="flex-1">
                        <h2 class="text-2xl font-semibold">Account Settings</h2>
                        <p class="text-stone-400 text-sm mb-6">Edit your name, avatar, etc</p>

                        <!--User Info-->
                        <form @submit.prevent="updateAccount">
                            <div class="mb-4">
                                <!--Display Name-->
                                <label for="displayName" class="block text-stone-300 text-sm font-bold mb-2">Display Name:</label>
                                <input 
                                    type="text" 
                                    id="displayName" 
                                    v-model="user.displayName" 
                                    class="shadow appearance-none rounded bg-neutral-700 w-full 
                                    py-2 px-3 leading-tight mb-4"
                                >
                                <!--Username-->
                                <label for="uName" class="block text-stone-300 text-sm font-bold mb-2">Username:</label>
                                <input 
                                    type="text" 
                                    id="uName" 
                                    v-model="user.username" 
                                    class="shadow appearance-none rounded bg-neutral-700 w-full 
                                    py-2 px-3 leading-tight mb-4"
                                >
                                <!--Email-->
                                <label for="email" class="block text-stone-300 text-sm font-bold mb-2">Email:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    v-model="user.email" 
                                    class="shadow appearance-none rounded bg-neutral-700 w-full
                                    py-2 px-3 leading-tight mb-4"
                                >
                                <!--Bio-->
                                <label for="bio" class="block text-stone-300 text-sm font-bold mb-1">Bio:</label>
                                <textarea 
                                    id="bio"
                                    rows="4" 
                                    placeholder="Tell us about yourself..." 
                                    class="w-full h-28 px-3 py-2 text-white bg-neutral-700 rounded shadow appearance-none
                                    leading-tight mb-4"
                                >
                                </textarea>
                            </div>
                            <!--Save + Delete buttons-->
                            <div class="flex justify-center items-center mt-4 space-x-4">
                                <button type="submit" class="bg-green-800 px-4 py-2 rounded-md text-sm font-bold">Save Changes</button>
                                <button @click="showDeleteConfirmation" class="bg-red-800 px-4 py-2 rounded-md font-bold text-sm">Delete Account</button>
                            </div>
                        </form>
                    </div>
                    <!--Profile Picture-->
                    <div class="flex flex-col items-center justify-center lg:flex-1">
                        <div class="w-44 h-44 md:w-52 md:h-52 xl:w-60 xl:h-60 rounded-full overflow-hidden bg-stone-800 mt-6">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                            alt="Profile Image">
                        </div>
                        <input type="file" id="fileInput" style="display: none;" />
                        <!-- Button -->
                        <button
                          fill="solid"
                          color="light"
                          class="mt-6 bg-neutral-700 py-2 px-4 font-bold rounded-md text-sm"
                          style="--background-activated: transparent; --background-focused: transparent;"
                          onclick="document.getElementById('fileInput').click();"
                        >
                          Upload Picture
                        </button>
                    </div>
                </div>
            </div>
        </ion-content> 
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
import { IonPage, IonHeader, IonToolbar, IonContent, IonIcon } from '@ionic/vue';
import { lockClosedOutline, personCircleOutline, sunnyOutline, logOutOutline, homeOutline, menuOutline } from 'ionicons/icons';
import {ref, onMounted, computed, onUnmounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { toastController } from '@ionic/vue';

const route = useRoute();
const showDeleteAlert = ref(false);
const router = useRouter();
const showMenu = ref(false);

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
}

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
    email: ''
});

const userId = ref(sessionStorage.getItem("userId") ?? (localStorage.getItem("userId")) ?? "");
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
        const response = await axios.put(`accountVerification/${route.params.id}/changeAccount`, {
            displayName: user.value.displayName,
            username: user.value.username,
            email: user.value.email
            // Include other fields as needed
        });
        console.log('Account updated successfully:', response.data);
        const toast = await toastController.create({
            message: 'Your account has been successfully updated!',
            duration: 2000,
            color: 'success',
            position: 'top',
        });
        await toast.present();
    } catch (error) {
        console.error('Error updating account:', error);
        const toast = await toastController.create({
            message: 'Error updating account. Please try again.',
            duration: 2000,
            color: 'danger',
            position: 'top',
        });
        await toast.present();
    }
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
    await axios.delete(`/accountVerification/${route.params.id}/delete`);
    sessionStorage.removeItem('user_token');
    sessionStorage.removeItem('userId');
    router.push('/login');
  } catch (error) {
    console.error('Error deleting account:', error);
  }
};


</script>