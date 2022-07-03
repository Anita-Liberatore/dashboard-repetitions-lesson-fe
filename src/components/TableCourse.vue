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

                        </th>
                        <th scope="col" class="px-6 py-3">
                            <button @click="flagIconToShowCardAddCourse"><i v-if="!flagOpenCardToAddCourse"
                                    class="fa-solid fa-plus fa-2xl"></i><i v-if="flagOpenCardToAddCourse"
                                    class="fa-solid fa-circle-minus fa-2xl"></i></button>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700" :key="x.id"
                        v-for="x in courses">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ x.courseName }}
                        </th>
                        <td class="px-6 py-4 text-right">
                            <button type="button" v-if="x.isAssociato == 'N'"
                                class="my-red text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                @click="$emit('delete-course', x.id)">Elimina</button>
                        </td>
                         <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>

        <section v-if="flagOpenCardToAddCourse" class="add-course">
            <form @submit="onSubmit">
                <div class="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Aggiungi
                            corso</label>
                        <input type="text" id="course" v-model="courseName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nome corso" required>
                    </div>
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
            flagOpenCardToAddCourse: false,
            courseName: null
        }
    },
    emits: ["delete-course", "add-course"],

    props: {
        courses: Object,
    },
    methods: {
        flagIconToShowCardAddCourse() {
            this.flagOpenCardToAddCourse = !this.flagOpenCardToAddCourse
        },

        onSubmit(e) {
            e.preventDefault();

            this.$emit("add-course", this.courseName);

            this.courseName = null
        }
    }
}

</script>

<style>
.my-red {
    background-color: #ff595e;
}

.add-course {
    margin-left: 5%;
}

.button-add-course {
    background-color: #0a9396
}
</style>