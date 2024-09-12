<template>
  <div class="flex justify-center mt-4">
    <input
      v-model="query"
      @input="onInput"
      type="text"
      placeholder="Search for movies or TV shows"
      class="bg-gray-700 text-white p-4 rounded-lg w-1/2"
    />
    <div v-if="results.length" class="z-50 absolute bg-white text-black mt-12 w-1/2 rounded-lg shadow-lg">
      <ul>
        <li v-for="result in results" :key="result.id" @click="selectResult(result)" class="p-4 hover:bg-gray-200 cursor-pointer">
          {{ result.title || result.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { debounce } from 'lodash'

export default {
  name: 'SearchInput',
  data() {
    return {
      query: '',
      results: []
    }
  },
  methods: {
    async fetchResults() {
      if (this.query.length < 3) {
        this.results = []
        return
      }

      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&query=${this.query}`
      )
      this.results = response.data.results
    },
    onInput: debounce(function () {
      this.fetchResults()
    }, 500),
    selectResult(result) {
      this.$emit('select-result', result)
      this.results = []
      this.query = result.title || result.name
    }
  }
}
</script>
