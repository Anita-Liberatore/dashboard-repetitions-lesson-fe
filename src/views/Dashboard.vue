<template>
    <section>
        <UserDetail />

        <p class="font-normal text-2xl mt-5 ml-10">Dashboard Lezioni</p>
        <p class="font-normal text-2xl mt-5 ml-10">Clicca le singole sezioni per avere più dettagli</p>

        <div class="flex flex-col md:flex-row ml-3 lg:ml-10 mt-8">
            <div @click="tabLessonBooked()"
                class="flex justify-between items-center bg-[#bee3db] w-[94vw] md:w-[220px] lg:w-[200px] xl:w-[250px] px-6 py-8 rounded-2xl">
                <button>
                    <p class="font-normal text-xl">Prenotate</p>
                </button>
                <i class="fa-solid fa-calendar-plus fa-2xl"></i>
            </div>
            <div @click="tabLessonDone()"
                class="flex justify-between items-center bg-[#bee3db] w-[94vw] md:w-[220px] lg:w-[230px] xl:w-[250px] px-6 py-8 rounded-2xl md:ml-7 md:mt-0 mt-4">
                <button>
                    <p class="font-normal text-xl">Effettuate</p>

                </button>
                <i class="fa-solid fa-calendar-check fa-2xl"></i>
            </div>
            <div @click="tabDeleted()"
                class="flex justify-between items-center bg-[#bee3db] w-[94vw] md:w-[220px] lg:w-[200px] xl:w-[250px] px-6 py-8 rounded-2xl md:ml-7 md:mt-0 mt-4">
                <button>
                    <p class="font-normal text-xl">Disdette</p>

                </button>
                <i class="fa-solid fa-calendar-xmark fa-2xl"></i>
            </div>
        </div>


        <div v-if="tab == 1">

            <p class="font-normal text-xl  px-12 py-5 pt-8">Lista Lezioni Prenotate</p>
            <TableDashboard :repetitions="repetitionsBooked" @delete-repetition="deleteRepetition"
                @done-repetition="doneRepetition" />
        </div>

        <div v-if="tab == 2">

            <p class="font-normal text-xl  px-12 py-5 pt-8">Lista Lezioni Effettuate</p>
            <TableDashboard :repetitions="repetitionsDone" />

        </div>

        <div v-if="tab == 3">

            <p class="font-normal text-xl  px-12 py-5 pt-8">Lista Lezioni Disdette</p>
            <TableDashboard :repetitions="repetitionsDeleted" />

        </div>

    </section>
</template>

<script>
import TableDashboard from "../components/TableDashboard.vue";
import UserDetail from "../components/UserDetail.vue";
export default {
    data() {
        return {
            tab: 0,
            repetitions: [],
            repetitionsBooked: [],
            repetitionsDone: [],
            repetitionsDeleted: [],
        };
    },
    computed: {
        count() {
            return this.$store.state.sidebarmobile;
        },


    },
    methods: {
        bukaside() {
            this.$store.state.sidebarmobile = true;
        },

        async fetchRepetitions() {
            var username = sessionStorage.getItem('username');
            const res = await fetch(
                `http://localhost:8080/backend-unito-extraprof/repetitions?user=${username}`
            );
            const data = await res.json();
            return data;
        },


        async tabLessonBooked() {
            this.tab = 1;
            this.repetitions = await this.fetchRepetitions();

            this.repetitionsBooked = this.repetitions.filter(l => l.status == 'P')
        },

        async tabLessonDone() {
            this.tab = 2;
            this.repetitions = await this.fetchRepetitions();

            this.repetitionsDone = this.repetitions.filter(l => l.status == 'E')
        },

        async tabDeleted() {
            this.tab = 3;
            this.repetitions = await this.fetchRepetitions();

            this.repetitionsDeleted = this.repetitions.filter(l => l.status == 'D')
        },

        async deleteRepetition(id) {
            console.log(id)
            const data = {
                status: 'D'
            }

            console.log(data)

            const res = await fetch(
                `http://localhost:8080/backend-unito-extraprof/repetitions?id=${id}`,
                {
                    method: "POST",
                    mode: "no-cors", // 'cors' by default,
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            this.repetitions = await this.fetchRepetitions();
            this.repetitionsBooked = this.repetitions.filter(l => l.status == 'P')
        },

        async doneRepetition(id) {
            const data = {
                status: 'E'
            }

            console.log(data)

            const res = await fetch(
                `http://localhost:8080/backend-unito-extraprof/repetitions?id=${id}`,
                {
                    method: "POST",
                    mode: "no-cors", // 'cors' by default,
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            this.repetitions = await this.fetchRepetitions();
            this.repetitionsBooked = this.repetitions.filter(l => l.status == 'P')

        },


    },
    components: { TableDashboard, UserDetail }
}
</script>