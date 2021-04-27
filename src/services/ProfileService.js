import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getActiveProfile(id) {
    const res = await api.get('api/profiles/' + id)
    AppState.activeProfile = res.data
    console.log(res.data)
  }
}

export const profileService = new ProfileService()
