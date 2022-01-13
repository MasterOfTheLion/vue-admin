import { login } from '@/api/sys'

export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        this.login({
          username,
          password: md5(password)
        })
      })
    }
  }
}
