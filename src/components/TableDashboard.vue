<template>
    <div class="flex flex-col md:flex-row ml-3 lg:ml-10 mt-3">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Docente
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Fascia oraria
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Lezione
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Giorno
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Stato
                        </th>
                        <th scope="col" class="px-6 py-3">

                        </th>
                        <th scope="col" class="px-6 py-3">

                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700" :key="x.id"
                        v-for="x in repetitions">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                           {{x.nameProfessor + " " + x.surnameProfessor}}
                        </th>
                        <td class="px-6 py-4">
                            {{ x.hour }}
                        </td>
                        <td class="px-6 py-4">
                            {{ x.courseName }}
                        </td>
                        <td class="px-6 py-4">
                            {{ x.day == 'L' ? 'Lunedì' : x.day == 'M' ? 'Martedì' : x.day == 'ME' ?
                                'Mercoledì' : x.day == 'G' ?
                                    'Giovedì' : x.day == 'V' ? 'Venerdì' : ''
                        }}
                        </td>
                        <td v-if="x.status === 'P'" class="px-6 py-4 text-right">
                            <span 
                                class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">PRENOTATA</span>
                        </td>
                        <td v-if="x.status === 'D'" class="px-6 py-4 text-right">
                            <button> <span 
                                    class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">DISDETTA</span></button>
                        </td>
                        <td v-if="x.status === 'E'" class="px-6 py-4 text-right">
                            <button> <span 
                                    class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-green-900">EFFETTUATA</span></button>
                        </td>
                        <td class="px-6 py-4 text-right">
                            <button type="button" class="my-red text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" @click="$emit('delete-repetition', x.id)" >Disdici</button>
                        </td>
                        <td class="px-6 py-4 text-right">
                            <button type="button" class="my-green text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Effettuata</button>
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
}

</script>

<style>
.my-red {
    background-color: #ff595e;
}

.my-green {
    background-color: #0b8b70;
}

</style>