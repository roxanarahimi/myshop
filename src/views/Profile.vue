<template>
  <div class="row justify-content-center">
    <div class="col-md-10 row py-5 justify-content-between">

      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link cursor tab tab1 active" @click="tabToggle('tab1')" aria-current="page">اطلاعات</a>
        </li>
        <li class="nav-item">
          <a class="nav-link cursor tab tab2" @click="tabToggle('tab2')">نشانی‌ها</a>
        </li>
        <li class="nav-item">
          <a class="nav-link cursor tab tab3" @click="tabToggle('tab3')">سفارش‌ها</a>
        </li>
      </ul>
      <div class="p-3 p-md-4">
        <div id="tab1" class="tab-info row justify-content-center">
          <div class="col-lg-6">
            <div class="card pr ">
              <div class="card-body px-2 px-md-3">
                <p class="bi bi-person-square text-center w-100 text-secondary" style="font-size: 50px"></p>
                <form>
                  <div class="row px-0 px-md-3">
                    <div class="col-12 mb-1 p-1">
                      <label for="name">نام</label>
                      <input id="name" type="text" class="form-control form-control-sm" :value="user.name">
                    </div>
                    <div class="col-12 mb-1 p-1">
                      <label for="mobile">شماره موبایل</label>
                      <input id="mobile" type="text" class="form-control form-control-sm en" disabled :value="user.mobile">
                    </div>
                    <div class="col-12 mb-1 p-1">
                      <label for="email">ایمیل</label>
                      <input id="email" type="text" class="form-control form-control-sm en" :value="user.email">
                    </div>
                    <div class="col-12 mb-1 p-1 mt-3">
                    </div>
                  </div>
                </form>
              </div>
              <button class="btn btn-sm btn-primary text-light w-100" @click.prevent="updateUser">ویرایش</button>
            </div>
            <div class="d-md-none mt-5">
              <button class="btn btn-sm btn-secondary" @click="logout">خروج</button>
            </div>
          </div>
        </div>
        <div id="tab2" class="tab-info d-none  row justify-content-center">
          <div class="col-lg-6">
            <div class="card pr">
              <div class="card-body px-0 px-md-3">
                <p class="bi bi-pin-map-fill text-center w-100 text-secondary" style="font-size: 50px"></p>
                <div v-if="user.addresses.length>0" class="accordion" id="accordionAddress">
                  <div v-for="(item,index) in user.addresses" :key="item.id" class="accordion-item">
                    <h2 class="accordion-header ">
                      <button class="accordion-button px-0 px-md-3 py-2 " :class="{'collapsed': index>0}"  type="button" data-bs-toggle="collapse"
                              :data-bs-target="'#collapseAddr'+index" :aria-expanded="index>0?false:true" :aria-controls="'collapseAddr'+index">
                        <span class="mx-3">{{ item.title }}</span>
                      </button>
                    </h2>
                    <div :id="'collapseAddr'+index" class="accordion-collapse collapse" :class="{'show':index==0}"
                         data-bs-parent="#accordionAddress">
                      <div class="accordion-body px-3 px-md-4">
                        <div class="card pr p-0">
                          <div class="card-body">
                            <form>
                              <div class="row px-0 px-md-3">
                                <div class="col-6 mb-1 p-1">
                                  <label>عنوان</label>
                                  <input type="text" class="form-control form-control-sm" :value="item.title">
                                </div>
                                <div class="col-6 mb-1 p-1"><label>کد پستی</label>
                                  <input type="text" class="form-control form-control-sm en" :value="item.postal_code">
                                </div>
                                <div class="col-6 mb-1 p-1"><label>استان</label>
                                  <input type="text" class="form-control form-control-sm" value="تهران">
                                </div>
                                <div class="col-6 mb-1 p-1"><label>شهر</label>
                                  <input type="text" class="form-control form-control-sm" value="تهران">
                                </div>
                                <div class="col-12 mb-1 p-1"><label>نشانی</label>
                                  <input type="text" class="form-control form-control-sm" :value="item.address">
                                </div>
                                <div class="col-12 mb-1 p-1 mt-3">
                                </div>
                              </div>
                            </form>
                          </div>
                          <!--                          <button class="btn btn-sm btn-primary text-light w-100">ویرایش</button>-->
                          <lazy-btn title="ویرایش" :isLoading="addressLoading"/> <!-- @click="edit" -->
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div v-else>
                  <p>نشانی شما ثبت نشده است.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div id="tab3" class="tab-info d-none row justify-content-center">
          <div class="col-lg-6">
            <div class="card pr">
              <div class="card-body  px-0 px-md-3">
                <p class="bi bi-gift text-center w-100 text-secondary" style="font-size: 50px"></p>


                <div v-if="user.orders?.length>0" class="accordion" id="accordionExample2">
                  <div v-for="(order,index) in user.orders" :key="index" class="accordion-item">
                    <h2 class="accordion-header ">
                      <button class="accordion-button px-3 py-2" :class="{'collapsed':index>0}" type="button" data-bs-toggle="collapse"
                              :data-bs-target="'#collapse'+index" :aria-expanded="index>0?false:true" :aria-controls="'collapse'+index">
                        سفارش <span class="mx-3">{{ order.code }}#</span>
                      </button>
                    </h2>
                    <div :id="'collapse'+index" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
                      <div class="accordion-body p-3 p-md-4">
                        <div class="border border-bottom-0">
                          <table class="table table-borderless mb-0 w-100">
                            <tbody class="">
                            <tr class="">
                              <th scope="col">شماره سفارش</th>
                              <td scope="row">{{ order.code }}</td>
                              <th scope="col">تاریخ ثبت</th>
                              <td>{{  order.payed_at }}</td>
                            </tr>
                            <tr class="">
                            </tr>
                            <tr class="">
                              <th scope="col">وضعیت</th>
                              <td><span class="badge bg-warning">{{ order.status }}</span></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <table class="table border mb-0">
                          <tbody>
                          <tr class="" v-for="(item,indexx) in order.items" :key="indexx">
                            <td class="position-relative" style="width: 120px">
                              <input class="d-none" type="hidden" :value="item.id" name="items">
                              <a :href="'/product/'+item.product_info.slug" >
