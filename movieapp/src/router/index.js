import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout.vue'
import TVShows from '@/components/TVShows.vue'
import Movies from '@/components/Movies.vue'
import Favorites from '@/components/Favorites.vue' // Import the Favorites component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'Movies',
          component: Movies
        },
        {
          path: 'TVShows',
          component: TVShows
        },
        {
          path: 'Favorites', // Add the Favorites route
          component: Favorites
        }
      ]
    }
  ]
})

export default router
