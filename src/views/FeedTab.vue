<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <ComingSoon name="Account Feed"/>
        <NavigationWrapper :pageComponent="ComingSoon"/>
      </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import ComingSoon from '@/components/ComingSoon.vue';
import NavigationWrapper from '@/components/Navigation/NavigationWrapper.vue';
</script>