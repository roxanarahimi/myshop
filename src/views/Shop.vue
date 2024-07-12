<template>
  <div class="row">

    <div class="col-lg-10 px-4 mx-auto d-flex justify-content-xl-between p-3 ps-2 vh-100">
      <div class="pt-2 " style="width: 170px; font-size: 13px">
        <div class="w-100 mb-3 p-3 text-center" style="background: whitesmoke">
          <input type="text" id="search" class="form-control form-control-sm " placeholder="جستجوی محصول">
        </div>
        <div class="w-100 mb-3 p-3" style="background: whitesmoke">
          <div class="form-check d-flex justify-content-start">
            <input class="form-check-input" type="checkbox" value="" id="exist" checked>
            <label class="form-check-label me-4" for="exist">کالاهای موجود</label>
          </div>

        </div>
        <div class="w-100 mb-3 p-3" style="background: whitesmoke">
          <div class="form-check d-flex justify-content-start">
            <input class="form-check-input" type="checkbox" value="" id="off" checked>
            <label class="form-check-label me-4" for="off">شامل تخفیف</label>
          </div>
        </div>
        <div class="w-100 mb-3 p-3" style="background: whitesmoke">
          <div class="form-check d-flex justify-content-start">
            <input class="form-check-input" type="checkbox" value="" id="skin" checked>
            <label class="form-check-label me-4" for="skin">پوست</label>
          </div>
          <div class="form-check d-flex justify-content-start">
            <input class="form-check-input" type="checkbox" value="" id="hair" checked>
            <label class="form-check-label me-4" for="hair">مــو</label>
          </div>
          <div class="form-check d-flex justify-content-start">
            <input class="form-check-input" type="checkbox" value="" id="slimming" checked>
            <label class="form-check-label me-4" for="slimming">لاغری</label>
          </div>

        </div>
        <div class="w-100 mb-3 p-3" style="background: whitesmoke">
          <div class="form-check  d-flex justify-content-start">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="sale" checked>
            <label class="form-check-label me-4" for="sale">پر فروش ترین ها</label>
          </div>
          <div class="form-check  d-flex justify-content-start">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="view" checked>
            <label class="form-check-label me-4" for="view">پر بازدید ترین ها</label>
          </div>
          <div class="form-check  d-flex justify-content-start">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="cheap" checked>
            <label class="form-check-label me-4" for="cheap">ارزان ترین ها</label>
          </div>
          <div class="form-check  d-flex justify-content-start">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="expensive" checked>
            <label class="form-check-label me-4" for="expensive">گران ترین ها</label>
          </div>

        </div>
    </div>
      <div class="pt-2 px-3" style="height:95% !important; overflow-y: scroll; overflow-x: hidden; width: calc(100% - 180px )">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 h-100 px-1" v-for="(item, index) in data" :key="index">
            <div class="card w-100 " style="border-color: #eeeeee !important; border-radius: 2px; cursor: pointer">
              <div class="card-body p-0">
                <router-link to="/product/1">

                <img :src="item.image" class="img-fluid w-100" alt="">

                <div class="text-center">
                  <small class="fw-bold titles-font-size">{{ item.title }}</small><br>
                  <small class=" titles-font-size">محصول کشور {{ item.made_in }}</small><br>
                  <b class=" titles-font-size text-primary" >{{ item.price }} تومان</b>
                </div>
                </router-link>

                <div style="height: 40px; display: grid">
                  <button class="add-to-cart-2 bg-primary">
                    <i class="bi bi-cart-plus-fill"></i>
                  </button>
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
  name: "Shop",
  setup() {
    const data = [
      { title: 'کپسول فیتو فانر 120 عددی', made_in: 'ایتالیا', price: '1.600.000', category: 'hair', image: '/img/phyto.png', new: true, off: 0 },
      { title: 'کپسول هیرتامین 30 عددی', made_in: 'آمریکا', price: '1.100.000', category: 'hair', image: '/img/Hairtamin.png', new: false, off: 0 },
      { title: 'کپسول کوکونات کلاژن 60 عددی', made_in: 'انگلیس', price: '1.100.000', category: 'skin', image: '/img/colagen.png', new: false, off: 0 },
      { title: 'کپسول فیتو فانر 120 عددی', made_in: 'ایتالیا', price: '1.600.000', category: 'hair', image: '/img/phyto.png', new: true, off: 12 },
      { title: 'کپسول هیرتامین 30 عددی', made_in: 'آمریکا', price: '1.100.000', category: 'hair', image: '/img/Hairtamin.png', new: false, off: 0 },
      { title: 'کپسول کوکونات کلاژن 60 عددی', made_in: 'انگلیس', price: '1.100.000', category: 'skin', image: '/img/colagen.png', new: false, off: 0 },
      { title: 'کپسول فیتو فانر 120 عددی', made_in: 'ایتالیا', price: '1.600.000', category: 'hair', image: '/img/phyto.png', new: false, off: 0 },
      { title: 'کپسول هیرتامین 30 عددی', made_in: 'آمریکا', price: '1.100.000', category: 'hair', image: '/img/Hairtamin.png', new: false, off: 10 },
      { title: 'کپسول کوکونات کلاژن 60 عددی', made_in: 'انگلیس', price: '1.100.000', category: 'skin', image: '/img/colagen.png', new: false, off: 0 },
      { title: 'کپسول فیتو فانر 120 عددی', made_in: 'ایتالیا', price: '1.600.000', category: 'hair', image: '/img/phyto.png', new: true, off: 0 },
      { title: 'کپسول هیرتامین 30 عددی', made_in: 'آمریکا', price: '1.100.000', category: 'hair', image: '/img/Hairtamin.png', new: false, off: 8 },
      { title: 'کپسول کوکونات کلاژن 60 عددی', made_in: 'انگلیس', price: '1.100.000', category: 'skin', image: '/img/colagen.png', new: false, off: 0 },
      { title: 'کپسول فیتو فانر 120 عددی', made_in: 'ایتالیا', price: '1.600.000', category: 'hair', image: '/img/phyto.png', new: true, off: 0 },
      { title: 'کپسول هیرتامین 30 عددی', made_in: 'آمریکا', price: '1.100.000', category: 'hair', image: '/img/Hairtamin.png', new: false, off: 0 },
      { title: 'کپسول کوکونات کلاژن 60 عددی', made_in: 'انگلیس', price: '1.100.000', category: 'skin', image: '/img/colagen.png', new: false, off: 0 },
      { title: 'کپسول فیتو فانر 120 عددی', made_in: 'ایتالیا', price: '1.600.000', category: 'hair', image: '/img/phyto.png', new: true, off: 12 },
      { title: 'کپسول هیرتامین 30 عددی', made_in: 'آمریکا', price: '1.100.000', category: 'hair', image: '/img/Hairtamin.png', new: false, off: 0 },
      { title: 'کپسول کوکونات کلاژن 60 عددی', made_in: 'انگلیس', price: '1.100.000', category: 'skin', image: '/img/colagen.png', new: false, off: 0 },
      { title: 'کپسول فیتو فانر 120 عددی', made_in: 'ایتالیا', price: '1.600.000', category: 'hair', image: '/img/phyto.png', new: false, off: 0 },
      { title: 'کپسول هیرتامین 30 عددی', made_in: 'آمریکا', price: '1.100.000', category: 'hair', image: '/img/Hairtamin.png', new: false, off: 10 },
      { title: 'کپسول کوکونات کلاژن 60 عددی', made_in: 'انگلیس', price: '1.100.000', category: 'skin', image: '/img/colagen.png', new: false, off: 0 },
      { title: 'کپسول فیتو فانر 120 عددی', made_in: 'ایتالیا', price: '1.600.000', category: 'hair', image: '/img/phyto.png', new: true, off: 0 },
      { title: 'کپسول هیرتامین 30 عددی', made_in: 'آمریکا', price: '1.100.000', category: 'hair', image: '/img/Hairtamin.png', new: false, off: 8 },
      { title: 'کپسول کوکونات کلاژن 60 عددی', made_in: 'انگلیس', price: '1.100.000', category: 'skin', image: '/img/colagen.png', new: false, off: 0 }
    ];
    return {
      data
    }
  },
}
</script>

<style scoped>
.titles-font-size {
  font-size: 11px !important;
}
label{
  cursor: pointer;
}

</style>