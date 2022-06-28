<template>
    <UserDetail />
    <p class="font-normal text-2xl mt-5 ml-10">Scegli un corso</p>

    <div class="p-8">
        <div class="grid grid-cols-6 gap-5">
            <button :key="x.id" v-for="x in courses" @click="selectCourse(x.id)"
                class="text-black p-4 rounded bg-white-500 shadow-md"
                :class="[isActiveCourse == x.id ? 'text-white p-4 rounded bg-[#bee3db] shadow-md' : '']">{{ x.courseName
                }} </button>

        </div>
    </div>

    <p class="font-normal text-2xl mt-5 ml-10">Scegli un giorno e prenota le tue lezioni</p>
    <div class="p-8">

        <ul class="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1">
            <li>
                <button @click="monday()" class=" tab flex justify-center py-4"
                    :class="[tab == 1 ? 'bg-white rounded-full shadow text-indigo-900' : '']">Lunedì</button>
            </li>
            <li>
                <button @click="tuesday()" class=" tab flex justify-center py-4"
                    :class="[tab == 2 ? 'bg-white rounded-full shadow text-indigo-900' : '']">Martedì</button>
            </li>
            <li>
                <button @click="wednesday()" class=" tab flex justify-center py-4"
                    :class="[tab == 3 ? 'bg-white rounded-full shadow text-indigo-900' : '']">Mercoledì</button>
            </li>
            <li>
                <button @click="tabThursday()" class=" tab flex justify-center py-4"
                    :class="[tab == 4 ? 'bg-white rounded-full shadow text-indigo-900' : '']">Giovedì</button>
            </li>
            <li>
                <button @click="friday()" class=" tab flex justify-center py-4"
                    :class="[tab == 5 ? 'bg-white rounded-full shadow text-indigo-900' : '']">Venerdì</button>
            </li>
        </ul>
    </div>
    <section v-if="tab == 1">
        <CardBookingLesson dayLesson='L' :lessons="mondayLessons" @booking-lesson="bookingLesson"/>
    </section>

    <section v-if="tab == 2">
        <CardBookingLesson />
    </section>

    <section v-if="tab == 3">
        <CardBookingLesson />
    </section>

    <section v-if="tab == 4">
        <CardBookingLesson />
    </section>

    <section v-if="tab == 5">
        <CardBookingLesson />
    </section>
</template>

<script>
import UserDetail from '../components/UserDetail.vue';
import CardBookingLesson from '../components/CardBookingLesson.vue';
export default {
    data() {
        return {
            tab: 0,
            courses: [],
            isActiveCourse: 0,
            mondayLessons: []
        };
    },
    methods: {
        async monday() {
            this.tab = 1;
            this.mondayLessons = await this.fetchCoursesForBooking(this.isActiveCourse, "L");
            
        },

        bookingLesson(id, hour, dayLesson, username) {
            console.log(id)
            console.log(hour)
            console.log(dayLesson)
            console.log(username)
            console.log(this.isActiveCourse)

        },

        tuesday() {
            this.tab = 2;
        },

        wednesday() {
            this.tab = 3;
        },

        tabThursday() {
            this.tab = 4;
        },

        friday() {
            this.tab = 5;
        },

        selectCourse(id) {
            this.isActiveCourse = id;
            this.tab = 0;
        },

        async fetchCourses() {
            const res = await fetch(
                "http://localhost:8080/backend-unito-extraprof/courses"
            );
            const data = await res.json();
            return data;
        },


        async fetchCoursesForBooking(courseId, day) {
            const res = await fetch(
                `http://localhost:8080/backend-unito-extraprof/professors-course-mobile?id=${courseId}&day=${day}`
            );

            const data = await res.json();
            return data;
        },
    },

    async created() {
        this.courses = await this.fetchCourses();
    },
    components: { UserDetail, CardBookingLesson }
}
</script>

<style>
.button {
    background-color: #0a9396;
}

.tab {
    padding: 10%;
}
</style>