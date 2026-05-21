<template>
  <div class="row justify-content-center">
    <div class="col-sm-9 mb-5 p-4 p-md-3">
      <div class="d-flex py-5 justify-content-between">
        <h3 class="">سبد خرید</h3>
        <button v-if="cart?.items?.length" @click="emptyCart" class="btn btn-sm btn-dark text-light">حذف سبد</button>
      </div>

      <div v-if="cart?.items?.length" class="row justify-content-between">
        <div class="col-12 col-lg-7 col-xl-6">
          <table class="table border mb-0">
            <tbody>
            <tr class="" v-for="(item,index) in cart.items" :key="index">
              <td class="">
                <input type="hidden" :id="'product_id_'+index" :value="item.id" name="items">
                <a :href="'/product/'+item.product_info.slug" >
<!--                  <img :src="imgUrl+item.product_info.images[0]" class="rounded " alt="">-->
                  <lazy-image class="mx-auto" style="width: 150px"  :data="{image:imgUrl+item.product_info.images[0], title: imgUrl+item.product_info.title}" />

                </a>
                <div class="text-center">
                  <button class="btn btn-sm btn-primary text-light" style="width: 30px"
                          @click="increase(index,item.product.id)">+
                  </button>
                  <input type="number" min="0" max="100" :value="item.quantity"
                         :id="'quantity_'+index"
                         class="form-control form-control-sm rounded-0 d-inline-block text-center p-0"
                         style="width: 27px">
                  <button v-if="item.quantity == 1" class="btn btn-sm btn-primary text-light" style="width: 30px"
                          @click="decrease(index,item.id)">
                    <i class="bi bi-trash"></i>
                  </button>
                  <button v-else class="btn btn-sm btn-primary text-light" style="width: 30px"
                          @click="decrease(index,item.id)">
                    -
                  </button>

                </div>
              </td>
              <td class=" text-right">
                <p class=" text-right mt-3 mb-0 fw-bold" :id="'price_'+index" data-data="item.price">
                  {{ item.product_info.title }}</p>
                <small class=" text-right mb-3 fw-bold" :id="'price_'+index"
                       data-data="item.price">{{ item.product.size }}</small>

                <div class="text-right text-black-50" :id="'price_'+index" data-data="item.price">
                  <small><i class="bi bi-coin ms-2"></i>{{ item.price }}</small>
                </div>
                <div v-if="item.off>0" class="text-right text-black-50" :id="'off_'+index" data-data="item.off">
                  <small> <i class="bi bi-gift ms-2"></i>{{ item.off }}%</small>
                </div>
                <div class="text-right mb-5" :id="'amount_'+index" data-data="item.amount">
                  <i class="bi bi-cash-stack ms-2"></i>{{ item.price * (1 - item.off / 100) * item.quantity }}
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12 col-lg-5 col-xl-4">
          <div class="border border-bottom border-top-0 d-none d-md-block"></div>
          <table class="table border border-top-0 table-borderless w-100">
            <tbody class="">
            <tr class="">
              <th class="text-right px-4">جمع کل</th>
              <td class="text-left px-4">{{ cart.total_amount }}</td>
            </tr>
            <tr class="">
              <th class="text-right px-4">تخفیف کل</th>
              <td class="text-left px-4">{{ cart.total_off }}</td>
            </tr>
            <tr class="">
              <th class="text-right px-4">هزینه ارسال</th>
              <td class="text-left px-4">{{ cart.delivery_amount }}</td>
            </tr>
            <tr class="">
              <th class="text-right px-4">مبلغ نهایی</th>
              <td class="text-left px-4">{{ cart.amount }}</td>
            </tr>

            <tr>
              <td class="px-4" colspan="4">
                <div class="w-100 d-flex justify-content-between">
                  <a href="/shop" class="d-block btn btn-primary text-light">ادامه خرید</a>
                  <a href="/confirm" class="btn btn-success text-light">ثبت سفارش</a>
                </div>

              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <div class="text-center ">
          <h3><i class="bi bi-cart-fill text-black-50"></i></h3>
          <h5>سبد شما خالی است</h5>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {onBeforeMount, onMounted, ref} from "vue";
import App from "@/App.vue";
import LazyImage from "@/components/LazyImage.vue";

export default {
  name: "Cart",
  components: {LazyImage},
  setup() {
    const url = App.setup().url;
    const imgUrl = App.setup().imgUrl;
    const user = ref()
    const cart = ref()
    onBeforeMount(() => {
      user.value = JSON.parse(localStorage.getItem('user'))
      if (!user.value) {
        window.location = '/login';
      }
      cart.value = user.value?.cart;
    })
    const increase = (index, product_id) => {
      axios.post(url + '/api/add/to/cart', {
        user_id: user.value.id,
        product_id: product_id
      })
          .then((response) => {
            // document.getElementById('quantity_' + index).value = parseInt(document.getElementById('quantity_' + index).value) + 1
            cart.value = response.data;
            user.value.cart = response.data;
            localStorage.setItem('user', JSON.stringify(user.value))
          })
          .then(()=>{
            document.getElementById('sum').innerText = cart.value.sum;
            document.getElementById('sum2').innerText = cart.value.sum;
            if(cart.value.sum === 0){
              document.getElementById('sum').style.display='none';
              document.getElementById('sum2').style.display='none';
            }
          })
          .catch((error) => console.error(error));
    }
    const decrease = (index, id) => {
      axios.post(url + '/api/remove/from/cart', {id: id})
          .then((response) => {
            // document.getElementById('quantity_' + index).value = parseInt(document.getElementById('quantity_' + index).value) -1
            cart.value = response.data;
            user.value.cart = response.data;
            localStorage.setItem('user', JSON.stringify(user.value))
          })
          .then(()=>{
            document.getElementById('sum').innerText = cart.value.sum;
            document.getElementById('sum2').innerText = cart.value.sum;
            if(cart.value.sum === 0){
              document.getElementById('sum').style.display='none';
              document.getElementById('sum2').style.display='none';
            }
          })
          .catch((error) => console.error(error));
    }

    const emptyCart = () => {
      axios.post(url + '/api/empty/cart', {
        id: cart.value.id,
      }).then((response) => {
        cart.value = response.data;
        user.value.cart = response.data;
        localStorage.setItem('user', JSON.stringify(user.value));
      })
          .then(()=>{
            document.getElementById('sum').innerText = cart.value.sum;
            document.getElementById('sum2').innerText = cart.value.sum;
            if(cart.value.sum === 0){
              document.getElementById('sum').style.display='none';
              document.getElementById('sum2').style.display='none';
            }
          })
          .catch((error) => console.error(error))

    }
    return {cart, increase, decrease, url, imgUrl, emptyCart}
  }
}
</script>

<style scoped>

td:not(.product, .text-right, .text-left), th:not(.product, .text-right, .text-left) {
  text-align: center !important;
}

td, th {
  vertical-align: bottom !important;
}

.btn {
  border-radius: 0 !important;
}

.text-right {
  text-align: right !important;
}

.text-left {
  text-align: left !important;
}
</style>