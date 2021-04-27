<template>
  <div class="home container flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row" v-if="state.activeProfile">
      <div class="col-md-12 text-center">
        <div>
          <img :src="state.activeProfile.picture" class="rounded-circle mb-0 p-4 active-profile-photo" alt="">
          <p class="font-weight-bold">
            {{ state.activeProfile.name }}
          </p>
          <p class="text-muted">
            {{ state.activeProfile.class || 'Spring 2021' }}
          </p>
          <hr>
        </div>

        <div class="ProfilePage card shadow" v-if="state.user.isAuthenticated && state.account.id === route.params.id">
          <p class="font-weight-bold mb-0 text-info">
            New Post
          </p>
          <div class="card-body p-2">
            <form @submit.prevent="createPost">
              <div class="form-group">
                <input type="text"
                       class="form-control mb-1"
                       name="comment"
                       id="comment"
                       placeholder="What's On Your Mind?"
                       v-model="state.newPost.body"
                       required
                >
                <input type="text"
                       class="form-control"
                       name="imgUrl"
                       id="imgUrl"
                       placeholder="Photo URL Here..."
                       v-model="state.newPost.imgUrl"
                >
              </div>
              <button type="submit" class="btn btn-outline-info m-0">
                +
              </button>
            </form>
          </div>
        </div>
        <PostComponent v-for="post in state.posts" :key="post.id" :post="post" />
        <OlderNewer />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { accountService } from '../services/AccountService'
import { profileService } from '../services/ProfileService'
import Notification from '../utils/Notification'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const state = reactive({
      newPost: {},
      activeProfile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.profilePosts),
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
    })
    //  watchEffect- gave a lot of 400 bad requests on home page.
    onMounted(async() => {
      try {
        await accountService.getProfile(route.params.id)
        await profileService.getActiveProfile(route.params.id)
        await profileService.getProfilePosts(route.params.id)
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
