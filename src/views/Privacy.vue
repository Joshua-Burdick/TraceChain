<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content id="main-content">
            <div class="flex flex-col items-center p-4">
                <!-- Large Card -->
                <div class="bg-neutral-900 border-[7px] border-x-stone-700 border-y-stone-800 rounded-lg shadow-xl w-full h-[300px] lg:w-4/5 p-6 mt-6 mb-6">
                    <h1 style="font-weight: 800; font-size: 1.8em;
                    " class="pt-4 pb-6">Privacy Policy for TraceChain</h1>
                    <p style="color:darkgray" class="pb-6"><b>Last Updated:</b> December 7, 2023</p>
                    <p>Welcome to TraceChain, the social media platform where truth and citation matter.</p>
                    <p style="margin-top: 1vh;">This Privacy Policy describes how we collect, use, process, 
                    and disclose your information,</p>
                    <p style="margin-top: 1vh;">including personal information, in conjunction with your access to and use of the TraceChain platform.</p> 
                </div>
                <div class="flex flex-row justify-center gap-4 w-full lg:w-4/5">
                <!-- Medium Card 1 -->
                <div class="bg-neutral-900 border-[7px] border-x-stone-700 border-y-stone-800 rounded-lg shadow-xl w-full h-[500px] p-4 divide-y px-15 divide-x-stone-700 mb-6">
                    <div>
                    <h1 style="font-weight: 900;" class=" text-2xl pt-8">Information We Collect</h1>
                    <h1 style="font-weight: 700; font-size: 1em; color: darkgray;" class="pt-5">What You Provide to Us:</h1>
                    <p style="font-size: 0.9em;" class="py-8"><b>Account Information: </b>When you sign up for a TraceChain account, we require
                    certain information such as your <i>username</i>, <i>password</i>, and <i>email address</i>.</p>
                    </div>
                    <p style="font-size: 0.9em;" class="py-10"><b>Profile Information: </b>You may choose to provide additional information as part 
                    of your TraceChain profile, such as a profile picture, bio, and other details.</p>
                    <p style="font-size: 0.9em;" class="py-10"><b>Content Information: </b> We collect the content you post on TraceChain, including
                    your posts, likes, and the citations you provide.</p>
                </div>
                <!-- Medium Card 2 -->
                <div class="bg-neutral-900 border-[7px] border-x-stone-700 border-y-stone-800 rounded-lg shadow-xl w-1/2  p-4 mb-6">
                    <h1 class="text-2xl font-black pt-7">Sharing Policy</h1>
                    <h2 style="color: darkgray" class="text-base pt-5 font-bold">We Do Not:</h2>
                    <ul class="list-disc px-8 pt-5">
                        <li class="text-sm">Share your personal information with third parties except as described in this Privacy Policy.</li>
                    </ul>
                    <h2 style="color: darkgray" class="text-base pt-5 font-bold">We May:</h2>
                    <ul class="list-disc px-8 pt-5">
                        <li class="text-sm">Share your information with third-party service providers that help us to operate or improve services.</li>
                        <li class="text-sm pt-5">Disclose your information to comply with legal requirements, enforce our policies, respond to legal requests, protect anyone's rights, or reduce our legal risks.</li>
                    </ul>
                </div>
                </div>
                <div class="bg-neutral-900 border-[7px] border-x-stone-700 border-y-stone-800 rounded-lg shadow-xl w-full h-[600px] lg:w-4/5 p-6 mb-6">
                    <h1 style="font-weight: 800; font-size: 1.8em;
                    " class="pt-3 pb-6">Contact Us</h1>
                    <h1 class="text-base text-lg pb-3">Have Questions or Feedback?</h1>
                    <p>Your insights and inquiries are invaluable to us. Whether it's a question about how to use</p> 
                    <p>TraceChain, feedback on your experience, or suggestions for new features, we're all ears.</p>
                    <h1 class="text-base text-lg pb-3 pt-5">Need Help or Support?</h1>
                    <p>Encountering an issue or need guidance on the platform? Our dedicated support team is here </p>
                    <p>to assist you with any technical difficulties, account concerns, or general queries about TraceChain.</p>
                    <h1 class="text-base text-lg pb-3 pt-5">Reach Out to Us:</h1>
                    <p class="pb-2"><b>Email: </b>customerservice@TraceChain.com</p>
                    <p class="pb-2"><b>Phone: </b>(603) 123-4567</p>
                    <p><b>Address: </b>2500 N River Rd</p>
                    <p class="pb-9">Manchester, New Hampshire 03106</p>
                    <p>Thank you for choosing TraceChain as your go-to platform for insightful and cited content.</p>
                    <p>Let's continue to create a knowledgeable and connected world, together.</p>
                </div>
            </div>
        </ion-content>

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

#main-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200vh;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
