<template>
  <!--  <main-carousel/>-->
  <main-banners/>
  <div class=" text-center row p-1 pt-3 pb-0 text-primary icons ">
    <div class="col-3 p-0 col-md-3 mb-3">
      <i class="bi bi-patch-check d-block fs-big "></i>
      <small class="fs-small">100% اورجینال</small>
    </div>
    <div class="col-3 p-0 col-md-3 mb-3">
      <i class="bi bi-star d-block fs-big"></i>
      <small class="fs-small">محصولات ترند</small>
    </div>
    <div class="col-3 p-0 col-md-3 mb-3">
      <i class="bi bi-headset d-block fs-big"></i>
      <small class="fs-small">پشتیبانی فوری</small>
    </div>
    <div class="col-3 p-0 col-md-3 mb-3">
      <i class="bi bi-shield-lock d-block fs-big"></i>
      <small class="fs-small">پرداخت امن</small>
    </div>
  </div>

  <div class="row bg-light pt-md-5  ">
    <div class="col-lg-10 mx-auto row px-4 px-md-5 py-4 py-md-0  mb-md-5">
      <div v-for="item in categories" class="col-12 col-md-4 p-4 pb-0 mb-md-4">
        <div class="row bg-white cat-section ">
          <div class="col-4 col-md-6 px-0 text-center cat-img-container">
            <img :src="imgUrl+item.image" class="img-fluid cat-img w-100" alt="">
          </div>
          <div class="col-8 col-md-6 cat-label d-grid ps-3 ps-md-4">
            <div style="align-self: center">
              <h5 class="cat-txt fw-bold text-center mt-2 mt-md-0">محصولات {{ item.title }}</h5>
              <!--              <br><br>-->
              <!--       <small class="mb-0 cat-txt">65 محصول</small>&lt;!&ndash;      &ndash;&gt;-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row cta justify-content-center">
   <div class="row justify-content-center justify-content-md-between col-md-8">
     <div class="col-md-5 d-grid">
       <div class="align-self-center p-5 pb-0 p-md-0">
         <h2 class="cta-txt ">
           برای گرفتن کدتخفیف اولین
           <br>
           خریدت همین الان عضو شو!
         </h2>
         <div class="align-self-center d-flex justify-content-md-end mb-md-5  ps-5">
           <router-link class="btn btn-success border-radius-2 text-light fw-bold px-5" to="/login">ثبت نام خیـــلی سریع</router-link>
         </div>
       </div>
     </div>

     <div class="col-8 col-md-6 mt-md-5 pt-md-5">
       <img src="/img/gg.png" class="w-100" alt="">
     </div>
   </div>
  </div>

  <new-products-section :cats="categories" :url="url" :imgUrl="imgUrl"/>

  <div class="text-center">
    <router-link to="/shop" class="btn btn-primary d-inline-block px-5 mb-5 mt-5 mt-md-0 border-radius-2 ">فروشگاه
    </router-link>
  </div>

  <div class=" d-flex flex-wrap justify-content-between px-3 pt-4 brands-wrapper " >
    <div class="brand"><img src="/img/brands/cosrx.jpg" class="w-100" alt=""></div>
    <div class="brand"><img src="/img/brands/phyto.jpg" class="w-100" alt=""></div>
    <div class="brand"><img src="/img/brands/sheglam.png" class="w-100" alt=""></div>
    <div class="brand"><img src="/img/brands/hairtamin.png" class="w-100" alt=""></div>
    <div class="brand"><img src="/img/brands/ordinary.png" class="w-100" alt=""></div>
    <div class="brand"><img src="/img/brands/numbozin.jpg" class="w-100" alt=""></div>
    <div class="brand d-none d-md-block"><img src="/img/brands/myvitamins.jpg" class="rounded w-100" alt=""></div>

  </div>
</template>

<script>
// @ is an alias to /src
import mainCarousel from "@/components/MainCarousel";
import mainBanners from "@/components/MainBanners.vue";
import newProductsSection from "@/components/ProductsSection";
import {onBeforeMount, ref} from "vue";
import App from "@/App.vue";

export default {
  name: 'HomeView',
  components: {mainBanners, newProductsSection,},
  setup() {
    const categories = ref([]);
    const getCats = () => {
      axios.get(url + '/api/categories')
          .then((response) => {
            categories.value = response.data;
          })
    }
    const url = App.setup().url;
    const imgUrl = App.setup().imgUrl;

    onBeforeMount(() => {
      getCats();
      console.log(categories.value)
    })

    return {
      url, imgUrl, categories, getCats
    }
  }

}
</script>
