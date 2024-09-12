// src/stores/favorites.js

import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] // Store both movies and TV shows with media_type
  }),
  actions: {
    toggleFavorite(media) {
      const index = this.favorites.findIndex(fav => fav.id === media.id && fav.media_type === media.media_type)
      if (index === -1) {
        this.favorites.push(media)
      } else {
        this.favorites.splice(index, 1)
      }
    },
    isFavorite(media) {
      return this.favorites.some(fav => fav.id === media.id && fav.media_type === media.media_type)
    }
  }
})
