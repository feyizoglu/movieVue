import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: []
  }),
  actions: {
    toggleFavorite(movie) {
      const index = this.favorites.findIndex(fav => fav.id === movie.id)
      if (index === -1) {
        this.favorites.push(movie)
      } else {
        this.favorites.splice(index, 1)
      }
    },
    isFavorite(movie) {
      return this.favorites.some(fav => fav.id === movie.id)
    }
  }
})
