<template>
<div>
  <div  v-if="data.length"  id="carouselExampleInterval" class="carousel slide carousel-fade px-2 py-3 p-md-0" data-bs-pause="false" data-bs-ride="carousel" data-bs-interval="2000">
    <div class="carousel-inner">
      <div v-for="(item,index) in data" :key="index" class="carousel-item w-100 d-flex justify-content-end" :class="{'active':index==0}" data-bs-interval="3000">
        <img :src="imgUrl+item.image" class="h-100" alt="">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div v-else class="w-100 vh-100 d-grid">
    <img src="/img/loader.svg" class="loader align-self-center mx-auto">
  </div>
</div>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import App from "@/App.vue";
import LazyImage from "@/components/LazyImage.vue";

export default {
  name: "MainCarousel",
  components:{LazyImage, App},
  setup(){
    const data = ref([]);
    const getData = ()=>{
      axios.get(url+'/api/get/banners')
          .then((response)=>{
            data.value = response.data;
          }).catch((error)=>{
            console.error(error)
      });
    }
    const url = App.setup().url;
    const imgUrl = App.setup().imgUrl;

    onBeforeMount(()=>{
      getData();
      console.log(data.value)
    })

    return{
      url, imgUrl, data, getData
    }
  }
}
</script>

<style scoped>

</style>