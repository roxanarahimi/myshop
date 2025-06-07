<template>
  <div>
    <div class="row px-4 ">
      <div class="row col-xl-10 px-3 px-md-2 py-3 px-lg-4 py-lg-3 mx-auto p-2   bg-light mt-2 mt-md-5 justify-content-center ">
        <div class="col-md-10 col-xl-10 col-xxl-8 row p-1 mx-auto product-labels mb-2">
          <div class="col-6 p-0">
            <div v-if="product.new" class=" text-center position-relative new-label">
              <div class="bg-success text-light text-center new-label-body justify-content-end">جدید</div>
              <div class="bg-success mx-auto new-label-pointer"></div>
            </div>
          </div>
          <div class="col-6 p-0" dir="ltr">
            <div v-if="product.off && product.stock" class=" text-center position-relative off-label" >
              <div class="bg-primary text-light text-center off-label-body ">{{ product.off }}%</div>
              <div class="bg-primary mx-auto off-label-pointer"></div>
            </div>
          </div>

        </div>
        <div class="col-md-4 col-xl-5 col-xxl-4 d-grid h-md-100 bg-white ms-md-1" style="border-radius: 2px">
          <div class="w-100 align-self-center">
<!--            <img :src="product.image" class="img-fluid w-100"  :alt="product.title">-->
            <lazy-image style="align-self: center" :data="{image:product.image,title:product.title}"/>

          </div>
        </div>
        <div class="col-md-6 col-xl-5 col-xxl-4 h-md-100 bg-white px-0 me-md-1">

          <div class="details " style="border-radius: 2px">
            <div class="details-inner p-0 d-grid">
              <div class="p-3 p-md-5">
                <h3 class="">{{ product.title }}</h3>
                <h6 class="mb-5">{{ product.subtitle }}</h6>


                <div  v-if="product.stock" class="d-flex">
                  <h5 v-if="product.off" class=" text-black-50 text-decoration-line-through ms-2">{{ price }}</h5>
                  <h5  class=" text-primary">{{ offPrice }} تومان</h5>
                </div>
                <div v-else  class="d-flex"> <h5 class="text-primary">ناموجود</h5></div>




                <h6>محصول کشور {{ product.made_in }}</h6>
                <h6>تاریخ انقضا : {{ product.expire }}</h6>

                <ul class="pe-3">
                  <li v-for="item in product.features">{{ item }}</li>
                </ul>
              </div>

            </div>
            <button v-if="product.stock" class="add-to-cart-3 bg-primary">
              <i class="bi bi-cart-plus-fill"></i>
            </button>
          </div>


        </div>

      </div>
      <div class="row col-xl-10  mx-auto py-3 px-0 ">
        <div class="col-12 mt-5 px-3 px-md-0 py-0">
          <p style="text-align: justify">
            {{ product.text }}
          </p>
        </div>
        <h3 class="mt-5">محصولات مشابه</h3>
        <div class="col-12 px-0 row justify-content-end">
          <div class="row col-md-10 px-0" dir="ltr">
            <div class="col-6 col-md-2 p-0 pe-1" v-for="(item, index) in sameProducts.slice(0, 4)" :key="index" dir="rtl">
              <product-card :product="item" :index="index"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import {onMounted, ref} from "vue";
import Shop from './Shop';
import {useRoute} from "vue-router/dist/vue-router";
import ProductCard from '@/components/ProductCard.vue'
import LazyImage from '@/components/LazyImage.vue'

export default {
  name: "Product",
  components: {Shop, ProductCard,LazyImage},
  setup() {
    const products = Shop.setup().data;
    const product = ref({});
    const sameProducts = ref([]);
    const route = useRoute();
    const showNumbers = (number)=>{
      return new Intl.NumberFormat().format(number);
    }
    const price = ref();
    const offPrice = ref();

    onMounted(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
      product.value = products.find((element) => element.id == route.params.id);
      price.value = showNumbers(product.value.price);
      offPrice.value = showNumbers(product.value.price - (product.value.price*product.value.off*0.01));
      sameProducts.value = products.filter((element) => element.category_id == product.value.category_id && element.id != product.value.id);
    })

    return {
      product, products, sameProducts, price, offPrice,showNumbers,
    }
  }
}
</script>

<style scoped>
small, b {
  font-size: 11px !important;
}
</style>