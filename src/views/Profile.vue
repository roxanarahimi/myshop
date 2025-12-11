<template>
  <div class="row justify-content-center">
    <div class="col-10 row py-5 justify-content-between">

      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link cursor tab tab1 active" @click="tabToggle('tab1')" aria-current="page">اطلاعات</a>
        </li>
        <li class="nav-item">
          <a class="nav-link cursor tab tab2" @click="tabToggle('tab2')">آدرس ها</a>
        </li>
        <li class="nav-item">
          <a class="nav-link cursor tab tab3" @click="tabToggle('tab3')">سفارش ها</a>
        </li>
      </ul>
      <div class="py-5">
        <div id="tab1" class="tab-info row justify-content-center">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <p class="bi bi-person-square text-center w-100 text-secondary" style="font-size: 50px"></p>
                <form>
                  <div class="row px-3">
                    <div class="col-12 mb-1 p-1"><label>نام</label><input type="text"
                                                                          class="form-control form-control-sm"
                                                                          value="رکسانا رحیمی"></div>
                    <div class="col-12 mb-1 p-1"><label>شماره موبایل</label><input type="text"
                                                                                   class="form-control form-control-sm en"
                                                                                   disabled value="09128222725"></div>
                    <div class="col-12 mb-1 p-1"><label>ایمیل</label><input type="text"
                                                                            class="form-control form-control-sm en"
                                                                            value="ms.roxanarahimi@gmail.com"></div>
                    <div class="col-12 mb-1 p-1 mt-3">
                      <button class="btn btn-sm btn-primary text-light w-100">ویرایش</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="tab2" class="tab-info d-none  row justify-content-center">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <p class="bi bi-pin-map-fill text-center w-100 text-secondary" style="font-size: 50px"></p>

                <div class="accordion" id="accordionAddress">
                  <div class="accordion-item">
                    <h2 class="accordion-header ">
                      <button class="accordion-button px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAddrOne" aria-expanded="true" aria-controls="collapseAddrOne">
                         <span class="mx-3">خانه</span>
                      </button>
                    </h2>
                    <div id="collapseAddrOne" class="accordion-collapse collapse show" data-bs-parent="#accordionAddress">
                      <div class="accordion-body p-4">
                        <form>
                          <div class="row px-3">
                            <div class="col-6 mb-1 p-1"><label>عنوان</label>
                              <input type="text" class="form-control form-control-sm" value="خانه">
                            </div>
                            <div class="col-6 mb-1 p-1"><label>کد پستی</label>
                              <input type="text" class="form-control form-control-sm en" value="1731899411">
                            </div>
                            <div class="col-6 mb-1 p-1"><label>استان</label>
                              <input type="text" class="form-control form-control-sm" value="تهران">
                            </div>
                            <div class="col-6 mb-1 p-1"><label>شهر</label>
                              <input type="text" class="form-control form-control-sm"  value="تهران">
                            </div>
                            <div class="col-12 mb-1 p-1"><label>ادرس</label>
                              <input type="text" class="form-control form-control-sm" value="پلاک 1">
                            </div>
                            <div class="col-12 mb-1 p-1 mt-3">
                              <button class="btn btn-sm btn-primary text-light w-100">ویرایش</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed  p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAddrTwo" aria-expanded="false" aria-controls="collapseAddrTwo">
                         <span class="mx-3">دفتر</span>

                      </button>
                    </h2>
                    <div id="collapseAddrTwo" class="accordion-collapse collapse" data-bs-parent="#accordionAddress">
                      <div class="accordion-body">
                        <form>
                          <div class="row px-3">
                            <div class="col-6 mb-1 p-1"><label>عنوان</label>
                              <input type="text" class="form-control form-control-sm" value="دفتر">
                            </div>
                            <div class="col-6 mb-1 p-1"><label>کد پستی</label>
                              <input type="text" class="form-control form-control-sm en" value="1731899411">
                            </div>
                            <div class="col-6 mb-1 p-1"><label>استان</label>
                              <input type="text" class="form-control form-control-sm" value="تهران">
                            </div>
                            <div class="col-6 mb-1 p-1"><label>شهر</label>
                              <input type="text" class="form-control form-control-sm"  value="تهران">
                            </div>
                            <div class="col-12 mb-1 p-1"><label>ادرس</label>
                              <input type="text" class="form-control form-control-sm" value="پلاک 1">
                            </div>
                            <div class="col-12 mb-1 p-1 mt-3">
                              <button class="btn btn-sm btn-primary text-light w-100">ویرایش</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div id="tab3" class="tab-info d-none row justify-content-center">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <p class="bi bi-gift text-center w-100 text-secondary" style="font-size: 50px"></p>

                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header ">
                      <button class="accordion-button px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       سفارش <span class="mx-3">12584525#</span>
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body p-4">

                        <table class="table border table-borderless ">
                          <thead>
                          <tr>
                            <th scope="col" colspan="2">شماره سفارش</th>
                            <th scope="col" colspan="2">تاریخ</th>
                            <th scope="col" colspan="2">وضعیت</th>
                          </tr>
                          </thead>
                          <tbody >
                          <tr class="border-bottom">
                            <th scope="row" colspan="2">85627</th>
                            <td colspan="2">1404/09/17</td>
                            <td colspan="2">آماده سازی</td>
                          </tr>

                          <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">محصول</th>
                            <th scope="col">تعداد</th>
                            <th scope="col">قیمت</th>
                            <th scope="col">تخفیف</th>
                            <th scope="col">مبلغ</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>فیتو بطری 60 عددی</td>
                            <td>1</td>
                            <td>2500000</td>
                            <td>10%</td>
                            <td>2250000</td>
                          </tr>
                          <tr >
                            <th scope="row">2</th>
                            <td>ماسک کلاژن بایودنس بسته 4 عددی</td>
                            <td>1</td>
                            <td>1300000</td>
                            <td>0</td>
                            <td>1300000</td>
                          </tr>
                          <tr class="border-top" style="text-align:left !important">
                            <th scope="row"> </th>
                            <th>جمع کل</th>
                            <th colspan="2">تخفیف کل</th>
                            <th colspan="2">مبلغ نهایی</th>
                          </tr>
                          <tr style="text-align:left !important">
                            <td scope="row"></td>
                            <td>3500000</td>
                            <td colspan="2">250000</td>
                            <td colspan="2">3250000</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed  p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        سفارش <span class="mx-3">12584525#</span>

                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <table class="table border table-borderless ">
                          <thead>
                          <tr>
                            <th scope="col" colspan="2">شماره سفارش</th>
                            <th scope="col" colspan="2">تاریخ</th>
                            <th scope="col" colspan="2">وضعیت</th>
                          </tr>
                          </thead>
                          <tbody >
                          <tr class="border-bottom">
                            <th scope="row" colspan="2">85627</th>
                            <td colspan="2">1404/09/17</td>
                            <td colspan="2">آماده سازی</td>
                          </tr>

                          <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">محصول</th>
                            <th scope="col">تعداد</th>
                            <th scope="col">قیمت</th>
                            <th scope="col">تخفیف</th>
                            <th scope="col">مبلغ</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>فیتو بطری 60 عددی</td>
                            <td>1</td>
                            <td>2500000</td>
                            <td>10%</td>
                            <td>2250000</td>
                          </tr>
                          <tr >
                            <th scope="row">2</th>
                            <td>ماسک کلاژن بایودنس بسته 4 عددی</td>
                            <td>1</td>
                            <td>1300000</td>
                            <td>0</td>
                            <td>1300000</td>
                          </tr>
                          <tr class="border-top" style="text-align:left !important">
                            <th scope="row"> </th>
                            <th>جمع کل</th>
                            <th colspan="2">تخفیف کل</th>
                            <th colspan="2">مبلغ نهایی</th>
                          </tr>
                          <tr style="text-align:left !important">
                            <td scope="row"></td>
                            <td>3500000</td>
                            <td colspan="2">250000</td>
                            <td colspan="2">3250000</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed  p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        سفارش <span class="mx-3">12584525#</span>
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <table class="table border table-borderless ">
                          <thead>
                          <tr>
                            <th scope="col" colspan="2">شماره سفارش</th>
                            <th scope="col" colspan="2">تاریخ</th>
                            <th scope="col" colspan="2">وضعیت</th>
                          </tr>
                          </thead>
                          <tbody >
                          <tr class="border-bottom">
                            <th scope="row" colspan="2">85627</th>
                            <td colspan="2">1404/09/17</td>
                            <td colspan="2">آماده سازی</td>
                          </tr>

                          <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">محصول</th>
                            <th scope="col">تعداد</th>
                            <th scope="col">قیمت</th>
                            <th scope="col">تخفیف</th>
                            <th scope="col">مبلغ</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>فیتو بطری 60 عددی</td>
                            <td>1</td>
                            <td>2500000</td>
                            <td>10%</td>
                            <td>2250000</td>
                          </tr>
                          <tr >
                            <th scope="row">2</th>
                            <td>ماسک کلاژن بایودنس بسته 4 عددی</td>
                            <td>1</td>
                            <td>1300000</td>
                            <td>0</td>
                            <td>1300000</td>
                          </tr>
                          <tr class="border-top" style="text-align:left !important">
                            <th scope="row"> </th>
                            <th>جمع کل</th>
                            <th colspan="2">تخفیف کل</th>
                            <th colspan="2">مبلغ نهایی</th>
                          </tr>
                          <tr style="text-align:left !important">
                            <td scope="row"></td>
                            <td>3500000</td>
                            <td colspan="2">250000</td>
                            <td colspan="2">3250000</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
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
export default {
  name: "Profile",
  setup() {

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

    return {
      tabToggle
    }
  }
}
</script>

<style scoped>
.table{
  font-size: 12px;
}
.th, .tr, .td{
  border: none;
}
.btn, input{
  border-radius: 0 !important;
}
</style>