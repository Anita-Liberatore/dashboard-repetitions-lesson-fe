<template>
    <div class="flex flex-col md:flex-row ml-3 lg:ml-10 mt-3">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nome corso
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nome docente
                        </th>
                        <th scope="col" class="px-6 py-3">

                        </th>
                        <th scope="col" class="px-6 py-3">
                            <button @click="flagButton"><i v-if="!flagOpenCardToAddAssociation"
                                    class="fa-solid fa-plus fa-2xl"></i><i v-if="flagOpenCardToAddAssociation"
                                    class="fa-solid fa-circle-minus fa-2xl"></i></button>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700" :key="x.id"
                        v-for="x in associations">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ x.nameCourse }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ x.nameProfessor + " " + x.surnameProfessor }}
                        </th>
                        <td class="px-6 py-4 text-right">
                            <button type="button"
                                class="my-red text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                @click="$emit('delete-association', x.id)">Elimina</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <section v-if="flagOpenCardToAddAssociation" class="add-associations">
            <form @submit="onSubmit">
                <div class="grid gap-6 mb-6 lg:grid-cols-2">
                    
                    <select id="countries_disabled"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Seleziona un corso</option>
                        <option :key="x.id"
                        v-for="x in [1,2,3]" value="US">United States</option>
                    </select>

                   
                    <select id="countries_disabled"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Seleziona un docente</option>
                        <option :key="x.id"
                        v-for="x in [1,2,3]" value="US">United States</option>
                        
                    </select>
                </div>
                <button type="submit"
                    class="button-add-course text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Aggiungi</button>
            </form>
        </section>

    </div>



</template>

<script>
export default {

    data() {
        return {
            flagOpenCardToAddAssociation: false,
            courseName: null
        }
    },
    emits: ["delete-association", "add-association"],

    props: {
        associations: Object,
    },
    methods: {
        flagButton() {
            this.flagOpenCardToAddAssociation = !this.flagOpenCardToAddAssociation
        },

        onSubmit(e) {
            e.preventDefault();

            this.$emit("add-association", this.courseName);
        }
    }
}

</script>

<style>
.my-red {
    background-color: #ff595e;
}

.add-associations {
    margin-left: 5%;
}

.button-add-course {
    background-color: #0a9396
}
</style>