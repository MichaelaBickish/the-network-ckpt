<template>
  <div class="row">
    <div class="col-md-6 my-2">
      <button @click="getNewer(state.newer)" v-if="state.newer" class="text-black-50 btn">
        <i class="fas fa-backward"></i> Previous
      </button>
    </div>
    <div class="col-md-6 my-2">
      <button @click="getOlder(state.older)" v-if="state.older" class="text-black-50 btn">
        Next <i class="fas fa-forward"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import Notification from '../utils/Notification'
export default {
  name: 'OlderNewer',
  setup() {
    const state = reactive({
      newer: computed(() => AppState.newer),
      older: computed(() => AppState.older)
    })
    return {
      state,
      async getNewer(url) {
        try {
          await postsService.getAllPosts(url)
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async getOlder(url) {
        try {
          await postsService.getAllPosts(url)
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-profile-pic{
  width: 10rem
}
</style>
