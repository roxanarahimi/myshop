<template>
  <div v-if="product" class="card w-100 mb-2" style="border-color: #eeeeee !important; border-radius: 2px; cursor: pointer">
    <div class="w-100 text-center" style="position: absolute;top:50px;left:0; z-index:100">
      <img  v-if="!product.stock" width="100" class="" src="/img/sold.png" >
    </div>

    <div class="card-body p-0 h-100" :class="{'gray-scale': product.stock === 0}" >
      <a :href="'/product/'+product.id" class="w-100">
        <div class="row p-1 mx-auto w-100 product-labels">
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
<!--        <img :src="product.image" class="img-fluid w-100" alt="">-->
        <lazy-image :data="{image:product.image,title:product.title}"/>
        <div class="text-center">
          <small class="fw-bold titles-font-size">{{ product.title }}</small><br>
          <small class=" titles-font-size">محصول کشور {{ product.made_in }}</small><br>
          <b v-if="product.stock" class="titles-font-size text-primary">{{ product.price }} تومان</b>
          <b v-else class="text-center titles-font-size text-primary">ناموجود</b>

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
  props: [ 'product', 'index' ],
  components:{ LazyImage},

}
</script>

<style scoped>

</style>