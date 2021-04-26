<template>
  <div class="side-profile p-3">
    <div class="mt-5">
      <router-link :to="{ name: 'ProfilePage', params: {id: state.account.id}}">
        <img v-if="state.user.isAuthenticated"
             :src="user.picture"
             alt="user photo"

             class="rounded-circle user-photo"
        />
      </router-link>
      <p class="font-weight-bold mb-0">
        {{ user.name }}
      </p>
      <p class="font-weight-light">
        {{ user.class }}
      </p>
      <div class="mt-2">
        <button
          class="btn btn-outline-info text-uppercase"
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Login
        </button>

        <div v-else>
          <button class="btn btn-outline-info text-uppercase"
                  @click="logout"
          >
            logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
// import { accountService } from '../services/AccountService'
// import { useRoute } from 'vue-router'
export default {
  name: 'SideProfile',
  props: {
    sideprofile: {
      type: Object,
      required: true
    }
  },
  setup() {
    // const route = useRoute()
    const state = reactive({
      dropOpen: false,
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
      // activeProfile: computed(() => AppState.activeProfile)
    })

    // onMounted(async() => {
    //   await accountService.getProfile()
    // })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.user-photo {
  max-width: 100%;
  height: auto;
}
</style>
