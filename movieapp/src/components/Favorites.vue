<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Favorites</h1>
      <div v-if="favorites.length > 0" class="grid grid-cols-4 gap-4">
        <div v-for="favorite in favorites" :key="favorite.id" class="relative">
          <router-link :to="getMediaUrl(favorite)">
            <img :src="`https://image.tmdb.org/t/p/w500/${favorite.poster_path}`" alt="Favorite Poster" class="rounded-lg" />
          </router-link>
          <Rating :rating="favorite.vote_average" />
          <button @click="removeFavorite(favorite)" class="absolute top-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-6 w-6 text-yellow-500" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.206 3.71a1 1 0 00.95.69h3.905c.969 0 1.371 1.24.588 1.81l-3.158 2.3a1 1 0 00-.364 1.118l1.206 3.71c.3.921-.755 1.688-1.54 1.118l-3.158-2.3a1 1 0 00-1.175 0l-3.158 2.3c-.784.57-1.839-.197-1.54-1.118l1.206-3.71a1 1 0 00-.364-1.118l-3.158-2.3c-.784-.57-.38-1.81.588-1.81h3.905a1 1 0 00.95-.69l1.206-3.71z"/>
            </svg>
          </button>
        </div>
      </div>
      <div v-else>
        <p>No favorites yet!</p>
      </div>
    </div>
  </template>
  
  <script>
  import { useFavoritesStore } from '@/stores/favorites'
  import Rating from '@/components/Rating.vue'
  
  export default {
    name: 'Favorites',
    components: {
      Rating
    },
    setup() {
      const store = useFavoritesStore()
  
      const getMediaUrl = (favorite) => {
        return favorite.media_type === 'movie' ? `/movies/${favorite.id}` : `/tvshows/${favorite.id}`
      }
  
      const removeFavorite = (favorite) => {
        store.toggleFavorite(favorite)
      }
  
      return {
        favorites: store.favorites,
        getMediaUrl,
        removeFavorite
      }
    }
  }
  </script>
  