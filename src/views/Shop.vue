<template>
  <div class="row">

    <div class="col-lg-10 px-4 mx-auto d-flex justify-content-xl-between p-3 ps-2 pb-5">
      <div class="pt-2 shop-sidebar">
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
      <div class="mt-2 px-3 shop-products" style="">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 h-100 px-1" v-for="(item, index) in data" :key="index">
            <product-card :product="item" :index="index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: "Shop",
  components:{ ProductCard },
  setup() {
    const info = ['تقویت کننده و پرپشت کننده مو', 'بهبود رشد و استحکام ناخن', 'افزایش سرعت رشد مو و ناخن', 'کاملا طبیعی و بدون عوارض'];
    const txt = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\n' +
        '            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\n' +
        '            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
    const data = [
      {
        id: 1,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: '1.600.000',
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 2,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: '1.100.000',
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 3,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: '1.100.000',
        category_id: 1,
        image: '/img/colagen.png',
        new: true,
        off: 22,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 4,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: '1.600.000',
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 12,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 5,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: '1.100.000',
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 6,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: '1.100.000',
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 7,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: '1.600.000',
        category_id: 2,
        image: '/img/phyto.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 8,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: '1.100.000',
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 10,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 9,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: '1.100.000',
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 10,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: '1.600.000',
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 11,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: '1.100.000',
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 8,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 12,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: '1.100.000',
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 13,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: '1.600.000',
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 14,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: '1.100.000',
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 15,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: '1.100.000',
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 16,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: '1.600.000',
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 12,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 17,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: '1.100.000',
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 18,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: '1.100.000',
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 19,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: '1.600.000',
        category_id: 2,
        image: '/img/phyto.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 20,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: '1.100.000',
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 10,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 21,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: '1.100.000',
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 22,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: '1.600.000',
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 23,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: '1.100.000',
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 8,
        expire: '2026/05',
        features: info,
        text: txt
      },
      {
        id: 24,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: '1.100.000',
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt
      }
    ];
    return {
      data, info
    }
  },
}
</script>

<style scoped>

</style>