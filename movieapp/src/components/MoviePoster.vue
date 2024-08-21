<template>
  <div class="relative">
    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Movie Poster" class="rounded-lg" />
    <Rating :rating="movie.vote_average" />
    <button @click="toggleFavorite" class="absolute top-2 right-2">
      <svg v-if="isFavorite" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-6 w-6 text-yellow-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.206 3.71a1 1 0 00.95.69h3.905c.969 0 1.371 1.24.588 1.81l-3.158 2.3a1 1 0 00-.364 1.118l1.206 3.71c.3.921-.755 1.688-1.54 1.118l-3.158-2.3a1 1 0 00-1.175 0l-3.158 2.3c-.784.57-1.839-.197-1.54-1.118l1.206-3.71a1 1 0 00-.364-1.118l-3.158-2.3c-.784-.57-.38-1.81.588-1.81h3.905a1 1 0 00.95-.69l1.206-3.71z"/></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-6 w-6 text-gray-300" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.206 3.71a1 1 0 00.95.69h3.905c.969 0 1.371 1.24.588 1.81l-3.158 2.3a1 1 0 00-.364 1.118l1.206 3.71c.3.921-.755 1.688-1.54 1.118l-3.158-2.3a1 1 0 00-1.175 0l-3.158 2.3c-.784.57-1.839-.197-1.54-1.118l1.206-3.71a1 1 0 00-.364-1.118l-3.158-2.3c-.784-.57-.38-1.81.588-1.81h3.905a1 1 0 00.95-.69l1.206-3.71z"/></svg>
    </button>
  </div>
</template>

<script>
import Rating from './Rating.vue'
import { useFavoritesStore } from '../stores/favorites'
import { computed } from 'vue'

export default {
  name: 'MoviePoster',
  props: {
    movie: Object
  },
  components: {
    Rating
  },
  setup(props) {
    const store = useFavoritesStore()
    const isFavorite = computed(() => store.isFavorite(props.movie))
    const toggleFavorite = () => store.toggleFavorite(props.movie)
    return {
      isFavorite,
      toggleFavorite
    }
  }
}
</script>
