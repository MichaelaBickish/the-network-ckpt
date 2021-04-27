<template>
  <div class="home container flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row" v-if="state.activeProfile">
      <div class="col-md-12">
        <img :src="state.activeProfile.picture" class="rounded-circle mb-0 p-4 active-profile-photo" alt="">
        <h2>{{ state.activeProfile.name }}</h2>
        <p class="text-muted">
          {{ state.activeProfile.class || 'Spring 2021' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
// import { logger } from '../utils/Logger'
// import { profileService } from '../services/ProfileService'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { accountService } from '../services/AccountService'
import { profileService } from '../services/ProfileService'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const state = reactive({
      // newPost: {},
      activeProfile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.profilePosts),
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
    })
    // If I change the onMounted in this specific instance to watchEffect
    onMounted(async() => {
      try {
        await accountService.getProfile(route.params.id)
        await profileService.getActiveProfile(route.params.id)
        // await profileService.getProfilePosts(route.params.id)
      } catch (error) {
        Notification.toast('Error:' + error, 'error')
      }
    })
    return {
      route,
      state,
      async createPost() {
        try {
          await postsService.createPost(state.newPost)
          Notification.toast('Successfully Created Post', 'success')
          state.newPost = {}
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  },
  components: {}
}

</script>

<style lang="scss" scoped>
.active-profile-photo {
  max-width: 100%;
  height: auto;
}
</style>
