<template> </template>

<script setup>
import { isExternal } from '@/utils/validate'
import { defineProps } from 'vue'
defineProps({
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped></style>
