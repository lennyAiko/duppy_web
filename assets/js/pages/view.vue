<script setup>
import { router } from '@inertiajs/vue3'
import { ref } from 'vue'
import { parse } from 'node-html-parser'

const { baseUrl, htmlPage } = defineProps({
  baseUrl: { type: String },
  htmlPage: { type: String }
})

const page = parse(htmlPage)

const url = new URL(baseUrl).host
console.log(url)
console.log(
  page.querySelector('meta[property="og:image"]').getAttribute('content')
)
console.log(
  page.querySelector('meta[property="og:title"]').getAttribute('content')
)
console.log(
  page.querySelector('meta[property="og:description"]').getAttribute('content')
)

// const image = ref(
//   page.querySelector('meta[property="og.image"]').getAttribute('content')
// )
</script>

<template>
  <button class="m-2 p-2" @click="() => router.visit('/')">Back</button>

  <p class="">View your SEO details</p>

  {{ baseUrl }}
</template>
