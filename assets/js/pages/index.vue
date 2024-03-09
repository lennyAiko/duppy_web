<script setup>
import { ref } from 'vue'
import { parse } from 'node-html-parser'

import { Link, Head, usePage } from '@inertiajs/vue3'

const { htmlText, baseUrl } = defineProps({
  htmlText: { type: String },
  baseUrl: { type: String }
})

const page = parse(htmlText)

watcher()

const image = ref(
  page.querySelector('meta[property="og:image"]').getAttribute('content')
)
const url = new URL(baseUrl).host
const title = ref(
  page.querySelector('meta[property="og:title"]').getAttribute('content')
)

const description = ref(
  page.querySelector('meta[property="og:description"]').getAttribute('content')
)
</script>

<template>
  <Head title="Mellow Vue"></Head>
  <main>Hi there</main>

  <div v-if="htmlText" class="">
    <button @click="onclickBtn" class="p-2 m-2 border">Click me</button>
    <img :src="image" alt="" class="" />
    <p class="">{{ url }}</p>
    <p class="">{{ title }}</p>
    <p class="">{{ description }}</p>
  </div>
</template>
<style></style>
