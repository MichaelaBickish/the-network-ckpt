<template>
  <!-- <router-link :to="{name: ''}"></router-link> -->

  <div class="post-component col-12">
    <div class="card shadow my-3">
      <div class="card-body p-3">
        <div class="row">
          <div class="col-12 d-flex justify-content-end text-danger">
            <i class="fas fa-times" v-if="state.account && state.account.id == post.creatorId" @click="deletePost(post)"></i>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <div>
              <router-link :to="{ name: 'ProfilePage', params: {id: post.creator.id}}">
                <img :src="post.creator.picture" alt="Creator Image" class="rounded-circle post-profile-photo">
              </router-link>
            </div>
          </div>
          <div class="col-9 pl-0">
            <p class="text-left mb-0">
              {{ post.creator.name }}
            </p>
            <p class="font-weight-lighter text-left mb-0">
              {{ post.createdAt }}
            </p>
            <p v-if="post.graduated" class="text-left text-info">
              <i class="fas fa-graduation-cap text-info"></i> Graduated
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="text-left">
              {{ post.body }}
            </p>
            <img :src="post.imgUrl" alt="" class="post-photo mb-1">
            <p class="text-right mb-0 text-info">
              <button type="button" class="btn btn-outline-info" @click="likePost(post)" v-if="state.user.isAuthenticated">
                <i class="far fa-thumbs-up mr-1"></i> {{ post.likes.length }}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { postsService } from '../services/PostsService'
import { computed, reactive } from 'vue'
import Notification from '../utils/Notification'
import { AppState } from '../AppState'
export default {
  name: 'PostComponent',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
    })
    return {
      state,
      async likePost(post) {
        try {
          await postsService.likePost(post.id)
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async deletePost() {
        try {
          await postsService.deletePost(props.post.id)
          // console.log('im trying to delete')
          Notification.toast('Deleted', 'success')
        } catch (error) {
          Notification.toast('Error: ' + error, ' error')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

.post-profile-photo {
  height: 3.5em;
}
.post-photo {
  max-width: 100%;
  height: auto;
}

</style>
