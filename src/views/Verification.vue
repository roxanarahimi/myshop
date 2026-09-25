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
    const result = ref({});

    const verifyPayment = ()=>{
      axios.post(url + '/api/verify/payment',{
        Authority: route.params.Authority
      }).then((response)=>{
        result.value = response.data

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
      route, verifyPayment, result
    }
  }
}
</script>

<style scoped>

</style>