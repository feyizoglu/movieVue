<template>
    <div class="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-lg">
      {{ rating }}
    </div>
  </template>
  
  <script>
  export default {
    name: 'Rating',
    props: {
      rating: Number
    }
  }
  </script>
  