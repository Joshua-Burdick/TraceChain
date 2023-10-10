<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style = "text-align: center;">TraceChain</ion-title>
      </ion-toolbar>
    </ion-header>

   <ion-content>
   <div class="row">
   <div class = "col">
      <div class="text-center">
        <h5 style = "text-align: center;">Welcome to TraceChain!</h5>
        <p style = "text-align: center;">Sign up by entering your information below</p>
      </div>
      </div>
      </div>
      <ion-list inset="true">
        <form @submit.prevent="handleLogin">
          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input v-model="email" name="email" autocomplete type="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Username</ion-label>
            <ion-input v-model="username" name="username" autocomplete type="username"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Password</ion-label>
            <ion-input v-model="password" name="password" autocomplete type="password"></ion-input>
          </ion-item>
          <div class="ion-text-center"><ion-item>
            <ion-label position="stacked">First Name</ion-label>
            <ion-input v-model="firstname" name="firstname" autocomplete type="firstname"></ion-input>
          </ion-item><ion-item>
            <ion-label position="stacked">Last Name</ion-label>
            <ion-input v-model="lastname" name="lastname" autocomplete type="lastname"></ion-input>
          </ion-item>
            <ion-button style = "text-align: center;" type="submit" fill="clear">Submit</ion-button>
          </div>
        </form>
      </ion-list>
      <p>{{email}}</p>
    </ion-content>

  </ion-page>
</template>

data() {
	return {
		form: {
			email: null
			password: null
		},
	};
},

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonLabel, IonList, IonItem, IonAvatar } from '@ionic/vue';
export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonImg,
        IonLabel,
        IonList,
        IonItem,
        IonAvatar
    },
    data() {
        return {
            username: "initial",
            numCommunities: 3
        };
    }
};
</script>