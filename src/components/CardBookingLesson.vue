<template>

    <div class="pb-16">
        <p class="font-normal text-2xl mt-5 ml-10">Prenota le tue lezioni</p>

        <div class="p-8" :key="x.id" v-for="x in lessons">
            <div class="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center">
                <div class="flex">

                    <div class="m-6">
                        <h1 class="text-xl font-medium text-gray-700">Nome docente</h1>
                        <p class="text-gray-600">{{ x.nameProfessor }}</p>
                    </div>


                    <div class="m-6">
                        <h1 class="text-xl font-medium text-gray-700">Orario</h1>
                        <p class="text-gray-600">{{ x.hour }}</p>
                    </div>

                    <div class="m-6">
                        <h1 class="text-xl font-medium text-gray-700">Giorno</h1>
                        <p class="text-gray-600">{{ dayLesson == 'L' ? 'Lunedi' : dayLesson
                                == 'M'
                                ?
                                'Martedi' : dayLesson == 'ME' ? 'Mercoledi' : dayLesson == 'G' ? 'Giovedi' : dayLesson ==
                                    'V' ? 'Venerdi' :
                                    ''
                        }}</p>
                        
                    </div>

                    <div class="m-6">
                        <h1 class="text-xl font-medium text-gray-700">Lezione</h1>
                        <p class="text-gray-600">{{ courseName }}</p>
                    </div>


                </div>
                <button class="bg-blue-500 button hover:opacity-75 text-white rounded-full px-8 py-2"
                    @click="$emit('booking-lesson', x.id, x.hour, dayLesson, username)">
                    Prenota
                </button>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            username: sessionStorage.getItem('username'),
            courseName: localStorage.getItem('courseName')
        };
    },
    props: {
        lessons: Object,
        dayLesson: String

    },

    emits: ["booking-lesson"],

    created() {
    }
}

</script>

<style>
</style>