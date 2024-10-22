<template>
  <v-container class="fill-height">
        <v-sheet
        class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
        elevation="4"
        height="250"
        max-width="800"
        width="100%"
        rounded
        >
        <div>
          <div class="mb-10">
            <h1>THANKS</h1>
          </div>
            <v-btn color="#fff" variant="elevated" rounded @click="goBack">商品ページへ</v-btn>
        </div>
          </v-sheet>
    </v-container>  
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>