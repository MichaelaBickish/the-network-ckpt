import { AppState } from '../AppState'
import { api } from './AxiosService'
class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    AppState.posts = res.data.posts
    AppState.newer = res.data.newer
    AppState.older = res.data.older
  }

  async likePost(id) {
    await api.post(`api/posts/${id}/like`)
    this.getAll()
  }

  async getAllPosts(url = 'api/posts') {
    const res = await api.get(url)
    AppState.posts = res.data.posts
    AppState.newer = res.data.newer
    AppState.older = res.data.older
  }
}

export const postsService = new PostsService()
