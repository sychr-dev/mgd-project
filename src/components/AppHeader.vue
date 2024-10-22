<template>
      <v-app-bar>
          <v-app-bar-title>MGD Training</v-app-bar-title>
          <template v-slot:append>
            <div v-if="!isLogin">
            <v-btn class="mr-5" variant="outlined" @click="toggleLogin">ログイン</v-btn>
            </div>
            <div v-else>
                <v-row class="d-flex align-center justify-center mr-5">
                <h3 class="mr-5">User Name 様</h3>
                <v-btn variant="outlined" @click="toggleLogin">ログアウト</v-btn>
                </v-row>
            </div>
          </template>
      </v-app-bar>
  </template>
  
<script>
  export default {
    props:{
        isLogin:{
            type: Boolean,
            required: true
        }
    },
    methods: {
        toggleLogin() {
            this.$emit('toggle-login');
      }
    }
  }
</script>
