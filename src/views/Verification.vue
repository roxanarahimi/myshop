<template>
<div>
  <div class="row d-grid vh-100">
    <div class="col-md-8 col-lg-5 mx-auto align-self-center">
     <div class="card w-100 border border-dashed">
       <div class="card-body">
         <h3 class="w-100 text-center">{{result.title}}</h3>
         <b class="w-100 text-center">{{result.message}}</b>
         <div v-if="result.code" class="d-flex justify-content-between"><b>شماره سفارش</b><b>{{result.code}}</b></div>
         <div v-if="result.amount" class="d-flex justify-content-between"><b>پرداخت شما</b><b>{{result.amount}}</b></div>
         <div v-if="result.referenceId" class="d-flex justify-content-between"><b>کد پیگیری تراکنش</b><b>{{result.referenceId}}</b></div>
       </div>
     </div>
    </div>

  </div>
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
    const order_id = route.query.oid
    const result = ref({})

    const verifyPayment = ()=>{
      axios.post(url + '/api/verify/payment',
          {},
          {
            params: {
              Authority: authority,
              Status: status,
              order_id: order_id
            }

      }).then((response)=>{
        if(response.status === 200){
          result.value = response.data
        }else{
          result.value = response.data
        }
      }).catch((error)=>{
        console.error(error)
        result.value = error.data
      })
      ;
    };

    onMounted(()=>{
      console.log(route)
      if (status === 'NOK'){
        result.value.message = 'پرداخت انجام نشد'
      }
      verifyPayment();
    })

    return{
      route, verifyPayment, authority,status,order_id,result
    }
  }
}
</script>

<style scoped>

</style>