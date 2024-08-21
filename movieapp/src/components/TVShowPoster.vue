<template>
    <div class="relative">
      <img :src="`https://image.tmdb.org/t/p/w500/${show.poster_path}`" alt="TV Show Poster" class="rounded-lg" />
      <Rating :rating="show.vote_average" />
    </div>
  </template>
  
  <script>
  import Rating from './Rating.vue'
  
  export default {
    name: 'TVShowPoster',
    props: {
      show: Object
    },
    components: {
      Rating
    }
  }
  </script>
  