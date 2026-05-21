<template>
  <div class="container-fluid p-0 pe-md-3 m-0">
    <div class="row p-4 pb-0 p-md-3 text-light banners" >
      <div class="col-md-8 border-radius-2 justify-content-between row m-0 banner1 mb-3 mb-md-0">
        <div class="col-6 col-md-6 text-light px-0 px-md-2 d-grid my-md-5">
          <div class="align-self-center px-0 px-md-3">
            <p class="fw-bolder  mb-2 mb-md-4 d-none d-md-block banner1-head">به فروشگاه rx خوش آمدید</p>
            <p class="f" style="">
              <p class="d-inline-block fw-bolder  mb-0 banner1-txt">زیبــــــایی Natural...   </p>
              <br class="d-md-none">
              <p class="d-inline-block fw-bolder  mb-0 banner1-txt"> Make up حـــرفه ای! </p>
            </p>
            <router-link to="/shop" class="btn btn-lg d-none d-md-block btn-primary border-radius-2  d-block mt-5">برو به فروشگاه</router-link>
            <router-link to="/shop" class="btn btn-sm d-md-none btn-primary border-radius-2  d-block">برو به فروشگاه</router-link>
          </div>
        </div>
        <div class="col-6 p-0 px-md-2 col-md-6 d-grid ">
          <div class="overflow-hidden align-self-end px-1">
            <div class="w-100">
              <lazy-image :data="{image: '/img/gal.png', title:'rxshop'}" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 row p-0 px-md-3 m-0">
        <div class="col-12 col-md-12 mb-2 mb-md-3 ">
          <a :href="banners[0]?.link" class=" text-light banner2 border-radius-2 row justify-content-between">
              <div class="col-6 col-md-6 d-grid">
                <h4 v-if="banners.length" class="align-self-center  banner-txt2">{{banners[0].text}}</h4>
              </div>
              <div class="col-5 col-md-6 d-grid justify-content-end">
                <!--              <img src="/img/eye.png"  alt="">-->
                <div v-if="banners.length" class="w-75 d-block align-self-center">
                  <lazy-image :data="{image: imgUrl+banners[0].image, title:'rxshop'}" />
                </div>
              </div>

          </a>
        </div>
        <div class="col-12 col-md-12 mb-1 mb-md-0">
          <a :href="banners[1]?.link" class="text-light banner3 border-radius-2 row justify-content-between">

            <div class="col-6 col-md-6 d-grid">
              <h4 v-if="banners.length" class="align-self-center  banner-txt2">{{banners[1].text}}</h4>
            </div>
            <div class="col-5 col-md-6 d-grid justify-content-end">
              <div v-if="banners.length" class="w-75 d-block align-self-center">
                <lazy-image :data="{image: imgUrl+banners[1].image, title:'rxshop'}" />
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>

  </div>
</template>
<script>

import {onBeforeMount, ref} from "vue";
import App from "@/App.vue";
import LazyImage from "@/components/LazyImage.vue";

export default {
  name: "MainBanners",
  components:{LazyImage, App},
  setup(){
    const banners = ref([]);
    const goTo = (id)=>{
      document.querySelector('#'+id).scrollIntoView();
    };
    const getData = ()=>{
      axios.get(url+'/api/get/banners')
          .then((response)=>{
            banners.value = response.data;
          }).catch((error)=>{
        console.error(error)
      });
    }
    const url = App.setup().url;
    const imgUrl = App.setup().imgUrl;

    onBeforeMount(()=>{
      getData();
    })

    return{
      url, imgUrl, banners, getData, goTo
    }
  }
}
</script>



<style scoped>

</style>