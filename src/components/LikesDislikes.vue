
<template>
    <div>
      <ion-icon @click="likePost" :color="likeColor" name="thumbs-up-outline"></ion-icon>
      {{ likes }}
      
      <ion-icon @click="dislikePost" :color="dislikeColor" name="thumbs-down-outline"></ion-icon>
      {{ dislikes }}
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Props to receive data from the parent component
  const props = defineProps(['initialLikes', 'initialDislikes']);
  
  const likes = ref(props.initialLikes);
  const dislikes = ref(props.initialDislikes);
  const likeColor = ref('medium');
  const dislikeColor = ref('medium');
  
  const likePost = () => {
    likes.value++;
    likeColor.value = 'success';
    dislikeColor.value = 'medium';
  };
  
  const dislikePost = () => {
    dislikes.value++;
    likeColor.value = 'medium';
    dislikeColor.value = 'danger';
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  