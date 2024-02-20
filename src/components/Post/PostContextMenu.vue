<template>
    <div>
        <ion-icon
            aria-hidden="true"
            :icon="ellipsisVerticalOutline"
            class="text-2xl hover:bg-slate-500 hover:bg-opacity-70 active:bg-slate-700 active:bg-opacity-80 rounded-lg p-1 cursor-pointer"
        />
        <v-menu activator="parent">
            <v-list style="background-color: rgb(168, 167, 167);">
                <v-list-item
                    v-for="(item, index) in actions"
                    :key="index"
                    :value="index"
                    class="mx-2 rounded-lg"
                    :class="{
                        'hover:bg-stone-500' : item.title !== 'Delete',
                        'hover:bg-red-700' : item.title === 'Delete'
                    }"
                    @click.stop="item.action()"
                >
                    <v-list-item-title>
                        <ion-icon
                            :icon="item.icon"
                        />
                        {{ item.title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-dialog v-model="editDialog" class="w-1/3">
            <div class="flex flex-col bg-[#1d1f20] text-slate-100 rounded-lg border-2 border-slate-700 p-5 w-full justify-center">
                <EditPost :postId="postId" @closeDialog="editDialog = false"/>
            </div>
        </v-dialog>
        <v-dialog v-model="deleteDialog" class="w-1/3">
            <div class="flex flex-col bg-[#1d1f20] text-slate-100 rounded-lg border-2 border-slate-700 p-5 w-full justify-center">
                <p class="text-xl">Are you sure you want to delete this post? This action cannot be undone.</p>
                <div class="flex flex-row justify-end p-3">
                    <button class="hover:bg-gray-500 active:bg-gray-600 rounded-lg p-2 mr-2" @click.stop="deleteDialog = false">Cancel</button>
                    <button class="bg-red-700 active:bg-red-800 rounded-lg p-2" @click.stop="deletePost">Delete</button>
                </div>
            </div>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon, IonItem } from '@ionic/vue';
import { ellipsisVerticalOutline, pencilSharp, trash } from 'ionicons/icons';
import { onMounted, ref, Ref } from 'vue';
import axios from 'axios';
import EditPost from './EditPost.vue';

const actions = [
    {
        title: "Edit",
        action: () => {
            editDialog.value = true;
        },
        icon: pencilSharp
    },
    {
        title: "Delete",
        action: () => {
            deleteDialog.value = true;
        },
        icon: trash
    }
]

const editDialog: Ref<boolean> = ref(false);
const deleteDialog: Ref<boolean> = ref(false);

const props = defineProps({
    postId: String
});

onMounted(() => {
    editDialog.value = false;
    deleteDialog.value = false;
});

const deletePost = async () => {
    await axios.delete(`post/${props.postId}`)
        .catch((err) => console.error(err));
    deleteDialog.value = false;
}
</script>