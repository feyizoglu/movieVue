<template>
    <div class="min-h-screen flex flex-col">
      <nav class="bg-gray-800 text-white p-4">
        <ul class="flex space-x-4">
          <li><router-link to="/movies" class="hover:underline">Movies</router-link></li>
          <li><router-link to="/tvshows" class="hover:underline">TV Shows</router-link></li>
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
  