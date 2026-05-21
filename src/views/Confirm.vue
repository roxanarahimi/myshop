<template>
  <div class="row justify-content-center">
    <div class="col-sm-9 mb-5 p-4 p-md-3">
      <div class="d-flex py-5 justify-content-between">
        <h3 class="">ثبت سفارش</h3>
        <button class="btn btn-sm btn-success text-light px-3">ثبت نهایی</button>
      </div>

      <div class="row justify-content-between">
        <div class="col-12 col-lg-6 col-xl-6">
          <div class="border p-3 mb-3">
            <form>
              <div class="row px-0 px-md-3">
                <div class="col-12 mb-1 p-1">
                  <label>نام</label>
                  <input type="text" class="form-control form-control-sm" id="name" :value="user.name">
                </div>
                <div class="col-12 mb-1 p-1">
                  <label>شماره موبایل</label>
                  <input type="text" class="form-control form-control-sm en" id="mobile" disabled :value="user.mobile">
                </div>
                <div class="col-12 mb-1 p-1">
                  <label>ایمیل</label>
                  <input type="text" class="form-control form-control-sm en" id="email" :value="user.email">
                </div>
                <div class="col-12 mb-1 p-1 mt-3">
                </div>
              </div>
            </form>

            <h5>نشانی</h5>

            <div class="d-flex justify-content-between flex-wrap">
              <div v-for="(item,index) in user.addresses" :key="item.id" @click="selectAddress"
                   class="form-check d-flex">
                <input class="form-check-input ms-2" :checked="index===0?'checked':false" type="radio"
                       @change="selectAddress(item)" checked name="address_id" :value="item.id" :id="'address-'+item.id">
                <label class="form-check-label" :for="'address-'+item.id">{{ item.title }}</label>
              </div>

              <div @click="selectAddress(null)" class="form-check d-flex">
                <input class="form-check-input ms-2"  type="radio" @change="selectAddress"
                       :checked="user.addresses.length===0?'checked':false" name="address_id" value="new"
                       :id="'address-new'">
                <label class="form-check-label" :for="'address-new'">نشانی جدید</label>
              </div>
            </div>
            <form>
              <div class="row px-0 px-md-3">
                <div class="col-6 mb-1 p-1">
                  <label for="title">عنوان</label>
                  <input id="title" type="text" class="form-control form-control-sm" :value="address?.title">
                </div>
                <div class="col-6 mb-1 p-1">
                  <label for="postal_code">کد پستی</label>
                  <input id="postal_code" type="text" class="form-control form-control-sm en"
                         :value="address?.postal_code">
                </div>
                <div class="col-6 mb-1 p-1 ">
                  <label for="province">استان</label>
                  <select class="form-select form-select-sm" v-model="selectedProvince" id="province"
                          @change="getCities">
                    <!--                     <option value="">انتخاب کنید</option>-->
                    <option v-for="item in provinces" :key="item.id" class=""
                            :selected="address?.city?.province_id === item.id?'selected':false" :value="item">
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div class="col-6 mb-1 p-1 ">
                  <label for="city">شهر</label>
                  <select class="form-select form-select-sm" id="city_id">
                    <!--                     <option value="">انتخاب کنید</option>-->
                    <option v-for="item in cities" :key="item.id" class=""
                            :selected="address?.city_id === item.id?'selected':false" :value="item.id">{{ item.name }}
                    </option>
                  </select>
                </div>
                <div class="col-12 mb-1 p-1">
                  <label for="address">نشانی</label>
                  <input id="address" type="text" class="form-control form-control-sm" :value="address?.address">
                </div>
                <div class="col-12 mb-1 p-1 mt-3">
                  <div class="w-100 d-flex justify-content-end">
                    <button class="btn btn-primary text-light" @click.prevent="updateUser">ویرایش</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xl-6">
          <table class="table border mb-0">
            <tbody>
            <tr class="cart" v-for="(item,index) in cart.items" :key="index">
              <td class="position-relative p-0">
                <input class="d-none" type="hidden" :id="'product_id_'+index" :value="item.id" name="items">
                <a :href="'/product/'+item.product_info.slug" >
