<script setup>
import { ref, watch } from 'vue'
import { parse } from 'node-html-parser'

import { Link, Head, usePage, useForm, router } from '@inertiajs/vue3'

const { htmlText, baseUrl } = defineProps({
  htmlText: { type: String },
  baseUrl: { type: String }
})

const message = usePage().props.flash?.error

const form = useForm({
  url: ''
})

const submit = () => {
  // form.get('/inspect')
  router.visit(`/view?url=${form.url}`)
}
// const page = parse(htmlText)

// const image = ref(
//   page.querySelector('meta[property="og:image"]').getAttribute('content')
// )
// const url = new URL(baseUrl).host
// const title = ref(
//   page.querySelector('meta[property="og:title"]').getAttribute('content')
// )

// const description = ref(
//   page.querySelector('meta[property="og:description"]').getAttribute('content')
// )
</script>

<template>
  <Head title="Mellow Vue"></Head>
  <main>Hi there</main>

  <form class="" @submit.prevent="submit">
    <input
      type="text"
      name="url"
      id="url"
      v-model="form.url"
      class="border-2"
    />
    <button type="submit">Inspect</button>
    <p class="text-sm text-red-500" v-if="message">{{ message[0] }}</p>
  </form>

  <!-- <div v-if="htmlText" class="">
    <button @click="onclickBtn" class="p-2 m-2 border">Click me</button>
    <img :src="image" alt="" class="" />
    <p class="">{{ url }}</p>
    <p class="">{{ title }}</p>
    <p class="">{{ description }}</p>
  </div> -->
</template>
<style></style>
