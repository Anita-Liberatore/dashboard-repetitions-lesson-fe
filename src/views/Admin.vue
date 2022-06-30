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
            <div @click="tabProfessors()"
                class="flex justify-between items-center bg-[#bee3db] w-[94vw] md:w-[220px] lg:w-[230px] xl:w-[250px] px-6 py-8 rounded-2xl md:ml-7 md:mt-0 mt-4">
                <button>
                    <p class="font-normal text-xl">Docenti</p>

                </button>
                <i class="fa-solid fa-people-group fa-2xl"></i>
            </div>
            <div @click="tabAssociations()"
                class="flex justify-between items-center bg-[#bee3db] w-[94vw] md:w-[220px] lg:w-[200px] xl:w-[250px] px-6 py-8 rounded-2xl md:ml-7 md:mt-0 mt-4">
                <button>
                    <p class="font-normal text-xl">Associa docente-corso</p>

                </button>
                <i class="fa-solid fa-arrows-left-right-to-line fa-2xl"></i>
            </div>

            <div @click="tabRepetitions()"
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

        <div v-if="tab == 2">
            <p class="font-normal text-xl  px-12 py-5 pt-8">Lista Docenti</p>
            <TableProfessor :professors="professors" @delete-professor="deleteProfessor"
                @add-professor="addProfessor" />
        </div>

        <div v-if="tab == 3">
            <p class="font-normal text-xl  px-12 py-5 pt-8">Lista Associazioni corso-docente</p>
            <TableAssociation :associations="associations" @delete-association="deleteAssociation" />
        </div>

        <div v-if="tab == 4">
            <p class="font-normal text-xl  px-12 py-5 pt-8">Lista Ripetizioni</p>
            <TableRepetitionsAdmin :repetitions="repetitions" @delete-repetition="deleteRepetition" />
        </div>
    </section>
</template>

<script>
import UserDetail from "../components/UserDetail.vue";
import TableCourse from "../components/TableCourse.vue";
import TableProfessor from "../components/TableProfessor.vue";
import TableAssociation from "../components/TableAssociation.vue";
import TableRepetitionsAdmin from "../components/TableRepetitionsAdmin.vue";
export default {
    data() {
        return {
            tab: 0,
            courses: [],
            professors: [],
            associations: [],
            repetitions: []
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

        async fetchProfessors() {
            const res = await fetch(
                `http://localhost:8080/backend-unito-extraprof/professors`
            );
            const data = await res.json();
            return data;
        },

        async fetchRepetitions() {
            const res = await fetch(
                "http://localhost:8080/backend-unito-extraprof/repetitions-admin"
            );
            const data = await res.json();
            return data;
        },
        async fetchAssociations() {
            const res = await fetch(
                `http://localhost:8080/backend-unito-extraprof/associazioni`
            );
            const data = await res.json();
            return data;
        },

        async deleteRepetition(id) {
            const data = {
                status: 'D'
            }

            console.log(data)

            const res = await fetch(
                `http://localhost:8080/backend-unito-extraprof/repetitions-delete?id=${id}`,
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

        },

        async deleteProfessor(id) {
            const res = await fetch(
                `http://localhost:8080/backend-unito-extraprof/delete-professor?id=${id}`,
                {
                    mode: "no-cors", // 'cors' by default,
                    headers: {
                        "Content-type": "application/json",
                    },
                }
            );
            this.professors = await this.fetchProfessors();
        },

        async deleteAssociation(id) {
            const res = await fetch(
                `http://localhost:8080/backend-unito-extraprof/delete-associazione?id=${id}`,
                {
                    mode: "no-cors", // 'cors' by default,
                    headers: {
                        "Content-type": "application/json",
                    },
                }
            );
            this.associations = await this.fetchAssociations();
        },

        async addProfessor(obj) {

            const res = await fetch(
                "http://localhost:8080/backend-unito-extraprof/professors",
                {
                    method: "POST",
                    mode: "no-cors", // 'cors' by default,
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(obj),
                }
            );
            this.professors = await this.fetchProfessors();
        },

        async tabCourses() {
            this.tab = 1;
            this.courses = await this.fetchCourses();

        },

        async tabProfessors() {
            this.tab = 2;
            this.professors = await this.fetchProfessors();

        },

        async tabAssociations() {
            this.tab = 3;
            this.associations = await this.fetchAssociations();
        },

        async tabRepetitions() {
            this.tab = 4;
            this.repetitions = await this.fetchRepetitions();
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
    components: { UserDetail, TableCourse, TableProfessor, TableAssociation, TableRepetitionsAdmin }
}
</script>