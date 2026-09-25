<template>
<div>
  hhiihihi
</div>
</template>

<script>
import {useRoute} from "vue-router/dist/vue-router";
import App from "@/App.vue";
import {onMounted, ref} from "vue";

export default {
  setup(){
    const route = useRoute()
    const url = App.setup().url;
    const authority = route.query.Authority
    const status = route.query.Status

    const verifyPayment = ()=>{
      axios.post(url + '/api/verify/payment',{
        Authority: authority,
        Status: status
      }).then((response)=>{

      }).catch((error)=>{
        console.error(error)
      })
      ;
    };

    onMounted(()=>{
      console.log(route)
      verifyPayment();
    })

    return{
      route, verifyPayment, authority,status
    }
  }
}
</script>

<style scoped>

</style>