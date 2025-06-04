<template>
  <div>
    <div class="row">
      <div class="row col-lg-10 px-4 mx-auto p-3 ps-2 bg-light mt-5 justify-content-xl-center py-4">

        <div class="col-4 d-grid" style="border-radius: 2px">
          <div class="bg-white w-100">
            <img :src="product.image" class="img-fluid w-100" style="align-self: center" :alt="product.title">
          </div>
        </div>
        <div class="col-4">

          <div class="details  bg-white" style="border-radius: 2px">
            <div class="details-inner p-0 d-grid">
              <div class="p-5">
                <h3 class="">{{ product.title }}</h3>
                <h6 class="mb-5">{{ product.subtitle }}</h6>
                <h5 class="text-primary">{{ product.price }} تومان</h5>
                <h6>محصول کشور {{ product.made_in }}</h6>
                <h6>تاریخ انقضا : {{ product.expire }}</h6>

                <ul class="pe-3">
                  <li v-for="item in product.features">{{ item }}</li>
                </ul>
              </div>
              <button class="add-to-cart-3 bg-primary">
                <i class="bi bi-cart-plus-fill"></i>
              </button>
            </div>
          </div>


        </div>

      </div>
      <div class="row col-lg-10  mx-auto py-3 px-0 ">
        <div class="col-12 mt-5  p-0">
          <p style="text-align: justify">
            {{ product.text }}
          </p>
        </div>
        <div class="col-12 mt-5 px-0">
          <h3>محصولات مشابه</h3>
          <div class="row" dir="ltr">
            <div class="col-2 mb-3 h-100" v-for="(item, index) in sameProducts" :key="index">
              <div v-if="index <=3" class="card w-100 p-0" style="border-color: #eeeeee !important; border-radius: 2px; cursor: pointer">
                <div class="card-body p-0">
                  <a :href="'/product/'+item.id">

                    <img :src="item.image" class="img-fluid w-100" alt="">

                    <div class="text-center">
                      <small class="fw-bold titles-font-size">{{ item.title }}</small><br>
                      <small class=" titles-font-size">محصول کشور {{ item.made_in }}</small><br>
                      <b class=" titles-font-size text-primary" >{{ item.price }} تومان</b>
                    </div>
                  </a>

                  <div style="height: 40px; display: grid">
                    <button class="add-to-cart-2 bg-primary">
                      <i class="bi bi-cart-plus-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
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

export default {
  name: "Product",
  components: {Shop},
  setup() {
    const products = Shop.setup().data;
    const product = ref({});
    const sameProducts = ref([]);
    const route = useRoute();

    onMounted(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
      product.value = products.find((element) => element.id == route.params.id);
      sameProducts.value = products.filter((element) => element.category_id == product.value.category_id && element.id != product.value.id);
    })
    return {
      product, products, sameProducts
    }
  }
}
</script>

<style scoped>
small,b{
  font-size: 11px!important;
}
</style>