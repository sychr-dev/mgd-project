<template>
    <v-container class="fill-height justify-center">
        <v-responsive
            maxWidth="900"
            class="justify-center"
        >
      <v-row>
          <v-col cols="12" md="4">
            <product-card
              image="https://via.placeholder.com/300"
              title="商品A"
              subtitle="4,800円"
              :isLogin="isLogin"
            />
          </v-col>
          <v-col cols="12" md="4">
            <product-card
              image="https://via.placeholder.com/300"
              title="商品B"
              subtitle="9,800円"
              :isLogin="isLogin"
            />
          </v-col>
          <v-col cols="12" md="4">
            <product-card
              image="https://via.placeholder.com/300"
              title="商品C"
              subtitle="19,800円"
              :isLogin="isLogin"
            />
          </v-col>
      </v-row>
    </v-responsive>
    </v-container>
  </template>
  
  <script>
export default {
    props:{
        isLogin:{
            type: Boolean,
            required: true
        }
    }
  }
  </script>
  