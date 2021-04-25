<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="row">
      <div class="col-md-3">
        <SideProfile />
      </div>
      <div class="col-md-9">
        <router-view />
      </div>
    </div>
  </main>
  <footer>
    <div class="bg-info text-dark text-center p-4">
      Made by M Bickish
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
