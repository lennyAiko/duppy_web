<script setup>
import { ref, watch } from 'vue'
import { parse } from 'node-html-parser'

import { Link, Head, usePage, useForm, router } from '@inertiajs/vue3'

const message = usePage().props.flash?.error

const form = useForm({
  url: ''
})

const submit = () => {
  if (form.url.startsWith('https://') || form.url.startsWith('http://')) {
    router.visit(`/view?url=${form.url}`)
  } else {
    router.visit(`/view?url=https://${form.url}`)
  }
}
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
</template>
<style></style>
