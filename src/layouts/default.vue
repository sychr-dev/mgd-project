<template>
  <v-app>
    <AppHeader :isLogin="isLogin" @toggle-login="toggleLogin" />
    <v-main>
      <router-view :isLogin="isLogin"/>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';

  export default {
    data(){
      return{
        isLogin: false
      }
    },
    methods: {
      toggleLogin() {
        this.isLogin = !this.isLogin;
      }
    }
  }
</script>
