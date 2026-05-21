<template>
  <loader v-if="isLoading"/>
  <nav-bar />
 <main>
   <router-view/>
 </main>
  <the-footer />
</template>
<script>
import NavBar from "@/components/NavBar";
import theFooter from "@/components/TheFooter";
import LazyPage from "@/components/LazyPage.vue";
import Loader from "@/components/PageLoader.vue";
export default {
  components: {LazyPage, NavBar, theFooter,Loader},
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    this.isLoading = true;
    document.querySelector('body').classList.add('stop-scrolling');

    document.querySelector('.loader-wrapper')?.classList.add('opacity-1')
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
       setTimeout(()=>{
         this.isLoading = false;
         document.querySelector('body').classList.remove('stop-scrolling');

       },1000)
      }
    };
  },
  unmounted() {
    document.querySelector('.loader-wrapper')?.classList.add('opacity-0')
  },
  setup(){
    const url = 'http://panel.rxshop.ir';
    const imgUrl = 'http://panel.rxshop.ir/storage/';
    // const url = 'http://localhost:8000';
    // const imgUrl = 'http://localhost:8000/storage/';

    return{
      url, imgUrl,
    }
  },

}
</script>
<style>

</style>
