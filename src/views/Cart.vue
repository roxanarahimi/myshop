<template>
  <div class="row justify-content-center">
    <div class="col-lg-10 mb-5 p-4 p-md-3">
      <div class="d-flex py-5 justify-content-between">
        <h3 class="">سبد خرید</h3>
        <button class="btn btn-sm btn-dark text-light">حذف سبد</button>
      </div>

      <div class="overflow-y-scroll">
        <table class="table border table-borderless  mb-0">
          <thead>
          <tr>
            <th class="d-none d-lg-table-cell" style="width: 20px">ردیف</th>
            <th  class="d-none d-lg-table-cell" style="width: 50px"></th>
            <th class="product">محصول</th>
            <th class=" d-none d-lg-table-cell">تعداد</th>
            <th>قیمت</th>
            <th>تخفیف</th>
            <th>مبلغ</th>
            <th class="d-none d-lg-table-cell" style="width: 20px"></th>
          </tr>
          </thead>
          <tbody>
          <tr class="" v-for="(item,index) in data.items" :key="index">
            <td class="d-none d-lg-table-cell">{{ index + 1 }}</td>
            <td class="d-none d-lg-table-cell">
              <img src="/img/instalogo.png" class="rounded" width="50px" alt="">
            </td>
            <td class="product">
              <input type="hidden" :id="'product_id_'+index" :value="item.id" name="items">
              <img src="/img/instalogo.png" class="rounded d-block d-lg-none mb-3" width="100px" alt="">
              <div class="mb-3">
                {{ item.title }}
              </div>
              <div class="d-block d-lg-none">
                <button class="btn btn-sm btn-primary text-light" style="width: 27px" @click="increase(index)"> + </button>
                <input type="number" min="0" max="100" :value="item.quantity"
                   :id="'quantity_'+index" class="form-control form-control-sm rounded-0 d-inline-block text-center p-0" style="width: 27px">
                <button class="btn btn-sm btn-primary text-light" style="width: 27px" @click="decrease(index)"> - </button>

              </div>
            </td>
            <td class=" flex-nowrap d-none d-lg-table-cell">
              <button class="btn btn-sm btn-primary text-light" style="width: 27px" @click="increase(index)"> + </button>
              <input type="number" min="0" max="100" :value="item.quantity"
                     :id="'quantity_2_'+index" class="form-control form-control-sm rounded-0 d-inline-block text-center p-0" style="width: 27px">
              <button class="btn btn-sm btn-primary text-light" style="width: 27px" @click="decrease(index)"> - </button>

            </td>
            <td :id="'price_'+index" data-data="item.price">{{ item.price }}</td>
            <td :id="'off_'+index" data-data="item.off">{{ item.off }}%</td>
            <td :id="'amount_'+index" data-data="item.amount">{{ item.amount }}</td>
            <td style="width: 20px">
              <button class="btn btn-sm btn-secondary text-light"><i class="bi bi-x"></i></button>
            </td>
          </tr>
          </tbody>
        </table>
        <table class="table border border-top-0 table-borderless w-100">
          <tbody>
          <tr class="" style="text-align:left !important">
            <th>جمع کل</th>
            <th>تخفیف کل</th>
            <th>مبلغ نهایی</th>
            <th class="d-none d-lg-table-cell px-0"  style="width:200px"></th>
          </tr>
          <tr style="text-align:left !important">
            <td>{{ data.total }}</td>
            <td>{{ data.total_off }}</td>
            <td>{{ data.amount }}</td>
            <td class="d-none d-lg-table-cell px-0" style="width:200px">
              <a href="/shop" class="btn btn-primary text-light ms-1">ادامه خرید</a>
              <button class="btn btn-success text-light">ثبت نهایی</button>
            </td>
          </tr>
          <tr class="d-lg-none" style="text-align:left !important">
            <td colspan="3">
              <div  class="w-100 d-flex justify-content-between">
                <a href="/shop" class="d-block btn btn-primary text-light ms-1">ادامه خرید</a>
                <button class="btn btn-success text-light">ثبت نهایی</button>
              </div>

            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import App from "@/App.vue";

export default {
  name: "Cart",
  setup() {
    const url = App.setup().url;
    const imgUrl = App.setup().imgUrl;
    const data = ref({
      user_id:1,
      items: [{id:1,title: 'فیتو بطری 60 عددی', quantity: 2, price: 2500000, off: 10, amount: 2250000},
        {id:2,title: 'ماسک کلاژن بایودنس بسته 4 عددی', quantity: 1, price: 1300000, off: 0, amount: 1300000},],
      total: 3500000,
      total_off: 250000,
      amount: 3250000,
    });
    const increase = (index) => {
      document.getElementById('quantity_'+index).value = parseInt(document.getElementById('quantity_'+index).value)+1
      document.getElementById('quantity_2_'+index).value = parseInt(document.getElementById('quantity_2_'+index).value)+1
      updateCart();
    }
    const decrease = (index) => {
      if (document.getElementById('quantity_'+index).value > 1) {
        document.getElementById('quantity_'+index).value = parseInt(document.getElementById('quantity_'+index).value)-1
      }
      if (document.getElementById('quantity_2_'+index).value > 1) {
        document.getElementById('quantity_2_'+index).value = parseInt(document.getElementById('quantity_2_'+index).value)-1
      }
      updateCart();
    }

    const updateCart = () => {
      let count = document.getElementsByName('items').length;
      let items = [];
      let total = 0;
      let total_off = 0;
      let total_amount = 0;
      for(let i=0;i>count;i++){
        let q = document.getElementById('quantity_'+i)?.value||document.getElementById('quantity_2_'+i)?.value;
        let amount = document.getElementById('price_'+i).getAttribute('data-data')*(1-document.getElementById('off_'+i).getAttribute('data-data')/100)*q;
        items.push({
          id:document.getElementById('product_id_'+i).value,
          quantity:q,
          price:document.getElementById('price_'+i).getAttribute('data-data'),
          off:document.getElementById('off_'+i).getAttribute('data-data'),
          amount: amount
        });
        total_amount += amount;
        total_off += document.getElementById('price_'+i).getAttribute('data-data')*document.getElementById('off_'+i).getAttribute('data-data')/100;
      }

      let cart = {
        user_id:data.user_id,
        orderItems:items,
        total:total,
        total_off: total_off,
        amount: total_amount,
      }

      axios.post(url + '/api/update/cart',cart)
          .then((response) => {
            data.value = response.data;
          }).catch((error) => {
        console.error(error)
      });

    }
    return {data,increase,decrease,updateCart, url, imgUrl}
  }
}
</script>

<style scoped>

td:not(.product), th:not(.product) {
  text-align: center !important;
}

td, th {
  vertical-align: bottom !important;
}

.btn {
  border-radius: 0 !important;
}
</style>