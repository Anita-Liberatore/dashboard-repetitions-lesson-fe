<template>
    <section>
        <div class="flex items-center">
            <div class="ml-5 md:block hidden">
                <p class="font-light">{{ nameUser + " " + surname }}</p>
                <p class="font-light text-md text-slate-400">{{ role }}</p>
                <button class="font-light text-md text-slate-400" @click="logoutApi()">Logout</button>
            </div>
            <div v-show="isAdmin">
                <div class="ml-5 md:block hidden">
                    <button class="font-light text-xl text-slate-400" @click="admin()">Sezione Admin</button>
                    <i class="fa-solid fa-layer-group ml-3"></i>

                </div>
            </div>
        </div>


    </section>
</template>


<script>
export default {
    data() {
        return {
            nameUser: sessionStorage.getItem('name'),
            surname: sessionStorage.getItem('surname'),
            role: sessionStorage.getItem('role') == 'C' ? 'Cliente' : 'Admin',
            isAdmin: false
        };
    },
    methods: {
        async logoutApi() {
            const res = await fetch(`http://localhost:8080/backend-unito-extraprof/logout`, { credentials: "same-origin" });
            const data = await res.json();
            this.$router.push("/");
            sessionStorage.removeItem("name");
            sessionStorage.removeItem("surname");
            sessionStorage.removeItem("role");
            localStorage.removeItem("isLogged");
            localStorage.removeItem("name");
            JSON.parse(localStorage.isLogged = false);
            return data;
        },

        admin() {
            this.$router.push('/admin')
        }
    },
    created() {
        
        if(sessionStorage.getItem('role') == 'C') {
            this.isAdmin = false;
        } else {
            this.isAdmin = true;
        }
        
    }
}
</script>

<style>
</style>