<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="row">
      <div class="col-md-3">
        <SideProfile />
      </div>
      <div class="col-md-6">
        <router-view />
      </div>
      <div class="col-md-3">
        <Feature v-for="feature in state.features" :key="feature.tall" :feature="feature" />
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
import { computed, reactive, onMounted } from 'vue'
import { AppState } from './AppState'
import { featuresService } from './services/FeaturesService'
export default {
  name: 'App',
  setup() {
    const state = reactive({
      features: computed(() => AppState.features)
    })
    onMounted(async() => {
      try {
        await featuresService.getAll()
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
