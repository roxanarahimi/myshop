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
            <router-link to="/" class="navbar-brand fw-bold">BEAUTY<span class="text-primary">LAND</span></router-link>
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
            </ul>
            <div class="d-flex" style="font-size: 15px">
              <router-link to="/shop" class="bi bi-search mx-3"></router-link>
              <router-link to="/profile" class="bi bi-person-fill mx-3"></router-link>
              <router-link to="/cart" class="nav-link position-relative">
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
          <li class="nav-item">
            <router-link to="/cart" class="nav-link position-relative">
              <i class="bi bi-cart"></i>
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
            <router-link to="/profile" class="nav-link">
              <i class="bi bi-person"></i>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/shop" class="nav-link">
              <i class="bi bi-shop-window "></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/help" class="nav-link">
              <i class="bi bi-question-square"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">
              <i class="bi bi-house"></i>
            </router-link>
          </li>

        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>

</style>