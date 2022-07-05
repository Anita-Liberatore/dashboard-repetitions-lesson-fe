<template>
    <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
            <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="w-full" alt="Sample image" />
                </div>
                <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                    <form>
                        <div class="flex flex-row items-center justify-center lg:justify-start">
                            <p class="text-lg mb-0 mr-4">Per accedere alla dashboard lezioni e prenotare devi effettuare
                                il login!</p>
                        </div>
                        <br>
                        <p class="text-lg mb-4 mr-4">Inserisci username e password!</p>

                        <!-- Email input -->
                        <div class="mb-6">
                            <input type="text" v-model="username"
                                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2" placeholder="Username" />
                        </div>

                        <!-- Password input -->
                        <div class="mb-6">
                            <input type="password" v-model="password"
                                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2" placeholder="Password" />
                        </div>

                        <div class="text-center lg:text-left buttons">
                            <button type="button" @click="login(username, password)"
                                class="inline-block button-login px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                Login
                            </button>

                            <button type="button" @click="returnToHome()"
                                class="inline-block button-return px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                Torna alla panoramica delle lezioni
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {

    data() {
        return {
            posts: [],
            errors: [],
            resultLogin: ""
        }
    },

    methods: {
        async loginApi(username, password) {

            const data = {
                username: username,
                password: password
            }

            const res = await fetch(
                `http://localhost:8080/backend-unito-extraprof/login`,
                {
                    method: "POST",
                    body: JSON.stringify(data),

                });
            const response = await res.json();
            return response;

        },

        async login(username, password) {
            this.resultLogin = await this.loginApi(username, password);

            sessionStorage.name = this.resultLogin.name;
            sessionStorage.surname = this.resultLogin.surname;
            sessionStorage.role = this.resultLogin.role;
            sessionStorage.username = this.resultLogin.username;
            sessionStorage.token = this.resultLogin.token;

            JSON.parse(localStorage.isLogged = true);

            this.$router.push('/dashboard')

        },

        returnToHome() {
            this.$router.push('/')
        }


    },
}
</script>

<style scoped>
button {
    margin: 3%;
}

.button-login,
.button-return {
    background-color: #0a9396;
}
</style>