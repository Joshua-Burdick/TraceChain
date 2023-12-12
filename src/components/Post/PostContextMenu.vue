<template>
    <div>
        <ion-icon
            aria-hidden="true"
            :icon="ellipsisVerticalOutline"
            class="text-2xl hover:bg-slate-500 hover:bg-opacity-70 active:bg-slate-700 active:bg-opacity-80 rounded-lg p-1 cursor-pointer"
        />
        <v-menu activator="parent">
            <v-list style="background-color: rgb(214 211 209);">
                <v-list-item
                    v-for="(item, index) in actions"
                    :key="index"
                    :value="index"
                    class="mx-2 rounded-lg"
                    :class="{
                        'hover:bg-stone-400' : item.title !== 'Delete',
                        'hover:bg-red-600' : item.title === 'Delete'
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
        <v-dialog v-model="dialog" class="w-1/3">
            <div class="flex bg-red-500 w-full justify-center">
                This is a dialog box
            </div>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonIcon, IonItem } from '@ionic/vue';
import { ellipsisVerticalOutline, pencilSharp, trash } from 'ionicons/icons';
import { onMounted, ref, Ref, PropType, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const actions = [
    {
        title: "Edit",
        action: () => {
            console.log("Edit");
            dialog.value = true;
        },
        icon: pencilSharp
    },
    {
        title: "Delete",
        action: () => {
            console.log("Delete");
            dialog.value = true;
        },
        icon: trash
    }
]

const contextMenu = ref(false);
const dialog = ref(false);

const props = defineProps({
    postId: String
});

watch(contextMenu, (value) => {
    console.log("contextMenu", value);
});
</script>