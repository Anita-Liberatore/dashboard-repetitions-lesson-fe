<template>
    <!-- sidebar -->
    <aside>
        <div
            class="w-[270px] xl:w-[330px] h-screen sticky top-0 bg-[#0a9396] hidden lg:flex flex-col items-center justify-between pt-24 text-white overflow-y-auto">
            <div>
                <p class="font-semibold text-3xl" @click="returnToHome()">Extra Prof.</p>
                <div class="font-normal mt-24">
                    <p class="mt-6">
                        <router-link to="/dashboard">Dashboard</router-link>
                    </p>
                    <p class="mt-6">
                        <router-link to="/posts">Prenota Lezioni</router-link>
                    </p>
                </div>
            </div>


        </div>
        <!-- end sidebar -->
        <!-- sidebar mobile & tablet -->
        <div class="fixed top-0 left-0 w-screen h-screen bg-[#fff] lg:hidden"
            :class="sidebarmobile ? 'block' : 'hidden'" @click="sidebarweb"></div>
        <div class="h-screen fixed top-0 bg-[#0a9396] flex lg:hidden flex-col items-center justify-between pt-24 text-white overflow-y-auto transition-all"
            :class="sidebarmobile ? 'w-[70vw] md:w-[60vw]' : 'w-0'">
            <div>
                <p class="font-semibold text-3xl">Extra Prof.</p>
                <div class="font-normal mt-24">
                    <p class="mt-6">
                        <router-link to="/dashboard">Dashboard</router-link>
                    </p>
                    <p class="mt-6">
                        <router-link to="/posts">Prenota Lezioni</router-link>
                    </p>

                </div>
            </div>

        </div>
    </aside>
    <!-- end sidebar mobile & tablet -->
</template>

<script>
export default {
    data() {
        return {
            loggedIn: ""

        }
    },

    computed: {
        sidebarmobile() {
            return this.$store.state.sidebarmobile
        },


    },
    methods: {
        sidebarweb() {
            this.$store.state.sidebarmobile = false
        },
        returnToHome() {
            this.$router.push('/')
        }
    },
    created() {

        this.loggedIn = JSON.parse(localStorage.getItem("isLogged"))
        console.log(this.loggedIn)

    },
}
</script>

<style>
</style>