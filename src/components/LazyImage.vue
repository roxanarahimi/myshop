<template>
  <div v-show="!imageLoaded" class="w-100 position-relative">
    <img src="/img/shop.png" class="w-100" alt="my-shop">
    <img src="/img/loader.svg" class="w-100 loader">
  </div>
  <img class="w-100" :alt="data.title"
       :src="data.image"
       v-show="imageLoaded === true"
       @load="onImageLoad()"
       style="display: none;">
</template>
<script>

import {ref} from "vue";

export default {
  name: "LazyImage",
  props: ['index','data'],
  setup(){
    const imageLoaded= ref(false);
    const onImageLoad = () => {
        imageLoaded.value = true;
    }
    return{
      onImageLoad,imageLoaded
    }
  }
}
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  animation: rotate 2s infinite linear;
  animation-iteration-count: infinite;
  position: absolute;
  width: 20px !important;
  top: calc(50% - 10px);
  right: calc(50% - 10px);
}

</style>