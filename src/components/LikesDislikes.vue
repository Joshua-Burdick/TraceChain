
<template>
  <div>
    <ion-button @click="likePost" :color="likeColor">
      <ion-icon aria-hidden="true" :icon="thumbsUpSharp" color="dark" size="medium"></ion-icon>
      {{ likes }}
    </ion-button>

    <ion-button @click="dislikePost" :color="dislikeColor">
      <ion-icon aria-hidden="true" :icon="thumbsDownSharp" color="dark" size="medium"></ion-icon>
      {{ dislikes }}
    </ion-button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { thumbsDownSharp, thumbsUpSharp } from 'ionicons/icons';


const { post } = defineProps(['post']); 

const likes = ref(post.likes || 0);
const dislikes = ref(post.dislikes || 0);
const likeColor = ref('light');
const dislikeColor = ref('light');

const likePost = () => {
  likes.value++;
  likeColor.value = 'success';
  dislikeColor.value = 'light';
};

const dislikePost = () => {
  dislikes.value++;
  likeColor.value = 'light';
  dislikeColor.value = 'danger';
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ion-button {
  margin-right: 10px;
}

</style>
