<template>
  <div class="home container flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row">
      <div class="col-md-9">
        <PostComponent v-for="post in state.posts" :key="post.id" :post="post" />
        <OlderNewer />
      </div>
      <div class="col-md-3">
        <Feature v-for="feature in state.features" :key="feature.tall" :feature="feature" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import Notification from '../utils/Notification'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
import { featuresService } from '../services/FeaturesService'
export default {

  name: 'Home',
  setup() {
    const state = reactive({
      posts: computed(() => AppState.posts),
      features: computed(() => AppState.features)
    })
    onMounted(async() => {
      try {
        await postsService.getAll()
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

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
