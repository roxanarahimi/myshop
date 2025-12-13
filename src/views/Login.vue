<template>
  <div class="row p-0 m-0 w-100 d-grid" style="min-height: 500px !important">
    <div class="col-10 col-lg-3 p-0 align-self-center mx-auto">
      <div class="card w-100" style="border-color: #eeeeee !important; border-radius: 2px;">
        <div class="card-body p-0">
          <div v-if="!mobileValidated" class="mobile-form">
            <p class="p-3 small">برای ورود به سایت، شماره موبایل خود را وارد کنید.</p>
            <form class="form-floating p-3" dir="ltr" @submit.prevent="validateMobile">
              <input type="number" class="form-control en rounded rounded-1" :class="{'is-invalid': invalidMobile}"
                     id="mobile">
              <label for="mobile" class="form-label text-end">شماره موبایل</label>

            </form>
            <ul class="small invalid-feedback d-block">
              <li v-for="error in errors">{{ error }}</li>
            </ul>
            <button class="submit-btn bg-primary text-light" @click="validateMobile">دریافت کد تایید</button>
          </div>
          <div v-else id="verify-mobile">
            <p class="p-3 small">کد تایید 4 رقمی برای شما پیامک شد. لطفا کد را وارد کنید.</p>
            <div class="col-12 d-flex justify-content-between px-3 ">
              <small disabled id="resend" @click="resend" class="text-black-50">ارسال مجدد کد
                <span id="time">{{ time }}</span>
              </small>
              <small @click="editNumber" class="text-black-50 cursor">ویرایش شماره</small>
            </div>

            <form class="p-3" dir="ltr" @reset="focus1stInput" @submit.prevent="checkCode">
              <div class="d-flex">
                <input type="number" @input="inputHandle('1')" class="code me-2 form-control text-center rounded rounded-1" min="0" max="9" minlength="1" maxlength="1" :class="{'border-danger': invalidCode}" id="code1">
                <input type="number" @input="inputHandle('2')" class="code me-2 form-control text-center rounded rounded-1" min="0" max="9" minlength="1" maxlength="1" :class="{'border-danger': invalidCode}" id="code2">
                <input type="number" @input="inputHandle('3')" class="code me-2 form-control text-center rounded rounded-1" min="0" max="9" minlength="1" maxlength="1" :class="{'border-danger': invalidCode}" id="code3">
                <input type="number" @input="inputHandle('4')" class="code form-control text-center rounded rounded-1"  min="0" max="9" minlength="1" maxlength="1" :class="{'border-danger': invalidCode}" id="code4">
              </div>
              <ul class="small invalid-feedback d-block" dir="rtl">
                <li v-if="invalidCode">کد وارد شده اشتباه است
                  <button class="btn-none" type="reset">پاک کن</button>
                </li>
              </ul>
            </form>

            <button class="submit-btn bg-primary text-light" @click="checkCode">ورود</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";

export default {
  name: "Login",
  setup() {
    const invalidMobile = ref(false);
    const mobileValidated = ref();
    const invalidCode = ref(false);
    const errors = ref([]);
    onMounted(()=>{
      document.querySelector('#mobile').focus();
    })
    const validateMobile = () => {
      errors.value = [];
      let mobile = document.querySelector('#mobile').value;
      document.querySelector('#mobile').classList?.remove('is-invalid');

      if (!mobile.startsWith('09')) {
        errors.value.push('شماره موبایل باید با 09 شروع شود')
      }
      if (mobile.length !== 11) {
        errors.value.push('شماره موبایل باید 11 رقم باشد')
      }
      if (errors.value.length) {
        document.querySelector('#mobile').classList.add('is-invalid');
      } else {
        document.querySelector('#mobile').classList.add('is-valid');
        mobileValidated.value = true;
        localStorage.setItem('mobile',mobile);
        //send otp
        sendOtp(mobile);
      }
    }
    const sendOtp = (mobile) => {
      // api
      // if response code is 200:

      setTimeout(()=>{
        focus1stInput();
      },200)
    }
    const inputHandle = (id)=>{
      document.querySelector('#code'+id).classList.remove('is-invalid');
      let value = document.querySelector('#code'+id).value;
      if (value<0 || value>9){
        document.querySelector('#code'+id).classList.add('is-invalid');
      }else{
        console.log(value);
        if (value != '' && value <=9 && value >= 0 ){
          let n = parseInt(id)+1
          document.querySelector('#code'+n)?.focus();
        }

      }
      let code = document.querySelector('#code1').value +  document.querySelector('#code3').value+document.querySelector('#code3').value+document.querySelector('#code4').value;
      checkCode(code);
    }
    const checkCode = (code)=>{
      if (code.length === 4){
        if(code === '1111'){
          invalidCode.value = false;
          document.querySelectorAll('.code').forEach((element)=>{
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
          });
          //login
          window.location = '/profile';
        }else{
          invalidCode.value = true;
        }
      }else{
        invalidCode.value = false;
      }
    }
    const focus1stInput = ()=>
    {
      console.log(document.querySelector('#code1'))
      document.querySelector('#code1').focus();
      invalidCode.value = false;

    }
    const time = ref(59);

    return {
      invalidMobile, validateMobile, errors, sendOtp, invalidCode,
      inputHandle, checkCode,focus1stInput,mobileValidated,
      time,
    }
  }
}
</script>

<style scoped>

</style>