<template>
  <div class="new-section min-vh-100 pt-5 text-center">
    <h3 class="mb-5 fw-bold" style="color: coral">پر فروش ترین محصولات</h3>
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <div class="d-flex justify-content-center">
          <button @click="categoryToggle('all')" id="cat_all"
                  class="product-section-btn product-active rounded-start-0">همه
          </button>
          <button v-for="(cat,index) in cats" :key="index" @click="categoryToggle(cat.id)" :id="'cat_'+cat.id"
                  class="product-section-btn border-end-0 rounded-0"
                  :class="{'border-start-2': index===cats.length-1}">
            {{ cat.title }}
          </button>
        </div>
        <div class="row pt-5 products-section">
          <div v-if="data.length" v-for="(item, index) in data.slice(0,4)" :key="index"
               class="col-6 col-md-3 px-0 product-card mb-5"
               :data-index="index" :data-category="item.category_id">
            <product-card :product="item" :index="index"/>
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
  props:['cats'],
  components: {ProductCard},
  setup(_props) {
    const products = [
      {
        id: 1,
        title: 'کپسول فیتو فانر 120 عددی',
        made_in: 'ایتالیا',
        price: 1600000,
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 0,
        stock: 0,
      },
      {
        id: 2,
        title: 'کپسول هیرتامین 30 عددی',
        made_in: 'آمریکا',
        price: 1100000,
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 0,
        stock: 2,
      },
      {
        id: 3,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        made_in: 'انگلیس',
        price: 1100000,
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        stock: 0,
      },
      {
        id: 4,
        title: 'کپسول فیتو فانر 120 عددی',
        made_in: 'ایتالیا',
        price: 1600000,
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 12,
        stock: 3,
      },
      {
        id: 5,
        title: 'کپسول هیرتامین 30 عددی',
        made_in: 'آمریکا',
        price: 1100000,
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 0,
        stock: 0,
      },
      {
        id: 6,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        made_in: 'انگلیس',
        price: 1100000,
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        stock: 200,
      },
      {
        id: 7,
        title: 'کپسول فیتو فانر 120 عددی',
        made_in: 'ایتالیا',
        price: 1600000,
        category_id: 2,
        image: '/img/phyto.png',
        new: false,
        off: 0,
        stock: 40,
      },
      {
        id: 8,
        title: 'کپسول هیرتامین 30 عددی',
        made_in: 'آمریکا',
        price: 1100000,
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 10,
        stock: 0,
      },
      {
        id: 9,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        made_in: 'انگلیس',
        price: 1100000,
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        stock: 200,
      },
      {
        id: 10,
        title: 'کپسول فیتو فانر 120 عددی',
        made_in: 'ایتالیا',
        price: 1600000,
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 0,
        stock: 880,
      },
      {
        id: 11,
        title: 'کپسول هیرتامین 30 عددی',
        made_in: 'آمریکا',
        price: 1100000,
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 8,
        stock: 200,
      },
      {
        id: 12,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        made_in: 'انگلیس',
        price: 1100000,
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        stock: 200,
      }
    ];
    const data = ref([products]);
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
      setBorders();
      console.log('ccc',_props.cats);
    });
    const categoryToggle0 = (id) => {
      document.querySelector('.product-active').classList.remove('product-active');
      document.querySelector('#cat_' + id)?.classList.add('product-active');


      document.querySelectorAll('.product-card').forEach(element => {
        element.style.transform = 'scale(0,0)'
        setTimeout(() => {
          element.classList.add('d-none');
        }, 100)

        setTimeout(() => {
          if (id == 'all') {
            element.classList.remove('d-none');
            setTimeout(() => {
              element.style.transform = 'scale(1,1)';
            }, 100);
          } else {
            let cat = element.getAttribute('data-category');
            if (cat == id) {
              element.classList.remove('d-none');
              setTimeout(() => {
                element.style.transform = 'scale(1,1)';
              }, 100)
            } else {
              element.style.transform = 'scale(0,0)'
              setTimeout(() => {
                element.classList.add('d-none');
              }, 100)
            }
          }
        }, 200)

      });

      setTimeout(() => {
        setBorders();
      }, 200)

    }
    const categoryToggle = (id) => {
      document.querySelector('.product-active').classList.remove('product-active');
      document.querySelector('#cat_' + id)?.classList.add('product-active');

      document.querySelectorAll('.product-card').forEach(element => {
        element.style.transform = 'scale(0,0)';
      });

      setTimeout(() => {
        data.value = (id == 'all') ? products : products.filter(p => p.category_id == id);

        // Now that data.value is updated, we wait a tick for DOM updates
        setTimeout(() => {
          document.querySelectorAll('.product-card')?.forEach((element) => {
            element.style.transform = 'scale(0,0)';
            setTimeout(() => {
              element.style.transform = 'scale(1,1)';
            }, 100);
          });
        }, 0); // Or use nextTick in Vue
      }, 300);

      setTimeout(() => { setBorders(); }, 300);

    }

    return {
      categoryToggle, data, setBorders,
    }
  }
}
</script>

<style scoped>

</style>