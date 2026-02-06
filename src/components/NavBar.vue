<template>
  <div class="d-none d-md-flex justify-content-center bg-light w-100" style="position: fixed; top:0; right: 0; z-index: 1000">
    <div class="row w-100">
      <nav class="col-lg-10 mx-auto navbar navbar-expand bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <router-link to="/" class="navbar-brand fw-bold">RX<span class="text-primary">SHOP</span></router-link>
            <ul class="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link active" aria-current="page">خانه</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/shop" class="nav-link">فروشگاه</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">تماس با ما</router-link>
              </li>
            <li v-if="!user" class="nav-item">
                <router-link to="/login" class="nav-link">ورود/ثبت نام</router-link>
              </li>
            </ul>
            <div class="d-flex" style="font-size: 15px">
              <router-link to="/shop" class="bi bi-search mx-3"></router-link>
              <router-link v-if="user" to="/profile" class="bi bi-person-fill mx-3"></router-link>
<!--              <router-link v-else to="/login" class="mx-3" title="ورود/ثبت نام">-->
<!--                <i class="bi bi-lock-fill"></i>-->
<!--                <i class="bi bi-key-fill d-inline-block" style="transform: rotate(30deg)"></i>-->
<!--&lt;!&ndash;                <span class="fw-lighter">ورود/ثبت نام</span>&ndash;&gt;-->
<!--              </router-link>-->

              <router-link v-if="user" to="/cart" class="nav-link position-relative">
                <i class="bi bi-cart-fill"></i>
                <div class="cart-badge">3</div>
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div class="d-md-none w-100">
    <nav class="navbar navbar-expand bg-body-tertiary w-100" style="position: fixed; right:0; top: 0; z-index: 1000;">
      <div class="container-fluid px-0 w-100">
        <ul class="navbar-nav px-0 w-100 bottom-nav-ul d-flex justify-content-between">
          <li class="nav-item">
            <div @click="$router.go(1)" class="nav-link">
              <i class="bi bi-caret-right"></i>
            </div>
          </li>
          <li class="nav-item" >
            <router-link to="/cart" class="d-block nav-link position-relative">
              <i class="bi bi-cart" :class="{'text-primary': $route.fullPath == '/cart'}"></i>
              <div class="cart-badge">3</div>
            </router-link>
          </li>
          <li class="nav-item">
            <div @click="$router.go(-1)" class="nav-link">
              <i class="bi bi-caret-left"></i>
            </div>
          </li>

        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand bg-body-tertiary w-100" style="position: fixed; right:0; bottom: 0; z-index: 1000;">
      <div class="container-fluid px-0 w-100">
        <ul class="navbar-nav px-0 w-100 bottom-nav-ul d-flex justify-content-between">


          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">
              <i class="bi bi-house" :class="{'text-primary': $route.fullPath == '/'}"></i>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/shop" class="nav-link">
              <i class="bi bi-shop-window " :class="{'text-primary': $route.fullPath == '/shop'}"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">
              <i class="bi bi-telephone" :class="{'text-primary': $route.fullPath == '/contact'}"></i>
            </router-link>
          </li>
          <li v-if="$user" class="nav-item">
            <router-link to="/profile" class="nav-link">
              <i class="bi bi-person" :class="{'text-primary': $route.fullPath == '/profile'}"></i>
            </router-link>
          </li>
        <li v-else class="nav-item">
            <router-link to="/login" class="nav-link">
              <i class="bi bi-key" :class="{'text-primary': $route.fullPath == '/login'}"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "NavBar",
  setup(){
    const user = computed(()=>JSON.parse(localStorage.getItem('user')));


    return{
      user,
    }
  }
}
</script>

<style scoped>

</style>