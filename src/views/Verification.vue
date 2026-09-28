<template>
<div>
  <div class="row d-grid px-4 " style="height: calc(100vh - 100px)">
    <div class="col-md-8 col-lg-4 mx-auto align-self-center">
     <div v-if="result || title" class="px-4 py-5 w-100" style="border: 2px var(--bs-primary) dotted; border-radius: 2px">
         <h4 class="w-100 text-center">{{result.title}}</h4>
         <b class="w-100 text-center d-block">{{result.message}}</b>
         <h4 v-if="title" class="w-100 text-center">{{title}}</h4>
         <b v-if="message" class="w-100 text-center d-block">{{message}}</b>
         <div v-if="result.code" class="d-flex justify-content-between mt-3"><b>شماره سفارش</b><b>{{result.code}}</b></div>
         <div v-if="result.amount" class="d-flex justify-content-between"><b>پرداخت شما</b><b>{{result.amount}}</b></div>
         <div v-if="result.referenceId" class="d-flex justify-content-between"><b>کد پیگیری تراکنش</b><b>{{result.referenceId}}</b></div>
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
    const title = ref('')
    const message = ref('')

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
          title.value = 'تراکنش انجام نشد'
          message.value = 'لطفا پس از بررسی صورت حساب بانکی خود، مجدد اقدام کنید.'
        }
      }).then(()=>{
        if(route.query.Status === 'NOK'){
          title.value = 'تراکنش انجام نشد'
          message.value = 'لطفا پس از بررسی صورت حساب بانکی خود، مجدد اقدام کنید.'
        }
      }).then(()=>{
        App.setup().updateUser();
      }).catch((error)=>{
        if(route.query.Status === 'NOK'){
          title.value = 'تراکنش انجام نشد'
          message.value = 'لطفا پس از بررسی صورت حساب بانکی خود، مجدد اقدام کنید.'
        }
        if (error.request && !error.response) {
          // احتمال زیاد CORS یا Network Error
          console.log('CORS / Network Error');
          title.value = 'این صفحه در دسترس نیست'
          message.value = ''
        } else if (error.response) {
          // سرور پاسخ داده
          console.log('HTTP Error:', error.response.status);
          title.value = 'خطا'
          message.value = 'HTTP Error: '+ error.response.status
        } else {
          // خطای خود Axios
          console.log('Axios Error:', error.message);
          title.value = 'خطا'
          message.value = 'Axios Error: '+ error.message
        }
        App.setup().updateUser();
      })
      ;
    };

    onMounted(()=>{
      console.log(route)
      verifyPayment();
    })

    return{
      route, verifyPayment, authority,status,order_id,result,title,message
    }
  }
}
</script>

<style scoped>

</style>