import { Mutations } from './Challengers/types'

export const actions = {
  nuxtServerInit ({ commit }: any, { app }: any) {
    const cookie = app.$cookiz.get('movueit')
    if (cookie) {
      commit(`Challengers/${Mutations.SAVE_COOKIE_DATA}`, cookie)
    }
  }
}
