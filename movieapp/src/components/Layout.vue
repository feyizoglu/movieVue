<template>
  <div class="min-h-screen flex flex-col">
    <nav class="bg-gray-800 text-white p-4">
      <ul class="flex space-x-4">
        <li><router-link to="/Movies" class="hover:underline">Movies</router-link></li>
        <li><router-link to="/TVShows" class="hover:underline">TV Shows</router-link></li>
        <li><router-link to="/Favorites" class="hover:underline">Favorites</router-link></li> <!-- Added Favorites link -->
      </ul>
    </nav>
    <main class="flex-grow">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>
