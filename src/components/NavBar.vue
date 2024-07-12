<template>
<div class=" d-flex justify-content-center bg-light w-100" style="position: fixed; top:0; left: 0; z-index: 20000">
<div class="row w-100">
  <nav style="" class="col-lg-10 mx-auto navbar d-none d-lg-block navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand fw-bold" href="#">BEAUTY<span class="text-primary">LAND</span></a>
        <ul class="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page" >خانه</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shop" class="nav-link">فروشگاه</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/help" class="nav-link" >راهنما</router-link>
          </li>
        </ul>
        <div class="d-flex" style="font-size: 15px">
          <i class="bi bi-search mx-3"></i>
          <i class="bi bi-person-fill mx-3"></i>
          <i class="bi bi-cart-fill mx-3"></i>
        </div>
      </div>
    </div>
  </nav>

</div>
</div>

  <button class="btn btn-dark d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
    <i class="bi bi-list"></i>
  </button>

  <div class="offcanvas offcanvas-start d-lg-none" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>