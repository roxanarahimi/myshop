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
  components: {NavBar, theFooter}
}
</script>
<style>

</style>
