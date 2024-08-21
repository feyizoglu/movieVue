<template>
    <div class="flex justify-center mt-4">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="mx-2 px-4 py-2 bg-gray-800 text-white rounded-lg">Previous</button>
      <span class="mx-2">{{ currentPage }} / {{ totalPages }}</span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="mx-2 px-4 py-2 bg-gray-800 text-white rounded-lg">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Pagination',
    props: {
      totalPages: Number,
      currentPage: Number
    },
    methods: {
      changePage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.$emit('page-changed', page)
        }
      }
    }
  }
  </script>
  