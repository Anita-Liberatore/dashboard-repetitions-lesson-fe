<template>
    <div class="flex flex-col md:flex-row ml-3 lg:ml-10 mt-3">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nome corso
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700" :key="x.id"
                        v-for="x in courses">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                           {{x.courseName }}
                        </th>
                        
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

     props: {
        courses: Object,
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