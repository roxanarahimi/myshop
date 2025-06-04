<template>
  <div v-if="product" class="card w-100 mb-2" style="border-color: #eeeeee !important; border-radius: 2px; cursor: pointer">
    <div class="card-body p-0">
      <a :href="'/product/'+product.id" class="w-100">
        <div class="row p-1 mx-auto w-100 product-labels">
          <div class="col-6 p-0">
            <div v-if="product.new" class=" text-center position-relative new-label">
              <div class="bg-success text-light text-center new-label-body justify-content-end">جدید</div>
              <div class="bg-success mx-auto new-label-pointer"></div>
            </div>
          </div>
          <div class="col-6 p-0" dir="ltr">
            <div v-if="product.off" class=" text-center position-relative off-label" >
              <div class="bg-primary text-light text-center off-label-body ">{{ product.off }}%</div>
              <div class="bg-primary mx-auto off-label-pointer"></div>
            </div>
          </div>

        </div>
        <img :src="product.image" class="img-fluid w-100" alt="">
        <div class="text-center">
          <small class="fw-bold titles-font-size">{{ product.title }}</small><br>
          <small class=" titles-font-size">محصول کشور {{ product.made_in }}</small><br>
          <b class=" titles-font-size text-primary">{{ product.price }} تومان</b>
        </div>
      </a>

      <div style="height: 40px; display: grid">
        <button class="add-to-cart-2 bg-primary">
          <i class="bi bi-cart-plus-fill"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: [ 'product', 'index' ],

}
</script>

<style scoped>

</style>