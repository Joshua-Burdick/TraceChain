    <template>
    <ion-page class="flex w-full">
      <ion-content class="ion-padding">
        <div class="accountVerification-container">
          <ion-img class="logo" src="/TraceChain.svg" alt="Logo"></ion-img>
          <ion-card class="accountVerification-card">
            <ion-card-header>
              <ion-card-title class="account-verify-text" >Click the button below to verify your account</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-list>
                <ion-button expand="full" color="danger" class="account-verify-button" @click="verifyAccount" >Verify</ion-button>
          <div class="ion-text-center">
        </div>
             </ion-list>
                
            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>


  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  
  const router = useRouter();
  
  const verifyAccount = async () => {
    try {
      const token = router.currentRoute.value.params.token; // Get verification token from route params
      await axios.get(`/register/verify/${token}`);
      router.push('/verification-success');
    } catch (error) {
      console.error('Error verifying account:', error);
    }
  };
  </script>
  