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
    const url = 'https://panel.rxshop.ir';
    const imgUrl = 'https://panel.rxshop.ir/storage/';
    // const url = 'http://localhost:8000';
    // const imgUrl = 'http://localhost:8000/storage/';
    const updateUser=()=>{
      let user = {}
      let cart = {}
      axios.get(url+'/api/user/'+JSON.parse(localStorage.getItem('user')).id)
          .then((response)=>{
            user = response.data;
            cart = response.data.cart;
            localStorage.setItem('user', JSON.stringify(user));
          })
          .then(()=>{
            document.getElementById('sum').innerText = cart.sum;
            document.getElementById('sum2').innerText = cart.sum;
            if(cart.sum === 0){
              document.getElementById('sum').style.display='none';
              document.getElementById('sum2').style.display='none';
            }
          })
          .catch((error) => console.error(error))
    }

    return{
      url, imgUrl,updateUser
    }
  },

}
</script>
<style>

</style>