<!--                <img :src="imgUrl+item.product_info.images[0]" class="rounded mb-3" width="100px" alt="">-->
                  <lazy-image class="mb-3 mx-auto" style="width: 100px" :data="{image:imgUrl+item.product_info.images[0], title: imgUrl+item.product_info.title}" />

                </a>
                <div class="text-center text-left " style="position: absolute; bottom: 30px; left: 30px">
                  <div class="cart-badge-2">{{ item.quantity }}</div>
                </div>
              </td>
              <td class="text-right align-content-start align-top">
                <div class="h-100">
                  <p class="text-right mb-0 " :id="'price_'+index">{{ item.product_info.title }}</p>
                  <small class="text-right mb-3 " :id="'price_'+index">{{ item.product.size }}</small>
                  <div class="text-right text-black-50" :id="'price_'+index">
                    <small><i class="bi bi-coin ms-2"></i>{{ item.price }}</small>
                  </div>
                  <div v-if="item.off>0" class="text-right text-black-50" :id="'off_'+index" data-data="item.off">
                    <small> <i class="bi bi-gift ms-2"></i>{{ item.off }}%</small>
                  </div>
                  <div class="text-right" :id="'amount_'+index" data-data="item.amount">
                    <i class="bi bi-cash-stack ms-2"></i>{{ item.price * (1 - item.off / 100) * item.quantity }}
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="border border-top-0 px-3">
            <table class="table table-borderless w-100">
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
                  <div class="w-100 d-flex justify-content-end">
                    <a href="/confirm" class="btn btn-success text-light">ثبت نهایی</a>
                  </div>

                </td>
              </tr>
              </tbody>
            </table>
          </div>

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
  name: "Confirm",
  components: {LazyImage},
  setup() {
    const url = App.setup().url;
    const imgUrl = App.setup().imgUrl;
    const provinces = ref([]);
    const cities = ref([]);
    const selectedProvince = ref({});
    const selectedCity = ref({});
    const user = ref();
    const address = ref({});
    const cart = ref();

    onBeforeMount(() => {
      user.value = JSON.parse(localStorage.getItem('user'))
      console.log(user.value)
      if (!user.value) {
        window.location = '/login';
      }
      cart.value = user.value?.cart;
      if (cart.value.items.length === 0) {
        window.location = '/cart';
      }
    });
    const getProvinces = () => {
      axios.get(url + '/api/provinces')
          .then((response) => {
            provinces.value = response.data;
          })
          .catch((error) => {
            console.error(error)
          });
    }
    const getCities = () => {
      axios.get(url + '/api/cities/' + selectedProvince.value?.id)
          .then((response) => {
            cities.value = response.data;
          })
          .catch((error) => {
            console.error(error)
          });
    }
    const selectAddress = (add) => {
      if(add==='new'){
        address.value = {};
      }else{
        address.value = add;
      }
    }
    const updateUser = () => {
      axios.post(url + '/api/update/address', {
        user_id: user.value.id,
        address_id: document.querySelector('input[name="address_id"]:checked').value,
        title: document.getElementById('title').value,
        city_id: selectedCity.value.id,
        postal_code: document.getElementById('postal_code').value,
        address: document.getElementById('address').value,
      })
          .then((response) => {
            address.value = response.data;
            axios.post(url + '/api/update/user', {
              id: user.value.id,
              name: document.querySelector('#name').value,
              email: document.querySelector('#email').value,
            })
                .then((response2) => {
                  localStorage.setItem('user', JSON.stringify(response2.data.user));
                  user.value = response2.data.user;
                  console.log('uuuuuuuuuuuuuuu',response2.data);
                })
                .catch((error) => {
                  console.error(error)
                })
          })
          .catch((error) => {
            console.error(error)
          });
    }

    onMounted(() => {
      getProvinces();
      if (user.value) {
        address.value = user.value.addresses[0];
        selectedProvince.value = address.value?.city.province;
        getCities();
        selectedCity.value = address.value?.city;

      }

    })
    return {
      cart,
      user,
      address,
      url,
      imgUrl,
      cities,
      provinces,
      selectAddress,
      selectedCity,
      selectedProvince,
      getCities,
      getProvinces,
      updateUser
    }
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