<template>
  <div class="home container flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row">
      <div class="col-md-12">
        Hello!
      </div>
    </div>
  </div>
</template>

<script>
// import { useRoute, computed, reactive, onMounted } from 'vue-router'
// import { AppState } from '../AppState'
// import { profileService } from '../services/ProfileService'
// import { featuresService } from '../services/FeaturesService'
// import { postsService } from '../services/PostsService'
// import Notification from '../utils/Notification'
export default {
  name: 'ProfilePage',
  setup() {
  //   const route = useRoute()
  //   const state = reactive({
  //     account: computed(() => AppState.activeProfile),
  //     user: computed(() => AppState.user),
  //     activeProfile: computed(() => AppState.activeProfile),
    // features: computed(() => AppState.features)
    // })
    // onMounted(async() => {
    //   try {
    //     await profileService.getProfile(route.params.id)
    // await featuresService.getAll()
    // await postsService.getAll()
    // await postsService.getPostsById(route.params.id)
    // } catch (error) {
    //   Notification.toast('Error: ' + error, 'error')
    // }
    // })
    return { }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
