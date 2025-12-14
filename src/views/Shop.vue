<template>
  <div class="row">

    <div class="col-lg-10 px-4 mx-auto d-flex justify-content-xl-between p-3 ps-2 pb-5">
      <div class="pt-2 shop-sidebar">
        <div class="w-100 mb-3 p-3 text-center  bg-white-smoke">
          <input type="text" id="search" @input="search" class="form-control form-control-sm " placeholder="جستجوی محصول">
        </div>
        <div class="w-100 mb-3 p-3 text-center  bg-white-smoke">
          <button class="btn btn-sm w-100 btn-primary text-light">حذف فیلتر ها</button>
        </div>
        <div class="w-100 mb-3 p-3  bg-white-smoke">
          <div class="form-check d-flex justify-content-start">
            <input class="form-check-input" type="checkbox" @change="setFilters" id="exist">
            <label class="form-check-label me-4" for="exist">کالاهای موجود</label>
          </div>

        </div>
        <div class="w-100 mb-3 p-3  bg-white-smoke">
          <div class="form-check d-flex justify-content-start">
            <input class="form-check-input" type="checkbox" @change="setFilters" id="off">
            <label class="form-check-label me-4" for="off">شامل تخفیف</label>
          </div>
        </div>
        <div class="w-100 mb-3 p-3  bg-white-smoke">
          <div v-for="cat in categories" class="form-check d-flex justify-content-start">
            <input class="form-check-input" type="checkbox" @change="setFilters" :id="'cat-'+cat.id">
            <label class="form-check-label me-4" :for="'cat-'+cat.id">{{ cat.title }}</label>
          </div>
        </div>
        <div class="w-100 mb-3 p-3  bg-white-smoke">
          <div class="form-check  d-flex justify-content-start">
            <input class="form-check-input" type="radio" @change="setFilters" name="new" id="new" checked>
            <label class="form-check-label me-4" for="new">جدید ترین</label>
          </div>
          <div class="form-check  d-flex justify-content-start">
            <input class="form-check-input" type="radio" @change="setFilters" name="sale" id="sale">
            <label class="form-check-label me-4" for="sale">پر فروش ترین</label>
          </div>
          <div class="form-check  d-flex justify-content-start">
            <input class="form-check-input" type="radio" @change="setFilters" name="cheap" id="cheap">
            <label class="form-check-label me-4" for="cheap">ارزان ترین</label>
          </div>
          <div class="form-check  d-flex justify-content-start">
            <input class="form-check-input" type="radio" @change="setFilters" name="expensive" id="expensive">
            <label class="form-check-label me-4" for="expensive">گران ترین</label>
          </div>

        </div>
      </div>
      <div class="mt-2 px-3 shop-products" style="">
        <div class="row" v-if="products?.length">
          <div  class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 h-100 px-1" v-for="(item, index) in products" :key="index">
            <product-card :product="item" :index="index" :url="imgUrl"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import {onMounted, ref} from "vue";
import App from "@/App.vue";
export default {
  name: "Shop",
  components:{ ProductCard },
  setup() {
    const categories = ref([]);
    const products = ref();

    const url = App.setup().url;
    const imgUrl = App.setup().imgUrl;

    const getCategories = ()=>{
      axios.get(url+'/api/categories')
          .then((response)=>{
            categories.value = response.data;
          }).catch((error)=>{
            console.error(error)
      });
    }
    const getProducts = ()=>{
      let category_ids = [];
      let stock = false;
      let is_new = false;
      let off = false;
      let sale = false;
      let cheap = false;
      let expensive = false;
      axios.get(url+'/api/products?category_ids='+category_ids+'&stock='+stock+'&new='+is_new+'&off='+off+'&sale='+sale+'&cheap='+cheap+'&expensive='+expensive)
          .then((response)=>{
            products.value = response.data;
          }).catch((error)=>{
            console.error(error)
      });
    }
    onMounted(()=>{
      document.querySelector('#search')?.focus();
      getCategories();
      getProducts();
    })
    const search = ()=>{
      let term = document.querySelector('#search').value;
      if (term.length){
        products.value = data.filter((item)=>{ return item.title.includes(term)});
      }else{
        products.value = data;
      }

    }
    const setFilters = ()=>{

    }
    return {
        search, products,setFilters,categories,getProducts,getCategories,url, imgUrl
    }
  },
}
</script>

<style scoped>

</style>