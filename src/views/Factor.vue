<template>

 <div v-if="order" class="row justify-content-md-center">
   <div class="d-flex col-lg-6 py-5 justify-content-between flex-wrap px-4">
     <h5 class="">سفارش شماره {{ order.code }}</h5>
     <span class="badge bg-warning text-light p-2">{{ order.status }}</span>
     <button class="btn btn-success btn-sm text-light m-0 ">
       <i class="bi bi-printer"></i>
       چاپ فاکتور</button>
   </div>
 </div>
  <div class="row justify-content-md-center" style="overflow-x: scroll">


    <div v-if="order" class=" col-lg-6 p-4 " style="min-width: max-content !important">

      <div class="" style="border: 2px lightgray dotted">
        <div class="d-flex justify-content-between bg-light p-3 text-black-50">
          <h6 class="fw-bold mb-0">فاکتور خرید</h6>
          <h5 class="fw-bold mb-0">RX<span class="text-primary">SHOP</span></h5>
          <h6 class="fw-bold mb-0">فروشگاه اینترنتی</h6>
        </div>
       <div class="p-2">
         <table class="table  table-borderless border-bottom-0">
           <tbody>
           <tr class="">
             <th scope="col">شماره سفارش</th>
             <th scope="row">{{ order.code }}</th>
           </tr>
           <tr>
             <th scope="col">تاریخ ثبت</th>
             <td>{{ order.payed_at }}</td>
           </tr>
           <tr>
             <th scope="col">گیرنده</th>
             <td>{{ order.user.name }}</td>
           </tr>
           <tr>
             <th scope="col">استان، شهر</th>
             <td>{{ order.address.city.province.name}}، {{order.address.city.name }}</td>
           </tr>
           <tr>
             <th scope="col">کد پستی</th>
             <td>{{ order.address.postal_code }}</td>
           </tr>
           <tr>
             <th scope="col">نشانی</th>
             <td>{{order.address.address }}</td>
           </tr>
           <tr>
             <th>جمع‌کل</th>
             <td>{{ order.total_amount }}</td>
           </tr>
           <tr>
             <th>تخفیف‌کل</th>
             <td>{{ order.total_off }}</td>
           </tr>
           <tr>
             <th>هزینه‌ارسال</th>
             <td>{{ order.delivery_amount }}</td>
           </tr>
           <tr>
             <th>مبلغ‌نهایی</th>
             <td>{{ order.amount }}</td>

           </tr>
           </tbody>
         </table>
         <table class="table border info">
           <tbody>
           <tr>
             <th scope="col">ردیف</th>
             <th class="product" scope="col">محصول</th>
             <th class="product" scope="col"></th>
             <th scope="col">تعداد</th>
             <th scope="col">قیمت واحد</th>
             <th scope="col">تخفیف</th>
             <th scope="col">مبلغ</th>
           </tr>
           <tr v-for="(item,index) in order.items">
             <td>{{ index + 1 }}</td>
             <td class="product"> {{item.product_info.title}}</td>
             <td class="product"> {{item.product.size }}</td>
             <td >{{ item.quantity }}</td>
             <td>{{ item.price }}</td>
             <td>{{ item.off }}%</td>
             <td>{{ item.price*(1-item.off/100)*item.quantity }}</td>
           </tr>
           </tbody>
         </table>
       </div>
        <div class="d-flex justify-content-between bg-light p-3">
          <h6 class="fw-bold mb-0"></h6>
          <small class="fw-bold text-black-50">https://rxshop.ir</small>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
import App from "@/App.vue";
import {onBeforeMount, ref} from "vue";
import {useRouter} from "vue-router";
import {useRoute} from "vue-router/dist/vue-router";

export default {
  name: "factor",
  setup(){
    const url = App.setup().url;
    const imgUrl = App.setup().imgUrl;
    const user = ref(JSON.parse(localStorage.getItem('user')));
    const order = ref();
    const route = useRoute();
    const getOrder = ()=>{
      axios.get(url+'/api/order/'+route.params.id)
          .then((response)=>{
            order.value = response.data
          }).catch((error)=>{console.error(error)});
    }

    onBeforeMount(()=>{
      getOrder();
    })
    return{
      url,imgUrl,user,order,route,getOrder
    }

  }
}
</script>
<style scoped>
table {
  font-size: 13px;
}
.info th:not(.product),.info td:not(.product){
  text-align: center;
}

</style>