<template>
  <div v-if="product" class="card w-100 h-100 mb-2" style="border-color: #eeeeee !important; border-radius: 2px; cursor: pointer">
   <div class="card-body p-0 h-100"  >
      <a :href="'/product/'+product.slug" class="w-100">
        <div class="w-100 text-center" style="position: absolute;top:50px;left:0; z-index:100;">
          <img  v-if="product.stock === 0" width="100" class="" src="/img/sold.png" >
        </div>
        <div :class="{'gray-scale': product.stock === 0}">
          <div class="row p-1 mx-auto w-100 product-labels">
            <div class="col-6 p-0">
              <div v-if="product.new==1  && product.stock>0" class=" text-center position-relative new-label">
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
          <!--        <img :src="product.image" class="img-fluid w-100" alt="">-->
          <lazy-image v-if="product.id" :data="{image:url+product?.images[0],title:product.title}"/>
          <div class="text-center">
            <div style="height:50px !important">
              <small class="fw-bold titles-font-size mb-0">{{ product.title }}</small>
            </div>
<!--            <small class=" titles-font-size">محصول کشور {{ product.made_in }}</small><br>-->
            <div  v-if="product.stock >0" class="d-flex justify-content-center mb-1">
              <b v-if="product.off>0" class="titles-font-size text-black-50 text-decoration-line-through ms-2">{{ price }}</b>
              <b  class="titles-font-size text-primary">{{ offPrice }} تومان</b>
            </div>
            <div v-else  class="d-flex justify-content-center mb-1"> <b class="titles-font-size text-primary">ناموجود</b></div>


          </div>
        </div>
      </a>

      <div style="height: 35px; display: grid">
        <button v-if="product.stock" class="add-to-cart-2 bg-primary">
          <i class="bi bi-cart-plus-fill"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LazyImage from '@/components/LazyImage.vue'

export default {
  name: "ProductCard",
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