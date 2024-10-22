<template>
    <v-card color="white">
      <v-img :src="image" height="300px" cover></v-img>
      <v-card-title class="text-h5 font-weight-bold">{{ title }}</v-card-title>
      <v-card-subtitle><v-chip>カテゴリー</v-chip></v-card-subtitle>
      <v-card-text class="text-h6">{{ subtitle }}</v-card-text>
      <v-card-actions>
        <v-btn block class="mb-2" color="primary" variant="elevated" rounded @click="buyProduct">購入する</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const props = defineProps({
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    isLogin: {
        type: Boolean,
        required: true
    }
  })
  
  const router = useRouter()
  
  const buyProduct = () => {
    if (props.isLogin) {
    // ログインしている場合の購入処理
    router.push('/thanks')
  } else {
    // ログインしていない場合の処理
    alert('ログインしてください')
  }
  }
  </script>
  
  <style scoped>
  /* カスタマイズ用のスタイルをここに追加 */
  </style>