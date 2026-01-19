<template>
<div>
  <div v-if="data.length" id="carouselExampleAutoplaying w-100" class="carousel slide carousel-fade" data-bs-pause="false" data-bs-ride="carousel" data-bs-interval="2000">
    <div class="carousel-inner">
      <div v-for="(item,index) in data" :key="index" class="carousel-item w-100" :class="{'active':index==0}" data-bs-interval="2000">
        <img :src="imgUrl+item.image" class="img-fluid w-100" alt="">
      </div>
    </div>
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