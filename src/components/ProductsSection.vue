<template>
  <div class="new-section min-vh-100 pt-5 text-center">
    <h3 class="mb-5 fw-bold" style="color: coral">پر فروش ترین محصولات</h3>
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <div class="d-flex justify-content-center">
          <button @click="categoryToggle('all')" id="all" class="product-section-btn  product-active">همه</button>
          <button @click="categoryToggle('skin')" id="skin" class="product-section-btn border-end-0">پوست</button>
          <button @click="categoryToggle('hair')" id="hair" class="product-section-btn border-end-0">مــو</button>
          <button @click="categoryToggle('slimming')" id="slimming" class="product-section-btn border-end-0">لاغری</button>
        </div>
        <div class="row pt-5 products-section">
          <div v-for="(item, index) in data" :key="index" :data-index="index" :data-category="item.category"  class="col-3 px-0 product-card mb-5">
            <div class="p-4 ">
              <div class="row d-flex justify-content-between" style="height: 28px">
                <div class="col-6">
                  <div v-if="item.new" class=" text-center">
                    <span class="bg-success text-light px-3 d-block" style="border-radius: 2px; width: 65px !important; ">جدید</span>
                    <div class="bg-success mx-auto" style="width: 7px; height: 7px; transform: rotate(45deg); margin-top: -4px;margin-right: 50px!important"></div>
                  </div>
                </div>
                <div class="col-6">
                  <div v-if="item.off" class=" text-center">
                    <span class="bg-primary text-light px-3 d-block" style="border-radius: 2px; width: 65px !important; " dir="ltr">{{ item.off }}%</span>
                    <div class="bg-primary mx-auto" style="width: 7px; height: 7px; transform: rotate(45deg); margin-top: -4px;margin-left: 60px!important"></div>
                  </div>
                </div>

              </div>
              <div>
                <img :src="item.image" class="img-fluid w-100" alt="">
              </div>
              <div class="text-center">
                <small class="fw-bold">{{ item.title}}</small><br>
                <small>محصول کشور {{ item.made_in }}</small><br>
                <b style="color: coral">{{ item.price}} تومان</b>
              </div>
            </div>
            <div style="height: 40px; display: grid">
              <button class="add-to-cart">
<!--                افزودن به سبد خرید-->
                <i class="bi bi-cart-plus-fill"></i>

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";

export default {
  name: "ProductsSection",
  setup(){

    const data = [
      { title: 'کپسول فیتو فانر 120 عددی', made_in: 'ایتالیا', price: '1.600.000', category: 'hair', image: '/img/phyto.png', new: true, off: 0 },
      { title: 'کپسول هیرتامین 30 عددی', made_in: 'آمریکا', price: '1.100.000', category: 'hair', image: '/img/Hairtamin.png', new: false, off: 0 },
      { title: 'کپسول کوکونات کلاژن 60 عددی', made_in: 'انگلیس', price: '1.100.000', category: 'skin', image: '/img/colagen.png', new: false, off: 0 },
      { title: 'کپسول فیتو فانر 120 عددی', made_in: 'ایتالیا', price: '1.600.000', category: 'hair', image: '/img/phyto.png', new: true, off: 12 },
      { title: 'کپسول هیرتامین 30 عددی', made_in: 'آمریکا', price: '1.100.000', category: 'hair', image: '/img/Hairtamin.png', new: false, off: 0 },
      { title: 'کپسول کوکونات کلاژن 60 عددی', made_in: 'انگلیس', price: '1.100.000', category: 'skin', image: '/img/colagen.png', new: false, off: 0 },
      { title: 'کپسول فیتو فانر 120 عددی', made_in: 'ایتالیا', price: '1.600.000', category: 'hair', image: '/img/phyto.png', new: false, off: 0 },
      { title: 'کپسول هیرتامین 30 عددی', made_in: 'آمریکا', price: '1.100.000', category: 'hair', image: '/img/Hairtamin.png', new: false, off: 10 },
      { title: 'کپسول کوکونات کلاژن 60 عددی', made_in: 'انگلیس', price: '1.100.000', category: 'skin', image: '/img/colagen.png', new: false, off: 0 },
      { title: 'کپسول فیتو فانر 120 عددی', made_in: 'ایتالیا', price: '1.600.000', category: 'hair', image: '/img/phyto.png', new: true, off: 0 },
      { title: 'کپسول هیرتامین 30 عددی', made_in: 'آمریکا', price: '1.100.000', category: 'hair', image: '/img/Hairtamin.png', new: false, off: 8 },
      { title: 'کپسول کوکونات کلاژن 60 عددی', made_in: 'انگلیس', price: '1.100.000', category: 'skin', image: '/img/colagen.png', new: false, off: 0 }
    ];
    const setBorders = ()=>{
     document.querySelectorAll('.product-card').forEach(element=>{
     element.classList.add('product-section-border-right');
     })
      let items = document.querySelectorAll('.product-card:not(.d-none)');
     items[0]?.classList.remove('product-section-border-right');
     items[4]?.classList.remove('product-section-border-right');
     items[8]?.classList.remove('product-section-border-right');
    }
    onMounted(()=>{
      setBorders();
    });
    const categoryToggle = (id) =>{
      document.querySelector('.product-active').classList.remove('product-active');
      document.querySelector('#'+id).classList.add('product-active');


      document.querySelectorAll('.product-card').forEach(element=>{


        element.style.transform = 'scale(0,0)'
        setTimeout(()=>{
          element.classList.add('d-none');
        },100)

        setTimeout(()=>{
          if (id == 'all'){
            element.classList.remove('d-none');
            setTimeout(()=>{
              element.style.transform = 'scale(1,1)';
            },100);
          }else{
            let cat = element.getAttribute('data-category');
            if (cat == id){
              element.classList.remove('d-none');
              setTimeout(()=>{
                element.style.transform = 'scale(1,1)';
              },100)
            }else{
              element.style.transform = 'scale(0,0)'
              setTimeout(()=>{
                element.classList.add('d-none');
              },100)
            }
          }

        },200)


      });

      setTimeout(()=>{
        setBorders();
      },200)

    }

    return{
      categoryToggle, data, setBorders
    }
  }
}
</script>

<style scoped>

</style>