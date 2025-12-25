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
export default {
  components: {NavBar, theFooter},
  setup(){
    const url = 'https://panel.myshop.webagent.ir';
    const imgUrl = 'https://panel.myshop.webagent.ir/storage/';

    return{
      url, imgUrl,
    }
  }
}
</script>
<style>

</style>
