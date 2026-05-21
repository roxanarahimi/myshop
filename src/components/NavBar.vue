<template>
  <div class="d-none d-md-flex justify-content-center bg-light w-100"
       style="position: fixed; top:0; right: 0; z-index: 1000">
    <div class="row w-100">
      <nav class="col-lg-10 mx-auto navbar navbar-expand bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a href="/" class="navbar-brand fw-bold">RX<span class="text-primary">SHOP</span></a>
            <ul class="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
              <li class="nav-item">
                <a href="/" class="nav-link" :class="{'text-primary': $route.fullPath == '/'}" aria-current="page">خانه</a>
              </li>
              <li class="nav-item">
                <a href="/shop" class="nav-link" :class="{'text-primary': $route.fullPath == '/shop'}">فروشگاه</a>
              </li>
              <li class="nav-item">
                <a href="/contact" class="nav-link" :class="{'text-primary': $route.fullPath == '/contact'}">تماس با ما</a>
              </li>
              <li v-if="!user" class="nav-item">
                <a href="/login" class="nav-link" :class="{'text-primary': $route.fullPath == '/login'}">ورود/ثبت نام</a>
              </li>
              <li v-if="user" class="nav-item cursor">
                <a href="/profile" class="nav-link cursor" :class="{'text-primary': $route.fullPath == '/profile'}">حساب کاربری</a>
              </li>
              <li v-if="user" class="nav-item cursor">
                <span @click="logout" class="nav-link cursor">خروج</span>
              </li>

            </ul>
            <div class="d-flex" style="font-size: 15px">
              <a href="/shop" class="bi bi-search mx-3"></a>
              <!--              <a v-if="user" href="/profile" class="bi bi-person-fill mx-3"></a>-->
              <!--              <a v-else href="/login" class="mx-3" title="ورود/ثبت نام">-->
              <!--                <i class="bi bi-lock-fill"></i>-->
              <!--                <i class="bi bi-key-fill d-inline-block" style="transform: rotate(30deg)"></i>-->
              <!--&lt;!&ndash;                <span class="fw-lighter">ورود/ثبت نام</span>&ndash;&gt;-->
              <!--              </a>-->

              <a v-if="user" href="/cart" class="nav-link position-relative">
                <i class="bi bi-cart-fill m-1" :class="{'text-primary': $route.fullPath == '/cart'}"></i>
                <div id="sum" v-show="sum>0" class="cart-badge">{{ sum }}</div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div class="d-md-none w-100">
    <nav class="navbar navbar-expand bg-body-tertiary w-100" style="position: fixed; right:0; top: 0; z-index: 1000;">
      <div class="container-fluid px-0 w-100">
        <ul class="mobile-nav navbar-nav px-0 w-100 bottom-nav-ul d-flex justify-content-between">
          <li class="nav-item">
            <div @click="$router.go(1)" class="nav-link">
              <i class="bi bi-caret-right"></i>
            </div>
          </li>


          <li class="nav-item text-center">
            <a href="/" class="navbar-brand nav-link fw-bold  m-0 mt-1"> RX<span
                class="text-primary">SHOP</span></a>
          </li>
          <li class="nav-item">
            <div @click="$router.go(-1)" class="nav-link">
              <i class="bi bi-caret-left"></i>
            </div>
          </li>

        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand bg-body-tertiary w-100"
         style="position: fixed; right:0; bottom: 0; z-index: 1000;">
      <div class="container-fluid px-0 w-100 ">
        <ul class="mobile-nav navbar-nav px-0  w-100 bottom-nav-ul d-flex justify-content-between">

          <li class="nav-item">
            <a href="/profile" class="nav-link" :class="{'text-primary': $route.fullPath == '/profile'}">
              <i class="bi bi-person"></i>
              <small class="d-block">پروفایل</small>
            </a>
          </li>

          <!--          <li v-else class="nav-item">-->
          <!--            <a href="/login" class="nav-link">-->
          <!--              <i class="bi bi-key" :class="{'text-primary': $route.fullPath == '/login'}"></i>-->
          <!--            </a>-->
          <!--          </li>-->
          <li class="nav-item">
            <a href="/shop" class="nav-link" :class="{'text-primary': $route.fullPath == '/shop'}">
              <i class="bi bi-shop-window "></i>
              <small class="d-block">فروشگاه</small>
            </a>
          </li>
          <li class="nav-item">
            <a href="/contact" class="nav-link" :class="{'text-primary': $route.fullPath == '/contact'}">
              <i class="bi bi-telephone"></i>
              <small class="d-block">تماس باما</small>
            </a>
          </li>

          <li class="nav-item">
            <a href="/cart" class="d-block nav-link position-relative" :class="{'text-primary': $route.fullPath == '/cart'}">
              <i class="bi bi-cart" ></i>
              <div id="sum2" v-show="sum>0" class="cart-badge">{{ sum }}</div>
              <small class="d-block">سبد</small>

            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: "NavBar",
  setup() {
    const user = ref(JSON.parse(localStorage.getItem('user')));
    const sum = ref(user.value?.cart?.sum);
    const logout = () => {
      localStorage.clear();
      user.vaue = null;
      window.location = '/';

    }
    return {
      user, logout, sum
    }
  }
}
</script>

<style>
.nav-link {
  text-align: center !important;
}

.cart-badge-2 {
  right: 5px !important;
}
</style>