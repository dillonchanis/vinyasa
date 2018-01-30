<template>
  <div class="shadow-md bg-green-dark">
    <div class="container mx-auto px-4">
      <div class="sm:flex">
        <div v-for="page in pages" :key="page.name" class="flex mr-6">
          <router-link class="items-center py-6 border-b no-underline mr-6 opacity-50 sm:opacity-100"
                      :class="[
                        currentUrl === page.path
                          ? 'border-white text-white opacity-100'
                          : 'border-transparent hover:border-green-lighter text-green-lightest sm:text-green-light hover:text-green-lighter'
                      ]"
                      :to="page.path">
            {{ page.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar-nav',
  data () {
    return {
      pages: [
        { name: 'Dashboard', path: '/' },
        { name: 'Recipes', path: '/recipes' },
        { name: 'Planner', path: '/planner' },
        { name: 'Settings', path: '/settings' }
      ]
    }
  },
  computed: {
    currentUrl () {
      return this.$route.path
    }
  }
}
</script>
