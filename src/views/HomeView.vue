<template>
  <main-carousel/>
  <div class="row bg-light pt-5">
    <div class="col-lg-10 mx-auto row px-5">
      <div class="col-md-4 p-4">
        <div class="row bg-white cat-section py-4 py-md-0 ">
          <div class="col-5 col-md-4  text-center cat-img-container">
            <img src="/img/phyto.png" class="img-fluid cat-img" alt="">
          </div>
          <div class="col-7 col-md-8 cat-label d-grid ps-3 ps-md-4">
            <div style="align-self: center">
              <b class="cat-txt">محصولات پوست</b>
              <br><br>
              <small class="mb-0 cat-txt">65 محصول</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 p-4">
        <div class="row bg-white cat-section py-4 py-md-0 ">
          <div class="col-5 col-md-4  text-center cat-img-container">
            <img src="/img/phyto.png" class="img-fluid cat-img" alt="">
          </div>
          <div class="col-7 col-md-8 cat-label d-grid ps-3 ps-md-4">
            <div style="align-self: center">
              <b class="cat-txt">محصولات مو</b>
              <br><br>
              <small class="mb-0 cat-txt">70 محصول</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 p-4">
        <div class="row bg-white cat-section py-4 py-md-0 ">
          <div class="col-5 col-md-4  text-center cat-img-container">
            <img src="/img/phyto.png" class="img-fluid cat-img" alt="">
          </div>
          <div class="col-7 col-md-8 cat-label d-grid ps-3 ps-md-4">
            <div style="align-self: center">
              <b class="cat-txt">محصولات لاغری</b>
              <br><br>
              <small class="mb-0 cat-txt">21 محصول</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <new-products-section/>

</template>

<script>
// @ is an alias to /src
import mainCarousel from "@/components/MainCarousel";
import newProductsSection from "@/components/ProductsSection";

export default {
  name: 'HomeView',
  components: {mainCarousel, newProductsSection,},


}
</script>
