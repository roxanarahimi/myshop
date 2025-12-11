<template>
  <div class="row">

    <div class="col-lg-10 px-4 mx-auto d-flex justify-content-xl-between p-3 ps-2 pb-5">
      <div class="pt-2 shop-sidebar">
        <div class="w-100 mb-3 p-3 text-center  bg-white-smoke">
          <input type="text" id="search" @input="search" class="form-control form-control-sm " placeholder="جستجوی محصول">
        </div>
        <div class="w-100 mb-3 p-3 text-center  bg-white-smoke">
          <button class="btn btn-sm w-100 btn-primary text-light">حذف فیلتر ها</button>
        </div>
        <div class="w-100 mb-3 p-3  bg-white-smoke">
          <div class="form-check d-flex justify-content-start">
            <input class="form-check-input" type="checkbox" @change="setFilters" id="exist">
            <label class="form-check-label me-4" for="exist">کالاهای موجود</label>
          </div>

        </div>
        <div class="w-100 mb-3 p-3  bg-white-smoke">
          <div class="form-check d-flex justify-content-start">
            <input class="form-check-input" type="checkbox" @change="setFilters" id="off">
            <label class="form-check-label me-4" for="off">شامل تخفیف</label>
          </div>
        </div>
        <div class="w-100 mb-3 p-3  bg-white-smoke">
          <div v-for="cat in categories" class="form-check d-flex justify-content-start">
            <input class="form-check-input" type="checkbox" @change="setFilters" :id="'cat-'+cat.id">
            <label class="form-check-label me-4" :for="'cat-'+cat.id">{{ cat.title }}</label>
          </div>
        </div>
        <div class="w-100 mb-3 p-3  bg-white-smoke">
          <div class="form-check  d-flex justify-content-start">
            <input class="form-check-input" type="radio" @change="setFilters" name="new" id="new" checked>
            <label class="form-check-label me-4" for="new">جدید ترین</label>
          </div>
          <div class="form-check  d-flex justify-content-start">
            <input class="form-check-input" type="radio" @change="setFilters" name="sale" id="sale">
            <label class="form-check-label me-4" for="sale">پر فروش ترین</label>
          </div>
          <div class="form-check  d-flex justify-content-start">
            <input class="form-check-input" type="radio" @change="setFilters" name="cheap" id="cheap">
            <label class="form-check-label me-4" for="cheap">ارزان ترین</label>
          </div>
          <div class="form-check  d-flex justify-content-start">
            <input class="form-check-input" type="radio" @change="setFilters" name="expensive" id="expensive">
            <label class="form-check-label me-4" for="expensive">گران ترین</label>
          </div>

        </div>
      </div>
      <div class="mt-2 px-3 shop-products" style="">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 h-100 px-1" v-for="(item, index) in products" :key="index">
            <product-card :product="item" :index="index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import {onMounted, ref} from "vue";
export default {
  name: "Shop",
  components:{ ProductCard },
  setup() {
    const categories = [
      {id: 1, title: 'پوست',},
      {id: 2, title: 'مـــو',},
      {id: 3, title: 'آرایشی',},
    ];
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
        price: 1600000,
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 0,
        sale: 50,

      },
      {
        id: 2,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: 1100000,
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 100,
        sale: 50,
      },
      {
        id: 3,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: 1100000,
        category_id: 1,
        image: '/img/colagen.png',
        new: true,
        off: 22,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 0,
        sale: 70,
      },
      {
        id: 4,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: 1600000,
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 12,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 17,
        sale: 50,
      },
      {
        id: 5,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: 1100000,
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 0,
        sale: 50,
      },
      {
        id: 6,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: 1100000,
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 1,
        sale: 50,
      },
      {
        id: 7,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: 1600000,
        category_id: 2,
        image: '/img/phyto.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 200,
        sale: 50,
      },
      {
        id: 8,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: 1100000,
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 10,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 0,
        sale: 50,
      },
      {
        id: 9,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: 1100000,
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 3,
        sale: 50,
      },
      {
        id: 10,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: 1600000,
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 2,
        sale: 50,
      },
      {
        id: 11,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: 1100000,
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 8,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 200,
        sale: 50,
      },
      {
        id: 12,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: 1100000,
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 50,
        sale: 50,
      },
      {
        id: 13,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: 1600000,
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 87,
        sale: 50,
      },
      {
        id: 14,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: 1100000,
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 123,
        sale: 50,
      },
      {
        id: 15,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: 1100000,
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 200,
        sale: 50,
      },
      {
        id: 16,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: 1600000,
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 12,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 1,
        sale: 50,
      },
      {
        id: 17,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: 1100000,
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 69,
        sale: 50,
      },
      {
        id: 18,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: 1100000,
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 47,
        sale: 50,
      },
      {
        id: 19,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: 1600000,
        category_id: 2,
        image: '/img/phyto.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 34,
        sale: 50,
      },
      {
        id: 20,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: 1100000,
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 10,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 9,
        sale: 50,
      },
      {
        id: 21,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: 1100000,
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 77,
        sale: 50,
      },
      {
        id: 22,
        title: 'کپسول فیتو فانر 120 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'ایتالیا',
        price: 1600000,
        category_id: 2,
        image: '/img/phyto.png',
        new: true,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 6,
        sale: 50,
      },
      {
        id: 23,
        title: 'کپسول هیرتامین 30 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'آمریکا',
        price: 1100000,
        category_id: 2,
        image: '/img/Hairtamin.png',
        new: false,
        off: 8,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 48,
        sale: 50,
      },
      {
        id: 24,
        title: 'کپسول کوکونات کلاژن 60 عددی',
        subtitle: 'تقویت کننده مو و ناخن ',
        made_in: 'انگلیس',
        price: 1100000,
        category_id: 1,
        image: '/img/colagen.png',
        new: false,
        off: 0,
        expire: '2026/05',
        features: info,
        text: txt,
        stock: 1,
        sale: 50,
      }
    ];
    const products = ref(data);
    onMounted(()=>{
      document.querySelector('#search')?.focus();
    })
    const search = ()=>{
      let term = document.querySelector('#search').value;
      if (term.length){
        products.value = data.filter((item)=>{ return item.title.includes(term)});
      }else{
        products.value = data;
      }

    }
    const setFilters = ()=>{

    }
    return {
      data, info, search, products,setFilters,categories
    }
  },
}
</script>

<style scoped>

</style>