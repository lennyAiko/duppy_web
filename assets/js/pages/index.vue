<script setup>
import { ref, watch } from 'vue'
import { parse } from 'node-html-parser'

import { Link, Head, usePage, useForm, router } from '@inertiajs/vue3'

/** @type LoggedInUser */
const loggedInUser = ref(usePage().props.loggedInUser)

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

<template></template>
