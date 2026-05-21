<template>
  <div v-if="images.length ===1">
    <lazy-image class="w-100" :data="{image: url+images[0], title: title}" />
  </div>
  <div v-if="images.length>1" id="carouselExample" class="carousel carousel-dark slide">
    <div class="carousel-inner">
      <div v-for="(item,index) in images" :key="index" class="carousel-item" :class="{'active':index===0}">
<!--        <img :src="url+item" class="d-block w-100" alt="...">-->
        <lazy-image class="w-100" :data="{image: url+item, title: title}" />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import App from "@/App.vue";
import LazyImage from "@/components/LazyImage.vue";

export default {
  name: "MainCarousel",
  props:['images','url','title'],
  components:{LazyImage, App},
  setup(){
    return{
    }
  }
}
</script>

<style scoped>

</style>