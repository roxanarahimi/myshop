<template>
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
export default {
  components: {LazyPage, NavBar, theFooter},
  setup(){
    // const url = 'https://panel.myshop.webagent.ir';
    // const imgUrl = 'https://panel.myshop.webagent.ir/storage/';
    const url = 'http://localhost:8000';
    const imgUrl = 'http://localhost:8000/storage/';

    return{
      url, imgUrl,
    }
  },

}
</script>
<style>

</style>
