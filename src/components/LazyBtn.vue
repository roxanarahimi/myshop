<template>
  <button class="btn btn-sm btn-primary text-light w-100">
    <loader v-if="isLoading" />
    <span v-else >{{ title}}</span>
  </button>

</template>
<script>
import Loader from "@/components/Loader.vue";
export default {
  components: {Loader},
  props:['title', 'isLoading'],
  setup(){
    return{

    }
  }
}
</script>


<style scoped>

</style>