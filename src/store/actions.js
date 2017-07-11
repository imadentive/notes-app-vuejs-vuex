import * as types from './mutation-types'

export const switchThread = ({ commit }, payload) => {
  commit(types.ADD_NOTE, payload)
}
