import { AppState } from '../AppState'
import { api } from './AxiosService'

class FeaturesService {
  async getAll() {
    const res = await api.get('/api/ads')
    AppState.features = res.data
  }
}
export const featuresService = new FeaturesService()
