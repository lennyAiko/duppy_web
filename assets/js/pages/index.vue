<script setup>
import { ref } from 'vue'
import { parse } from 'node-html-parser'

import { Link, Head, usePage } from '@inertiajs/vue3'

const { htmlText } = defineProps({
  htmlText: { type: String }
})

const page = parse(htmlText)

const onclickBtn = () => {
  console.log(page.getElementsByTagName('meta'))
}
</script>

<template>
  <Head title="Mellow Vue"></Head>
  <main>Hi there</main>

  <button @click="onclickBtn" class="">Click me</button>
</template>
<style></style>
