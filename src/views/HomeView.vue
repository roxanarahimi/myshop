<template>
  <main-carousel/>

  <div class="bg-primary text-center text-light row p-4 px-lg-5">
    <div class="col-6 col-md-3 mb-3">
      <i class="bi bi-patch-check d-block fs-big"></i>
      <small>محصولات اورجینال</small>
    </div>
     <div class="col-6 col-md-3 mb-3">
      <i class="bi bi-star d-block fs-big"></i>
      <small>محصولات ترند</small>
    </div>
    <div class="col-6 col-md-3 mb-3">
      <i class="bi bi-headset d-block fs-big"></i>
      <small>پشتیبانی 24 ساعته</small>
    </div>
    <div class="col-6 col-md-3 mb-3">
      <i class="bi bi-shield-lock d-block fs-big"></i>
      <small>پرداخت امن</small>
    </div>
  </div>

  <div class="row bg-light pt-5">
    <div class="col-lg-10 mx-auto row px-5">
      <div v-for="item in categories" class="col-md-4 p-4">
        <div class="row bg-white cat-section ">
          <div class="col-6  px-0 text-center cat-img-container">
            <img :src="imgUrl+item.image" class="img-fluid cat-img w-100" alt="">
          </div>
          <div class="col-6  cat-label d-grid ps-3 ps-md-4">
            <div style="align-self: center">
              <h5 class="cat-txt fw-bolder text-center">محصولات  {{ item.title }}</h5>
<!--              <br><br>-->
<!--       <small class="mb-0 cat-txt">65 محصول</small>&lt;!&ndash;      &ndash;&gt;-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <new-products-section :cats="categories" :url="url" :imgUrl="imgUrl" />

</template>

<script>
// @ is an alias to /src
import mainCarousel from "@/components/MainCarousel";
import newProductsSection from "@/components/ProductsSection";
import {onBeforeMount, ref} from "vue";
import App from "@/App.vue";

export default {
  name: 'HomeView',
  components: {mainCarousel, newProductsSection,},
  setup(){
    const categories = ref([]);
    const getCats = ()=>{
      axios.get(url+'/api/categories')
          .then((response)=>{
            categories.value = response.data;
          })
    }
    const url = App.setup().url;
    const imgUrl = App.setup().imgUrl;

    onBeforeMount(()=>{
      getCats();
      console.log(categories.value)
    })

    return{
      url, imgUrl, categories, getCats
    }
  }

}
</script>
