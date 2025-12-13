<template>
  <main-carousel/>
  <div class="row bg-light pt-5">
    <div class="col-lg-10 mx-auto row px-5">
      <div v-for="item in categories" class="col-md-4 p-4">
        <div class="row bg-white cat-section ">
          <div class="col-5 col-md-4 px-0 text-center cat-img-container">
            <img :src="imgUrl+item.image" class="img-fluid cat-img w-100" alt="">
          </div>
          <div class="col-7 col-md-8 cat-label d-grid ps-3 ps-md-4">
            <div style="align-self: center">
              <b class="cat-txt">محصولات {{ item.title }}</b>
              <br><br>
       <small class="mb-0 cat-txt">65 محصول</small><!--      -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <new-products-section :cats="categories" />

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
