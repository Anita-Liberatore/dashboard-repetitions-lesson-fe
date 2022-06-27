<template>
<div class="font-pupylinux flex">
  <Sidebar/>

  <div class="grow">
        <div class="flex justify-between lg:justify-end pt-7 px-5 md:px-10">
            <img src="/asset/hamburger.png" class="block lg:hidden" alt="" @click="bukaside">
           
        </div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  computed: {
    count(){
      return this.$store.state.sidebarmobile
    },
    
  },
  methods: {
    bukaside(){
      this.$store.state.sidebarmobile = true
    }
  },

  created() {
      sessionStorage.removeItem('name')
      sessionStorage.removeItem('surname')
      sessionStorage.removeItem('role')
      localStorage.removeItem('isLogged')
      localStorage.removeItem('name')
      JSON.parse(localStorage.isLogged = false);
  },
    components: { Sidebar }
}
</script>