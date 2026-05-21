<template>
  <div class="row">

    <div class="col-lg-10 px-4 mx-auto d-flex justify-content-xl-between p-3 ps-2 pb-5">
      <div class="pt-2 shop-sidebar">
        <div class="w-100 mb-2 p-2 p-md-3 text-center  bg-white-smoke">
          <input type="text" id="search" @input="getProducts" v-model="term"
                 class=" border-radius-2 form-control form-control-sm "
                 placeholder="جستجوی محصول">
        </div>
        <div class="w-100 mb-2 p-2 p-md-3 text-center  bg-white-smoke">
          <button class="btn btn-sm w-100 btn-primary text-light border-radius-2 " @click="reset">حذف فیلتر ها</button>
        </div>
        <div class="w-100 mb-2 p-2 p-md-3  bg-white-smoke">
          <div class="form-check d-flex justify-content-start">
            <input class="form-check-input" type="checkbox" name="stock" @change="getProducts" v-model="stock"
                   id="exist">
            <label class="form-check-label me-4" for="exist">کالاهای موجود</label>
          </div>

        </div>
        <div class="w-100 mb-2 p-2 p-md-3  bg-white-smoke">
          <div class="form-check d-flex justify-content-start">
            <input class="form-check-input" type="checkbox" @change="getProducts" v-model="off" id="off">
            <label class="form-check-label me-4" for="off">شامل تخفیف</label>
          </div>
        </div>
        <div v-if="categories.length" class="w-100 mb-2 p-2 p-md-3  bg-white-smoke">
          <div v-for="cat in categories" class="form-check d-flex justify-content-start">
            <input class="form-check-input" name="category_ids[]" :value="cat.id" @change="getProducts" type="checkbox"
                   :id="'cat-'+cat.id">
            <label class="form-check-label me-4" :for="'cat-'+cat.id">{{ cat.title }}</label>
          </div>
        </div>
        <div class="w-100 mb-2 p-2 p-md-3   bg-white-smoke">
          <div v-for="item in brands" :key="item.id" @click="getProducts" class="form-check d-flex justify-content-end">
            <div>
              <label class="form-check-label ms-2" :for="'brand-'+item.id" :title="item.name">{{ item.name }}</label>
              <input class="form-check-input" type="radio" @change="getProducts" name="brand_id" :value="item.id" :id="'brand-'+item.id">
            </div>
          </div>

        </div>
        <!--        <div class="w-100 mb-3 p-3  bg-white-smoke">-->
        <!--          <div @click="getProducts" class="form-check  d-flex justify-content-start">-->
        <!--            <input class="form-check-input" type="radio" name="sort[]" value="new" id="new" checked>-->
        <!--            <label class="form-check-label me-4" for="new">جدید ترین</label>-->
        <!--          </div>-->
        <!--          <div @click="getProducts" class="form-check  d-flex justify-content-start">-->
        <!--            <input class="form-check-input" type="radio" name="sort[]" value="sale" id="sale">-->
        <!--            <label class="form-check-label me-4" for="sale">پر فروش ترین</label>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
      <div class="mt-2 px-3 shop-products" style="">
        <div class="row" v-if="products?.length">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 h-100 px-1" v-for="(item, index) in products"
               :key="index">
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
  components: {ProductCard},
  setup() {
    const categories = ref([]);
    const products = ref([]);
    const brands = ref([]);

    const url = App.setup().url;
    const imgUrl = App.setup().imgUrl;

    const getCategories = () => {
      axios.get(url + '/api/categories')
          .then((response) => {
            categories.value = response.data;
          }).then(() => {
        if (localStorage.getItem('filterType') === 'category_ids') {
          document.getElementById('cat-' + localStorage.getItem('filterValue'))?.setAttribute('checked', 'checked');
          localStorage.removeItem('filterType')
          localStorage.removeItem('filterValue')
        }
      }).then(() => {
        getProducts();
      }).catch((error) => {
        console.error(error)
      });
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
    const category_ids = ref([]);
    const stock = ref(false);
    const is_new = ref(false);
    const off = ref(false);
    const sort = ref('new');
    const term = ref('');
    const brand_id = ref('');

    const getProducts = () => {
      products.value = [];
      setTimeout(() => {
        category_ids.value = Array.from(document.querySelectorAll('input[name="category_ids[]"]:checked')).map(cb => cb.value);
        brand_id.value = document.querySelector('input[name="brand_id"]:checked')?.value || '';
        axios.get(url + '/api/products?category_ids=' + category_ids.value + '&stock='
            + stock.value + '&new=' + is_new.value + '&off=' + off.value + '&sort='
            + sort.value + '&term=' + term.value + '&brand_id=' + brand_id.value)
            .then((response) => {
              products.value = response.data;
            }).catch((error) => {
          console.error(error)
        });
      }, 300)

    }
    onMounted(() => {
      document.querySelector('#search')?.focus();
      getCategories();
      getBrands();
      // if(localStorage.getItem('filterType') === 'brand_id'){
      //   brand_id.value = localStorage.getItem('filterValue');
      // }
      if (!localStorage.getItem('filterType')) {
        getProducts();
      }

    })


    const reset = () => {
      document.querySelectorAll('input[type="checkbox"]:checked')
          .forEach(cb => cb.checked = false);
      document.querySelectorAll('input[type="radio"]:checked')
          .forEach(cb => cb.checked = false);
      // stock.value = false;
      //   is_new.value = false;
      //   off.value = false;
      //   sort.value = 'new';
      getProducts();
    }

    return {
      term, products, categories, getProducts, getCategories, getBrands, url, imgUrl,
      category_ids, stock, is_new, off, sort, reset, brand_id, brands
    }
  },
}
</script>

<style scoped>

</style>