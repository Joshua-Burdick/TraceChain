<template>
    <ion-page id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-title style="text-align: center; padding-right: 50px;">TraceChain</ion-title>
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>


        <ion-content class="ion-padding">
        <div :class="{'settings-container': true, 'menu-open': isMenuOpen}">
            <div class="settings-section">
                <h2 class="settings-title" style="font-weight: 800;">Account Settings</h2>
                <div class="settings-group">
                    <label class="settings-label" style="font-weight: 800;">Basic Info</label>
                    <div class="settings-input-group">
                        <ion-item lines="full">
                            <ion-label position="floating" style="font-weight: 550;">First Name</ion-label>
                            <ion-input type="text" placeholder="Hatsune"></ion-input>
                        </ion-item>
                        <ion-item lines="full">
                            <ion-label position="floating" style="font-weight: 550;">Last Name</ion-label>
                            <ion-input type="text" placeholder="Miku"></ion-input>
                        </ion-item>
                        <ion-item lines="full">
                            <ion-label position="floating" style="font-weight: 550;">Email</ion-label>
                            <ion-input type="email" placeholder="hatsune.miku@snhu.edu"></ion-input>
                        </ion-item>
                    </div>
                    <label class="settings-label-account" style="font-weight: 800;">Account Info</label>
                    <div class="settings-input-group">
                        <ion-item lines="full">
                            <ion-label position="floating" style="font-weight: 550;">Username</ion-label>
                            <ion-input type="text" placeholder="Ex: HatsuneMikuOfficial"></ion-input>
                        </ion-item>
                        <ion-item lines="full">
                            <ion-label position="floating" style="font-weight: 550;">Password</ion-label>
                            <ion-input type="password"></ion-input>
                        </ion-item>
                    </div>
                </div>
            </div>
        </div>
        </ion-content>
    </ion-page> 

    <ion-menu side="start" content-id="main-content">
        <ion-content>
            <div class="list-container">
                <ion-list lines="none">
                    <ion-list-header style="font-size: 1.5em;  padding-left: 40px; font-weight: 550;">
                        Settings
                    </ion-list-header>
                    <ion-menu-toggle auto-hide="false">
                            <ion-item @mouseover="highlightItem" @mouseleave="unhighlightItem">
                                <ion-icon slot="start" :icon="personCircleOutline" style="margin-right: 12px;"></ion-icon>
                                <ion-label>Account</ion-label>
                            </ion-item>
                            <ion-router-link href="/settings/appearance">
                                <ion-item>
                                    <ion-icon slot="start" :icon="sunnyOutline" style="margin-right: 12px;"></ion-icon>
                                    <ion-label>Appearance</ion-label>
                                </ion-item>
                            </ion-router-link>
                            <ion-router-link href="/settiings/privacy">
                                <ion-item>
                                    <ion-icon slot="start" :icon="lockClosedOutline" style="margin-right: 12px;"></ion-icon>
                                    <ion-label>Privacy</ion-label>
                                </ion-item>
                            </ion-router-link>
                            <ion-item>
<<<<<<< HEAD
                                <ion-button @click="logout" expand="full" color="danger" class="logout-button"> Logout</ion-button>
=======
                                <ion-icon slot="start" :icon="logOutOutline" style="margin-right: 12px;"></ion-icon>
                                <ion-label>Log Out</ion-label>
>>>>>>> origin/dev
                            </ion-item>
                    </ion-menu-toggle>
                </ion-list>
            </div>
        </ion-content>
    </ion-menu>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
 IonList, IonItem, useIonRouter, IonMenu, IonIcon, IonInput } from '@ionic/vue';
<<<<<<< HEAD
import {ref} from 'vue';
import { lockClosedOutline, personCircleOutline, sunnyOutline, logOutOutline } from 'ionicons/icons';
import {useRouter} from 'vue-router';
const router = useRouter()

=======

import {ref} from 'vue';
import { lockClosedOutline, personCircleOutline, sunnyOutline, logOutOutline } from 'ionicons/icons';
>>>>>>> origin/dev

const isMenuOpen = ref(false);

const toggleMenu = () => {
isMenuOpen.value = !isMenuOpen.value;
}

const highlightItem = (event: MouseEvent) => {
(event.target as HTMLElement).classList.add('item-highlight');
};

const unhighlightItem = (event: MouseEvent) => {
(event.target as HTMLElement).classList.remove('item-highlight');
};
<<<<<<< HEAD
const logout = () => {
  // Clear user authentication state
  sessionStorage.removeItem('user_token');
  sessionStorage.removeItem('user');
  document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/signIn;';
  // Navigate to the login page (or any other desired route)
  console.log(document.cookie);
  router.push({path: '/signIn'});
};
=======
>>>>>>> origin/dev

</script>

<style>

ion-header ion-toolbar {
justify-content: center;
}

ion-content {
overflow-y: auto;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0;
--padding-top: 0;
--padding-bottom: 0;
--padding-start: 0;
--padding-end: 0;
}

.settings-container {
background-color: #000;
color: #fff;
padding: 25px;
border-radius: 10px;
box-sizing: border-box;
max-width: 800px;
margin: auto;
margin-top: 15px;
}

.list-container {
height: 100%;
padding-top: 55%;
}

.settings-title {
font-size: 1.2em;
margin-bottom: 15px;
color: #fff;
}

.settings-group {
background-color: #1c1c1c;
padding: 30px;
border-radius: 10px;
}

.settings-label {
font-size: 1.0em;
color: #aaa;
margin-bottom: 15px;
display: block;
}

.settings-label-account {
font-size: 1.0em;
color: #aaa;
margin-bottom: 15px;
display: block;
margin-top: 40px;
}

.settings-input-group ion-item {
--background: #2a2a2a;
--color: #fff;
--placeholder-color: #555;
--border-color: transparent;
margin-bottom: 15px;
border-radius: 10px;
font-size: 0.9em;
}

ion-menu {
--width: 200px;
--min-width: 300px;
}

ion-menu {
height: 100vh;
}

ion-menu ion-content {
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
--background: #1e1e1e;
}

ion-list ion-item {
padding-bottom: 30px;
}


ion-item {
--background-activated: transparent; /* Background when activated */
--background-hover: transparent; /* Background for hover state */
--background-hover: transparent; /* No background on hover */
--ripple-color: transparent;
--highlight-color-focused: white;
--placeholder-color: white;
--color: white;
}

/* For browsers that support hover states, you can also use the :hover pseudo-class */
ion-item:hover::part(native) {
background-color: #1c1c1c; /* Your desired hover color */
}

ion-item::part(native):hover {
background-image: linear-gradient(to right, #632323, transparent);
}

ion-list {
height: 100%;
--background: tranparent;
}

ion-list-header {
padding-bottom: 30px;
}

ion-menu-toggle {
--background: transparent;
}

ion-icon {
padding-left: 20px;
}
</style>