<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div>
    <img :src="`~/assets/img/partner/${img}`" class="sm:w-1/2 lg:w-72 mx-auto" alt="">
  </div>
</template>
