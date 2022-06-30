<template>

    <section>
        <UserDetail />
    </section>

    <section>
        <p class="font-normal text-2xl mt-5 ml-10">Dashboard Admin</p>
        <p class="font-normal text-2xl mt-5 ml-10">Clicca le singole sezioni per avere più dettagli</p>

        <div class="flex flex-col md:flex-row ml-3 lg:ml-10 mt-8">
            <div @click="tabCourses()"
                class="flex justify-between items-center bg-[#bee3db] w-[94vw] md:w-[220px] lg:w-[200px] xl:w-[250px] px-6 py-8 rounded-2xl">
                <button>
                    <p class="font-normal text-xl">Corsi</p>
                </button>
                <i class="fa-solid fa-book fa-2xl"></i>
            </div>
            <div @click=""
                class="flex justify-between items-center bg-[#bee3db] w-[94vw] md:w-[220px] lg:w-[230px] xl:w-[250px] px-6 py-8 rounded-2xl md:ml-7 md:mt-0 mt-4">
                <button>
                    <p class="font-normal text-xl">Docenti</p>

                </button>
                <i class="fa-solid fa-people-group fa-2xl"></i>
            </div>
            <div @click=""
                class="flex justify-between items-center bg-[#bee3db] w-[94vw] md:w-[220px] lg:w-[200px] xl:w-[250px] px-6 py-8 rounded-2xl md:ml-7 md:mt-0 mt-4">
                <button>
                    <p class="font-normal text-xl">Associa docente-corso</p>

                </button>
                <i class="fa-solid fa-arrows-left-right-to-line fa-2xl"></i>
            </div>

            <div @click=""
                class="flex justify-between items-center bg-[#bee3db] w-[94vw] md:w-[220px] lg:w-[200px] xl:w-[250px] px-6 py-8 rounded-2xl md:ml-7 md:mt-0 mt-4">
                <button>
                    <p class="font-normal text-xl">Lista prenotazioni</p>

                </button>
                <i class="fa-solid fa-calendar-xmark fa-2xl"></i>
            </div>
        </div>
    </section>

    <section>

        <div v-if="tab == 1">
            <p class="font-normal text-xl  px-12 py-5 pt-8">Lista Corsi</p>
            <TableCourse :courses="courses" @delete-course="deleteCourse" @add-course="addCourse" />
        </div>
    </section>
</template>

<script>
import UserDetail from "../components/UserDetail.vue";
import TableCourse from "../components/TableCourse.vue";
export default {
    data() {
        return {
            tab: 0,
            courses: [],
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

        async fetchCourses() {
            const res = await fetch(
                `http://localhost:8080/backend-unito-extraprof/courses`
            );
            const data = await res.json();
            return data;
        },


        async tabCourses() {
            this.tab = 1;
            this.courses = await this.fetchCourses();

        },

        async deleteCourse(id) {
            const res = await fetch(
                `http://localhost:8080/backend-unito-extraprof/delete-course?id=${id}`,
                {
                    mode: "no-cors", // 'cors' by default,
                    headers: {
                        "Content-type": "application/json",
                    },
                }
            );
            this.courses = await this.fetchCourses();
        },

        async addCourse(courseName) {

            const data = {
                courseName: courseName
            }

            const res = await fetch(
                "http://localhost:8080/backend-unito-extraprof/courses",
                {
                    method: "POST",
                    mode: "no-cors", // 'cors' by default,
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );            
            this.courses = await this.fetchCourses();

            alert("Hai inserito un corso!")
        },
    },
    components: { UserDetail, TableCourse }
}
</script>