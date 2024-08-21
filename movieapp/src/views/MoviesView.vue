<template>
    <div>
      <SearchInput />
      <div class="grid grid-cols-4 gap-4 mt-4">
        <MoviePoster v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
      <Pagination :total-pages="totalPages" :current-page="currentPage" @page-changed="fetchMovies" />
    </div>
  </template>
  
  <script>
  import SearchInput from '../components/SearchInput.vue'
  import MoviePoster from '../components/MoviePoster.vue'
  import Pagination from '../components/Pagination.vue'
  import axios from 'axios'
  
  export default {
    components: {
      SearchInput,
      MoviePoster,
      Pagination
    },
    data() {
      return {
        movies: [],
        currentPage: 1,
        totalPages: 0
      }
    },
    methods: {
      async fetchMovies(page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&page=${page}`)
        this.movies = response.data.results
        this.totalPages = response.data.total_pages
        this.currentPage = page
      }
    },
    mounted() {
      this.fetchMovies()
    }
  }
  </script>
  