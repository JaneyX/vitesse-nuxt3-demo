<script>
export default {
  name: 'BaseSection',
}
</script>

<template>
  <div class="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden" v-bind="$attrs">
    <slot />
  </div>
</template>
