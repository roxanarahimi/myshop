<template>
 <div class="row justify-content-center">
   <div class="col-lg-10 mb-5 p-3">
     <div class="d-flex py-5 justify-content-between">
       <h3 class="">سبد خرید</h3>
       <button class="btn btn-sm btn-dark text-light">حذف سبد</button>
     </div>

     <table class="table border table-borderless ">
       <thead>
       <tr>
         <th scope="col"  style="width: 20px">ردیف</th>
         <th scope="col" style="width: 50px"></th>
         <th scope="col" class="product">محصول</th>
         <th scope="col">تعداد</th>
         <th scope="col">قیمت</th>
         <th scope="col">تخفیف</th>
         <th scope="col">مبلغ</th>
         <th scope="col"  style="width: 20px"></th>
       </tr>
       </thead>
       <tbody >
       <tr>
         <td>1</td>
         <td><img src="/img/phyto.png" class="rounded rounded-circle" width="50px" alt=""></td>
         <td class="product">فیتو بطری 60 عددی</td>
         <td>
           <button class="btn btn-sm btn-primary text-light">+</button>
           <input type="number" min="0" max="100" value="2" class="form-control form-control-sm rounded-0 d-inline-block text-center" style="width: 35px">
           <button class="btn btn-sm btn-primary text-light">-</button>

         </td>
         <td>2500000</td>
         <td>10%</td>
         <td>2250000</td>
         <td style="width: 20px"><button class="btn btn-sm btn-secondary text-light"><i class="bi bi-x"></i></button></td>
       </tr>
       <tr >
         <th scope="row">2</th>
         <td><img src="/img/phyto.png" class="rounded rounded-circle" width="50px" alt=""></td>
         <td class="product">ماسک کلاژن بایودنس بسته 4 عددی</td>
         <td>
           <button class="btn btn-sm btn-primary text-light">+</button>
           <input type="number" min="0" max="100" value="1" class="form-control form-control-sm rounded-0 d-inline-block text-center" style="width: 35px">
           <button class="btn btn-sm btn-primary text-light">-</button>
         </td>
         <td>1300000</td>
         <td>0</td>
         <td>1300000</td>
         <td style="width: 20px"><button class="btn btn-sm btn-secondary text-light"><i class="bi bi-x"></i></button></td>
       </tr>
       <tr class="border-top" style="text-align:left !important">
         <th></th>
         <th>جمع کل</th>
         <th colspan="2">تخفیف کل</th>
         <th colspan="2">مبلغ نهایی</th>
         <th colspan="2"></th>
       </tr>
       <tr style="text-align:left !important">
         <td></td>
         <td>3500000</td>
         <td colspan="2">250000</td>
         <td colspan="2">3250000</td>
         <td colspan="2" class="product">
           <a href="/shop" class="btn btn-primary text-light ms-1">ادامه خرید</a>
           <button class="btn btn-success text-light">ثبت نهایی</button>
         </td>
       </tr>
       </tbody>
     </table>
   </div>
 </div>

</template>

<script>
export default {
  name: "Cart"
}
</script>

<style scoped>

td:not(.product),th:not(.product){
  text-align: center !important;
}
td,th{
  vertical-align: bottom !important;
}
.btn{
  border-radius: 0 !important;
}
</style>