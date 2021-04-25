<template>
  <div class="col-12 d-flex justify-content-between">
    <p @click="getNewer" class="text-black-50">
      Newer
    </p>
    <p @click="getOlder" class="text-black-50">
      Older
    </p>
  </div>
</template>

<script>
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
export default {
  name: 'OlderNewer',
  setup() {
    return {
      async getNewer() {
        try {
          if (AppState.newer !== null) {
            await postsService.getNewerPosts()
          }
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async getOlder() {
        try {
          if (AppState.older !== null) {
            await postsService.getOlderPosts()
          }
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
