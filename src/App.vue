<template>
  <nav-bar />
 <main style="margin-top: 56px; min-height: 275px">
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
