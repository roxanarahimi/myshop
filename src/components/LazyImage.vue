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


</style>