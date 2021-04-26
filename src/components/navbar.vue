<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <h1>Network</h1>
      </div>
    </router-link>
  </nav>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
</style>