<!--                              <img :src="imgUrl+item.product_info.images[0]" class="rounded mb-3" width="80px" alt="">-->
                                <lazy-image class="" style="width: 80px" :data="{image:imgUrl+item.product_info.images[0], title: imgUrl+item.product_info.title}" />

                              </a>
                              <div class="text-center text-left " style="position: absolute; bottom: 30px; left: 30px">
                                <div class="cart-badge-2">{{ item.quantity }}</div>
                              </div>
                            </td>
                            <td class="text-right align-content-start align-top" >
                              <div class="h-100">
                                <div class=" text-right" >
                                  {{ item.product_info.title }}
                                </div>
                                <small class=" text-right mb-3" >
                                  {{ item.product.size }}
                                </small>
                                <div class="text-right text-black-50">
                                  <small><i class="bi bi-coin ms-2"></i>{{ item.price }}</small>
                                </div>
                                <div v-if="item.off>0" class="text-right text-black-50" data-data="item.off">
                                  <small> <i class="bi bi-gift ms-2"></i>{{ item.off }}%</small>
                                </div>
                                <div class="text-right" data-data="item.amount">
                                  <i class="bi bi-cash-stack ms-2"></i>{{ item.price*(1-item.off/100)*item.quantity }}
                                </div>
                              </div>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <div class="border border-top-0 ">
                          <table class="table table-borderless w-100">
                            <tbody class="">
                            <tr class="">
                              <th class="text-center">جمع کل</th>
                              <th class="text-center">تخفیف کل</th>
                              <th class="text-center">هزینه ارسال</th>
                              <th class="text-center">مبلغ نهایی</th>
                            </tr>
                            <tr class="">
                              <td class="text-center">{{ order.total_amount }}</td>
                              <td class="text-center">{{ order.total_off }}</td>
                              <td class="text-center">{{ order.delivery_amount }}</td>
                              <td class="text-center">{{ order.amount }}</td>
                            </tr>

                            </tbody>
                          </table>
                        </div>
                        <a :href="'/factor/'+order.code" class="btn btn-sm btn-block bg-primary d-block text-light" >مشاهده فاکتور</a>

                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <p>هیچ سفارشی ثبت نشده است.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import LazyBtn from "@/components/LazyBtn.vue";
import {computed, onBeforeMount, onMounted, ref} from "vue";
import App from "@/App.vue";
import LazyImage from "@/components/LazyImage.vue";

export default {
  name: "Profile",
  components: {LazyImage, LazyBtn},
  setup() {
    const url = App.setup().url;
    const imgUrl = App.setup().imgUrl;
    const user = ref(JSON.parse(localStorage.getItem('user')));
    const tabToggle = (id) => {
      document.querySelectorAll('.active')?.forEach((el) => {
        el?.classList?.remove('active');
      });
      document.querySelectorAll('.tab-info')?.forEach((el) => {
        el?.classList?.add('d-none');
      });
      document.querySelector('.' + id).classList.add('active');
      document.querySelector('#' + id).classList.remove('d-none');
    }
    const updateUser = ()=>{
      axios.post(url+'/api/update/user',{
        id:user.value.id,
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
      }).then((response)=>{
        localStorage.setItem('user',JSON.stringify(response.data.user));
        user.value = response.data.user;
      }).catch((error)=>{console.error(error)})
    }
    onBeforeMount(()=>{
      if(!user.value){
        window.location = '/login'
      }
    })
    const logout = () => {
      localStorage.clear();
      user.vaue = null;
      window.location = '/';

    }
    return {
      tabToggle, user,updateUser,url,imgUrl,logout
    }
  }
}
</script>

<style scoped>
.table {
  font-size: 12px;
}

.th, .tr, .td {
  border: none;
}

.btn, input {
  border-radius: 0 !important;
}

.card {
  overflow: hidden;
  border-radius: 3px !important;
}

.accordion, .accordion-item, .accordion-header, .accordion-button {
  border-radius: 0 !important;
}
</style>