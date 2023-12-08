<template>
    <ion-page>
        <ion-header>
                <ion-toolbar>
                    <ion-title style="padding-left: 79vh;">Appearance Settings</ion-title>
                    <ion-buttons slot="start">
                        <ion-menu-button></ion-menu-button>
                    </ion-buttons>
                </ion-toolbar>
        </ion-header>

        <ion-menu content-id="main-content" side="start">
            <ion-content>
                <div class="list-container">
                <ion-list lines="none">
                    <ion-list-header style="font-size: 1.5em;  padding-left: 40px; font-weight: 550;">
                        Settings
                    </ion-list-header>
                    <ion-menu-toggle auto-hide="false">
                            <ion-item @click="$router.push('/settings')" @mouseover="highlightItem" @mouseleave="unhighlightItem">
                                <ion-icon slot="start" :icon="personCircleOutline" style="margin-right: 12px;"></ion-icon>
                                <ion-label>Account</ion-label>
                            </ion-item>
                                <ion-item @click="$router.push('/settings/appearance')">
                                    <ion-icon slot="start" :icon="sunnyOutline" style="margin-right: 12px;"></ion-icon>
                                    <ion-label>Appearance</ion-label>
                                </ion-item>
                                <ion-item @click="$router.push('/settings/privacy')">
                                    <ion-icon slot="start" :icon="lockClosedOutline" style="margin-right: 12px;"></ion-icon>
                                    <ion-label>Privacy</ion-label>
                                </ion-item>
                            <ion-item>
                                <ion-icon slot="start" :icon="logOutOutline" style="margin-right: 12px;"></ion-icon>
                                <ion-label>Log Out</ion-label>
                            </ion-item>
                    </ion-menu-toggle>
                </ion-list>
            </div>
            </ion-content>
        </ion-menu>

        <ion-content id="main-content">
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonTitle, IonHeader, IonToolbar, IonContent, IonMenu } from '@ionic/vue';
import { lockClosedOutline, personCircleOutline, sunnyOutline, logOutOutline } from 'ionicons/icons';

const highlightItem = (event: MouseEvent) => {
(event.target as HTMLElement).classList.add('item-highlight');
};

const unhighlightItem = (event: MouseEvent) => {
(event.target as HTMLElement).classList.remove('item-highlight');
};

</script>

<style>

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
  --padding-top: 0;        /* Removes default padding */
  --padding-bottom: 0;     /* Removes default padding */
  --padding-start: 0;      /* Removes default padding */
  --padding-end: 0;
}

.list-container {
height: 100%;
padding-top: 55%;
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