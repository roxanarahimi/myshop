<template>
  <div class="new-section min-vh-100 pt-5 text-center">
    <h3 class="mb-5 fw-bold text-primary">پر فروش ترین محصولات</h3>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div v-if="cats.length" class="d-flex justify-content-center">
          <button @click="categoryToggle('')" id="cat_"
                  class="product-section-btn product-active rounded-start-0">همه
          </button>
          <button v-for="(cat,index) in cats" :key="index" @click="categoryToggle(cat.id)" :id="'cat_'+cat.id"
                  class="product-section-btn border-end-0 rounded-0"
                  :class="{'border-start-2': index===cats.length-1}">
            {{ cat.title }}
          </button>
        </div>
        <div class="row pt-5 products-section"><!-- data.slice(0,4) -->
          <div v-if="data.length" v-for="(item, index) in data" :key="index"
               class="col-6 col-md-3 px-0 product-card mb-md-5"
               :data-index="index" :data-category="item.category_id">
            <product-card :product="item" :index="index" :url="imgUrl"/>
          </div>

          <!--          <div v-else><p>نداریم :(</p></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import ProductCard from "@/components/ProductSectionCard.vue";
import offcanvas from "../../public/bootstrap-5.3.2/js/src/offcanvas";

export default {
  name: "ProductsSection",
  props:['cats','url','imgUrl'],
  components: {ProductCard},
  setup(_props) {
    const data = ref([]);
    const setBorders = () => {
      document.querySelectorAll('.product-card').forEach(element => {
        element.classList.add('product-section-border-right');
      })
      let items = document.querySelectorAll('.product-card:not(.d-none)');
      items[0]?.classList.remove('product-section-border-right');
      items[4]?.classList.remove('product-section-border-right');
      items[8]?.classList.remove('product-section-border-right');
    }
    onMounted(() => {
      categoryToggle('');
      // setBorders();
    });
    const categoryToggle = (id) => {
      document.querySelector('.product-active')?.classList.remove('product-active');
      document.querySelector('#cat_' + id)?.classList.add('product-active');

      document.querySelectorAll('.product-card').forEach(element => {
        element.style.transform = 'scale(0,0)';
      });


      setTimeout(() => {
        axios.get(_props.url + '/api/special/products?category_id='+id)
            .then((response)=>{
              data.value = response.data;
            }).then(()=>{
         setBorders();
            });

        // Now that data.value is updated, we wait a tick for DOM updates
        setTimeout(() => {
          document.querySelectorAll('.product-card')?.forEach((element) => {
            element.style.transform = 'scale(0,0)';
            setTimeout(() => {
              element.style.transform = 'scale(1,1)';
            }, 1000);
          });
        }, 0); // Or use nextTick in Vue
      }, 100);


    }

    return {
      categoryToggle, data, setBorders,
    }
  }
}
</script>

<style scoped>

</style>