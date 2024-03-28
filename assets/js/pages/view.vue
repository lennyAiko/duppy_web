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

const imageUrl = ref(
  page.querySelector('meta[property="og:image"]')?.getAttribute('content')
)
const title = ref(
  page.querySelector('meta[property="og:title"]')?.getAttribute('content')
)
const description = ref(
  page.querySelector('meta[property="og:description"]')?.getAttribute('content')
)
const type = ref(
  page.querySelector('meta[property="og:type"]')?.getAttribute('content')
)
const author = ref(
  page.querySelector('meta[name="author"]')?.getAttribute('content')
)
</script>

<template>
  <button class="m-2 p-2" @click="() => router.visit('/')">Back</button>

  <p class="">View your SEO details</p>

  {{ url }}
  <img v-if="imageUrl" :src="imageUrl" alt="SEO image" class="h-20 w-20" />
  <p class="" v-else>No image found</p>
  {{ title }} <br />
  {{ description }} <br />
  {{ type }} <br />
  {{ author }} <br />
</template>
