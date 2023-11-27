<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true" class=" bg-[#141313]">
      <Search v-if="isSearchVisible" />
      <!-- <ComingSoon name="Account Feed" /> -->
      <div class="flex justify-center  text-slate-50 bg-[#141313]">
        <div class="">
          <ul>
            <li class="cursor-pointer w-full " v-for="post in feed">
              <div
                class="block sm:text-sm md:text-lg lg:text-lg ion-text-wrap max-w-full my-10 whitespace-normal overflow-hidden sm:my-8 md:my-5">
                <div class="flex ">
                  <h4 class="font-bold">author</h4>
                  <h4 class="ml-12">@tag</h4>
                </div>
                <h1 class="text-2xl">
                  {{ post.content }}
                </h1>
                <p class="text-sm mt-3 text-darkgrey">on {{ post.createdAt }}</p>
                <h3 class="font-bold">Sources:
                  <a v-for="source in post.sources" :key="source" :href="formatSource(source)" target="_blank"> {{ source }}</a>
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import ComingSoon from '@/components/ComingSoon.vue';
import Search from '@/components/Search.vue';
import axios from 'axios';

interface User {
  username: String,
  usertag: String
}

interface Post {
  content: String,
  createdAt: Date,
  sources: [String]
}

let isSearchVisible = true;
const feed = ref<Array<Post>>([]);

onMounted(async () => {
  try {
    const feedResponse = await axios.get("/post/feed");
    feed.value = feedResponse.data;
    console.log(feed.value);

    feed.value.forEach(post => {
      console.log(post);

      console.log(post, " has type ", typeof (post));
      const datePosted = new Date(post.createdAt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
      post.createdAt = post.createdAt as Date;
      post.createdAt = datePosted;

    });


  } catch (error) {
    console.error('Error fetching feed:', error);
  }
});

const formatSource = (source) => {
  if(source.startsWith('http://') || source.startsWith('https://')) {
    return source;
  } else {
    return 'http://' + source;
  }
}

// console.log("userResponse", userResponse);

// feed.value.forEach(post => {
//   console.log("post content in feed", post.content);
// })

// feed.value.forEach(feed => {
//   console.log(feed, " has type ", typeof (feed));
//   const datePosted = new Date(feed.createdAt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
//   feed.createdAt = feed.createdAt as Date;
//   feed.createdAt = datePosted;
// });

</script>