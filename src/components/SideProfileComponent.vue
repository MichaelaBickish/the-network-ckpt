<template>
  <div class="side-profile">
    <p>yay side profile!</p>
    <!-- <img :src="account.picture" alt="" class="rounded-circle"> -->
    <img src="//placehold.it/100x100" alt="">
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
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
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
      // activeProfile: computed(() => AppState.activeProfile)
    })

    // onMounted(async() => {
    //   await accountService.getProfile()
    // })
    return { state }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
