<template>
  <div>
    <div class="row d-grid" style="height: calc(100vh - 100px )">
      <div class="col-md-8 col-lg-5 mx-auto align-self-center">
        <div class="card w-100 border border-dashed">
          <div class="card-body py-5">
            <h3 class="w-100 text-center">{{ result?.title }}</h3>
            <h3 class="w-100 text-center">{{ title }}</h3>
            <b class="w-100 text-center">{{ result?.message }}</b>
            <div v-if="result?.code" class="d-flex justify-content-between"><b>شماره سفارش</b><b>{{ result.code }}</b>
            </div>
            <div v-if="result?.amount" class="d-flex justify-content-between"><b>پرداخت شما</b><b>{{
                result.amount
              }}</b></div>
            <div v-if="result?.referenceId" class="d-flex justify-content-between"><b>کد پیگیری
              تراکنش</b><b>{{ result.referenceId }}</b></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router/dist/vue-router";
import App from "@/App.vue";
import {onMounted, ref} from "vue";

export default {
  setup() {
    const route = useRoute()
    const url = App.setup().url;
    const authority = route.query.Authority
    const status = route.query.Status
    const order_id = route.query.oid
    const result = ref({})
    const title = ref('')

    const verifyPayment = () => {
      axios.post(url + '/api/verify/payment',
          {},
          {
            params: {
              Authority: authority,
              Status: status,
              order_id: order_id
            }

          }).then((response) => {
        if (response.status === 200) {
          result.value = response.data
        } else {
          result.value = response.data
        }
      })
          .then(() => {
            updateUser()
          })
          .then(() => {
            if (route.query.Status == 'NOK') {
              title.value = 'پرداخت انجام نشد'
            }
          }).catch((error) => {
        console.error(error)
        result.value = error.data
      })
      ;

    };
    const updateUser = () => {
      axios.get(url + '/api/user/' + JSON.parse(localStorage.getItem('user')).id)
          .then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data))
          })
          .then(() => {
            let cart = JSON.parse(localStorage.getItem('user')).cart
            document.getElementById('sum').innerText = cart.sum;
            document.getElementById('sum2').innerText = cart.sum;
            if (cart.sum === 0) {
              document.getElementById('sum').style.display = 'none';
              document.getElementById('sum2').style.display = 'none';
            }

          })
          .catch((error) => {
            console.error(error)
            result.value = error.data
          })
      ;

    };

    onMounted(() => {
      verifyPayment();
    })

    return {
      route, verifyPayment, authority, status, order_id, result, title, updateUser
    }
  }
}
</script>

<style scoped>

</style>