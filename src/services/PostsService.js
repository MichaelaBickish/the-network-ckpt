import { AppState } from '../AppState'
import { api } from './AxiosService'
class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    AppState.posts = res.data.posts
  }

  async likePost(id) {
    await api.post(`api/posts/${id}/like`)
    this.getAll()
  }

  // async getNewerPosts() {
  //   const res = await api.get('api/posts/newer')
  //   AppState.posts = res.data.posts
  //   AppState.newer = res.data.newer
  //   AppState.older = res.data.older
  // }

  // async getOlderPosts() {
  //   const res = await api.get('api/posts/older')
  //   AppState.posts = res.data.posts
  //   AppState.newer = res.data.newer
  //   AppState.older = res.data.older
  // }
}

export const postsService = new PostsService()
