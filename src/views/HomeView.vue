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
        <router-link to="/shop" @click="setFilter('category_ids',item.id)" class="row bg-white cat-section ">
          <div class="col-4 col-md-6 px-0 text-center cat-img-container">
<!--            <img :src="imgUrl+item.image" class="img-fluid cat-img w-100" alt="">-->
            <lazy-image class="cat-img w-100" :data="{image: imgUrl+item.image, title:'rxshop'}" />
          </div>
          <div class="col-8 col-md-6 cat-label d-grid ps-3 ps-md-4">
            <div style="align-self: center">
              <h5 class="cat-txt fw-bold text-center mt-2 mt-md-0">محصولات {{ item.title }}</h5>
              <!--              <br><br>-->
              <!--       <small class="mb-0 cat-txt">65 محصول</small>&lt;!&ndash;      &ndash;&gt;-->
            </div>
          </div>
        </router-link>
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
            <router-link class="btn btn-success border-radius-2 text-light fw-bold px-5 text-nowrap" to="/login">ثبت نام
              خیـــلی سریع
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-8 col-md-6 mt-md-5 pt-md-5">
        <lazy-image class="w-100" :data="{image: '/img/gg.png', title:'rxshop'}" />

      </div>
    </div>
  </div>

  <new-products-section :cats="categories" :url="url" :imgUrl="imgUrl"/>

  <div class="text-center">
    <router-link to="/shop" class="btn btn-primary d-inline-block px-5 mb-5 mt-5 mt-md-0 border-radius-2 ">فروشگاه
    </router-link>
  </div>

  <div class="brands-wrapper w-100">
    <div class="pt-4 px-1 px-md-3 brands-inner ">
      <router-link to="/shop" v-for="item in brands" :key="item.id" :title="item.name"  class="brand d-inline-block mx-2 mx-lg-4" @click="setFilter('brand_id',item.id)">
<!--        <img :src="imgUrl+item.image" class="w-100" :alt="item.name">-->
        <lazy-image class="w-100" :data="{image: imgUrl+item.image, title: item.name}" />

      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import mainBanners from "@/components/MainBanners.vue";
import newProductsSection from "@/components/ProductsSection";
import {onMounted, ref} from "vue";
import App from "@/App.vue";
import {RouterLinkStub} from "@vue/test-utils";
import LazyImage from "@/components/LazyImage.vue";

export default {
  name: 'HomeView',
  components: {LazyImage, RouterLinkStub, mainBanners, newProductsSection,},
  setup() {
    const categories = ref([]);
    const brands = ref([]);
    const getCats = () => {
      axios.get(url + '/api/categories')
          .then((response) => {
            categories.value = response.data;
          })
    }
    const getBrands = () => {
      axios.get(url + '/api/brands')
          .then((response) => {
            brands.value = response.data;
            console.log('bb', brands.value)
          }).then(() => {
        if (localStorage.getItem('filterType') === 'brand_id') {
          document.getElementById('brand-' + localStorage.getItem('filterValue'))?.setAttribute('checked', 'checked');
          localStorage.removeItem('filterType')
          localStorage.removeItem('filterValue')
        }
      }).then(() => {
        getProducts();
      }).catch((error) => {
        console.error(error)
      });
    }

    const url = App.setup().url;
    const imgUrl = App.setup().imgUrl;


    const setFilter = (type, id) => {
      localStorage.setItem('filterType', type)
      localStorage.setItem('filterValue', id)
    }
    onMounted(()=>{
      getCats();
      getBrands();
      console.log(categories.value)
    })
    return {
      url, imgUrl, categories, getCats, setFilter, brands, getBrands,
    }
  }

}
</script>
