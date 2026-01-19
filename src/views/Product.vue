<template>
  <div class="">

    <div class="row px-4 ">
      <div
          class="row col-xl-10 px-3 px-md-2 py-3 px-lg-4 py-lg-3 mx-auto p-2   bg-light mt-2 mt-md-5 justify-content-center ">
        <div class="col-md-10 col-xl-10 col-xxl-8 row p-1 mx-auto product-labels mb-2">
          <div class="col-6 p-0">
            <div v-if="product?.new" class=" text-center position-relative new-label">
              <div class="bg-success text-light text-center new-label-body justify-content-end">جدید</div>
              <div class="bg-success mx-auto new-label-pointer"></div>
            </div>
          </div>
          <div class="col-6 p-0" dir="ltr">
            <div v-if="product?.off && product?.stock" class=" text-center position-relative off-label">
              <div class="bg-primary text-light text-center off-label-body ">{{ product?.off }}%</div>
              <div class="bg-primary mx-auto off-label-pointer"></div>
            </div>
          </div>

        </div>
        <div class="col-md-4 col-xl-5 col-xxl-5 d-grid h-md-100 bg-white ms-md-1" style="border-radius: 2px">
          <!--          <div class="w-100 align-self-center">-->
          <!--&lt;!&ndash;            <img :src="product.image" class="img-fluid w-100"  :alt="product.title">&ndash;&gt;-->
          <!--            <lazy-image v-if="product?.id" style="align-self: center" :data="{image:imgUrl+product.images[0],title:product.title}"/>-->

          <!--          </div>-->


          <product-images-carousel v-if="product?.id" :images="product.images" :url="imgUrl"/>
        </div>
        <div class="col-md-6 col-xl-5 col-xxl-5 h-md-100 bg-white px-0 me-md-1">


          <div v-if="product.id" class="details h-100 d-grid" style="border-radius: 2px">
            <div class="details-inner p-0 d-grid">
              <div class="p-3 p-md-5 d-grid">
                <h3 class="">{{ product?.title }}</h3>
                <h6 class="mb-3">{{ product?.subtitle }}</h6>

                <select class="form-select rounded-0 mb-3" v-model="selectedProduct" @change="setPrice">
                  <option v-for="(p,index) in product.products" :value="p" :key="index">{{ p.size }}</option>
                </select>

                <div v-if="product?.stock" class="d-flex">
                  <h5 v-if="product?.off" class=" text-black-50 text-decoration-line-through ms-2">{{ price }}</h5>
                  <h5 class=" text-primary">{{ offPrice }} تومان</h5>
                </div>
                <div v-else class="d-flex"><h5 class="text-primary">ناموجود</h5></div>


                <div class="my-4 align-self-center">
                  <p class="mb-0">اورجینال</p>
                  <p class="mb-0">محصول کشور {{ product?.made_in }}</p>
                  <!--                  <p class="mb-0">تاریخ انقضا : {{ // product?.expire }}</p>-->
                </div>

                <!--                <ul class="pe-3">-->
                <!--                  <li v-for="item in product?.features">{{ item }}</li>-->
                <!--                </ul>-->
                <div class=" align-self-end  d-flex justify-content-end">
                  <button class="btn btn-sm btn-dark text-light" @click="increase">+</button>
                  <input type="number" min="0" max="100" value="1" style="width: 40px"
                         id="quantity" class="form-control form-control-sm rounded-0 d-inline-block text-center">
                  <button class="btn btn-sm btn-dark text-light" @click="decrease">-</button>

                </div>
              </div>

            </div>


            <div class="position-relative align-self-end">
              <div class="notif d-none">
                <i class="bi bi-check-lg"></i>
                این محصول در سبد شما قرار گرفت.
              </div>
              <button v-if="product.stock" @click="addToCart" class="add-to-cart-3 bg-primary">

                <i class="bi bi-cart-plus-fill"></i>
              </button>
            </div>
          </div>


        </div>

      </div>
      <div class="row col-xl-10  mx-auto py-3 px-0 ">
        <div class="col-12 mt-5 px-3 px-md-0 py-0">
          <p style="text-align: justify">
            {{ product?.text }}
          </p>
        </div>
        <h3 class="mt-5">محصولات مشابه</h3>
        <div class="col-12 px-0 row justify-content-end">
          <div class="row col-md-10 px-0" dir="ltr">
            <div class="col-6 col-md-2 p-0 pe-1" v-for="(item, index) in product?.sames" :key="index" dir="rtl">
              <product-card :product="item" :index="index" :url="imgUrl"/>
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
import App from "@/App.vue";
import productImagesCarousel from "@/components/ProductImagesCarousel.vue";

export default {
  name: "Product",
  components: {Shop, ProductCard, LazyImage, productImagesCarousel},
  setup() {
    const products = Shop.setup().data;
    const product = ref({});
    const sameProducts = ref([]);
    const route = useRoute();
    const selectedProduct = ref();
    const showNumbers = (number) => {
      return new Intl.NumberFormat().format(number);
    }
    const price = ref();
    const offPrice = ref();
    const url = App.setup().url;
    const imgUrl = App.setup().imgUrl;

    const getData = () => {
      axios.get(url + '/api/get/product/' + route.params.slug)
          .then((response) => {
            product.value = response.data;
          })
          .then(() => {
            selectedProduct.value = product.value.products[0];

            setPrice();
            sameProducts.value = products.filter((element) => element.category_id == product.value.category_id && element.id != product.value.id);

          })
          .catch((error) => {
            console.error(error);
          })
    };
    const setPrice = () => {
      let prc = selectedProduct.value.price ? selectedProduct.value.price : product.value.price;
      let offp = selectedProduct.value.off ? selectedProduct.value.off : product.value.off;
      price.value = showNumbers(prc);
      offPrice.value = showNumbers(prc - (prc * offp * 0.01));
    }
    onMounted(() => {
      console.log(route.params)
      window.scrollTo({top: 0, behavior: 'smooth'});
      getData();
    })

    const addToCart = () => {
      //axios...

      //if 200

      document.querySelector('.notif').classList.remove('d-none');
      document.querySelector('.notif').classList.add('slide-up');
      setTimeout(() => {
        document.querySelector('.notif').classList.add('d-none');
      }, 1800)
    }

    const increase = () => {
      document.getElementById('quantity').value = parseInt(document.getElementById('quantity').value)+1
    }
    const decrease = () => {
      if (document.getElementById('quantity').value > 0) {
        document.getElementById('quantity').value = parseInt(document.getElementById('quantity').value)-1
      }
    }


    return {
      product, products, sameProducts, price, offPrice, showNumbers,
      getData, url, imgUrl, selectedProduct, setPrice, addToCart, increase, decrease
    }
  }
}
</script>

<style scoped>
small, b {
  font-size: 11px !important;
}

.btn {
  border-radius: 0 !important;
}


</style>