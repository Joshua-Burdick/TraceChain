<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <NavigationWrapper :pageComponent="PostLargeView"/>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonLabel, IonList, IonItem, IonAvatar,} from '@ionic/vue';
import { useRoute } from 'vue-router';

import NavigationWrapper from '@/components/Navigation/NavigationWrapper.vue';
import PostLargeView from '@/components/Post/PostLargeView.vue';

const route = useRoute();
</script>