<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <NavigationWrapper :pageComponent="ProfilePage"/>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonLabel, IonList, IonItem, IonAvatar,} from '@ionic/vue';
import NavigationWrapper from '@/components/Navigation/NavigationWrapper.vue';
import ProfilePage from '@/components/Profile/ProfilePage.vue';
</script>