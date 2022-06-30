<template>
    <div class="flex flex-col md:flex-row ml-3 lg:ml-10 mt-3">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nome docente
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nome corso
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Stato lezione
                        </th>

                        <th scope="col" class="px-6 py-3">
                            Orario
                        </th>

                        <th scope="col" class="px-6 py-3">
                            Giorno
                        </th>

                        <th scope="col" class="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" class="px-6 py-3">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700" :key="x.id"
                        v-for="x in repetitions">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ x.nameProfessor + " " + x.surnameProfessor }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ x.courseName }}
                        </th>

                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            <div class="label-et">
                                <span v-if="x.status === 'P'"
                                    class="bg-yellow-100 text-yellow-800 text-xs font-semibold rounded dark:bg-yellow-200 dark:text-yellow-900">PRENOTATA</span>
                            </div>
                            <div class="label-et">
                                <span v-if="x.status === 'E'"
                                    class="bg-green-100 text-green-800 text-xs font-semibold rounded dark:bg-green-200 dark:text-green-900">EFFETTUATA</span>
                            </div>

                            <div class="label-et">
                                <span v-if="x.status === 'D'"
                                    class="bg-red-100 text-red-800 text-xs font-semibold rounded dark:bg-red-200 dark:text-red-900">DISDETTA</span>
                            </div>
                        </th>

                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ x.hour }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ x.day == 'L' ? 'Lunedì' : x.day == 'M' ? 'Martedì' : x.day == 'ME' ?
                                    'Mercoledì' : x.day == 'G' ?
                                        'Giovedì' : x.day == 'V' ? 'Venerdì' : ''
                            }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ x.user }}
                        </th>
                        <td class="px-6 py-4 text-right">
                            <button type="button" v-if="x.status === 'P'"
                                class="my-red text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                @click="$emit('delete-repetition', x.id)">Elimina</button>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>

    </div>



</template>

<script>
export default {

    data() {
        return {
        }
    },

    emits: ["delete-repetition"],
    props: {
        repetitions: Object,
    },

    methods: {

    }
}

</script>

<style>
.my-red {
    background-color: #ff595e;
}
</style>