import * as types from './mutation-types'

export const addNote = ({ commit }, payload) => {
  commit(types.ADD_NOTE, payload)
}
