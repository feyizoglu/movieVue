<template>
    <div>
      <SearchInput />
      <div class="grid grid-cols-4 gap-4 mt-4">
        <TVShowPoster v-for="show in tvShows" :key="show.id" :show="show" />
      </div>
      <Pagination :total-pages="totalPages" :current-page="currentPage" @page-changed="fetchTVShows" />
    </div>
  </template>
  
  <script>
  import SearchInput from '../components/SearchInput.vue'
  import TVShowPoster from '../components/TVShowPoster.vue'
  import Pagination from '../components/Pagination.vue'
  import axios from 'axios'
  
  export default {
    components: {
      SearchInput,
      TVShowPoster,
      Pagination
    },
    data() {
      return {
        tvShows: [],
        currentPage: 1,
        totalPages: 0
      }
    },
    methods: {
      async fetchTVShows(page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&page=${page}`)
        this.tvShows = response.data.results
        this.totalPages = response.data.total_pages
        this.currentPage = page
      }
    },
    mounted() {
      this.fetchTVShows()
    }
  }
  </script>
  