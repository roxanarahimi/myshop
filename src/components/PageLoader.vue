<template>
  <div class=" text-center page-loader-wrapper">
    <div class=" text-center loader-inner">
    </div>
    <div class="loader-center vh-100">
      <img src="/img/pageLoader.svg" width="100px" class="spinner" alt="">
      <p class="text-light text-center" style="margin-top: -50px">درحال بارگذاری...</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped>

</style>