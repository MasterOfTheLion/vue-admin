<template>
  <!-- 展示外部图标 -->
  <div v-if="isExternal"></div>
  <!-- 展示内部图标 -->
  <svg v-else></svg>
</template>

<script setup>
import { isExternal } from '@/utils/validate'
import { computed, defineProps } from 'vue'
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

/**
 * 判断当前图标是否为外部图标
 */
const isExternal = computed(() => isExternal(props.icon))
/**
 * 外部图标样式
 */
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))
/**
 * 内部图标
 */
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style lang="scss" scoped></style>
