import { AppState } from '../AppState'
// import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getActiveProfile(id) {
    const res = await api.get('api/profiles/' + id)
    AppState.activeProfile = res.data
  }

  async getProfilePosts(id) {
    const res = await api.get(`api/profiles/${id}/posts`)
    AppState.profilePosts = res.data.posts
    console.log(AppState.profilePosts)
  }
}

export const profileService = new ProfileService()
