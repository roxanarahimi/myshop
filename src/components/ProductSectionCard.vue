<template>
<div v-if="product" class="position-relative">

  <router-link :to="'/product/'+product.slug" >
    <div v-if="!product.stock" class="w-100 text-center" style="position: absolute;top:50px;left:0; z-index:100">
      <img  width="100" class="" src="/img/sold.png" >
    </div>
    <div class="p-4" :class="{'gray-scale': product.stock === 0}">
      <div class="row p-0 mx-auto w-100 product-labels">
        <div class="col-6 p-0">
          <div v-if="product.new==1 && product.stock>0" class=" text-center position-relative new-label">
            <div class="bg-success text-light text-center new-label-body justify-content-end">جدید</div>
            <div class="bg-success mx-auto new-label-pointer"></div>
          </div>
        </div>
        <div class="col-6 p-0" dir="ltr">
          <div v-if="product.off>0 && product.stock>0" class=" text-center position-relative off-label" >
            <div class="bg-primary text-light text-center off-label-body ">{{ product.off }}%</div>
            <div class="bg-primary mx-auto off-label-pointer"></div>
          </div>
        </div>

      </div>
      <div>
<!--        <img :src="product.image" class="img-fluid w-100" alt="">  -->
        <lazy-image :data="{image:url+product.images[0],title:product.title}"/>

      </div>
      <div class="text-center product-txt">
        <small class="fw-bold">{{ product.title}}</small><br>
        <small>محصول کشور {{ product.made_in }}</small><br>
        <div  v-if="product.stock" class="d-flex justify-content-center">
          <b v-if="product.off" class=" text-black-50 text-decoration-line-through ms-2">{{ price }}</b>
          <b  class=" text-primary">{{ offPrice }} تومان</b>
        </div>
        <div v-else  class="d-flex justify-content-center"> <b class="text-primary">ناموجود</b></div>
      </div>
    </div>
  </router-link>
  <div style="height: 40px; display: grid">
    <button v-if="product.stock" class="add-to-cart">
      <i class="bi bi-cart-plus-fill"></i>
    </button>
  </div>
</div>
</template>

<script>
import LazyImage from '@/components/LazyImage.vue'


export default {
  name: "ProductSectionCard",
  props: [ 'product', 'index','url' ],
  components:{ LazyImage},
  setup(_props){
    const showNumbers = (number)=>{
      return new Intl.NumberFormat().format(number);
    }
    const price = showNumbers(_props.product.price);
    const offPrice = showNumbers(_props.product.price - (_props.product.price*_props.product.off*0.01));

    return{
      price, offPrice,showNumbers,
    }
  }
}
</script>

<style scoped>

</style>