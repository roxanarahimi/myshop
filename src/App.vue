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
    const url = 'http://localhost:8000';
    const imgUrl = 'http://localhost:8000/storage/';

    return{
      url, imgUrl,
    }
  }
}
</script>
<style>

</style>
