<template>
<div v-if="product">
  <router-link :to="'/product/'+product.id">
    <div class="p-4">
      <div class="row p-0 mx-auto w-100 product-labels">
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
      <div>
        <img :src="product.image" class="img-fluid w-100" alt="">
      </div>
      <div class="text-center product-txt">
        <small class="fw-bold">{{ product.title}}</small><br>
        <small>محصول کشور {{ product.made_in }}</small><br>
        <b style="color: coral">{{ product.price}} تومان</b>
      </div>
    </div>
  </router-link>
  <div style="height: 40px; display: grid">
    <button class="add-to-cart">
      <i class="bi bi-cart-plus-fill"></i>
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: "ProductSectionCard",
  props: [ 'product', 'index' ],
}
</script>

<style scoped>

</style>