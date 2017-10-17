import * as types from './mutation-types'

export const addNote = ({ commit }, payload) => {
  commit(types.ADD_NOTE, payload)
}

export const clickNote = ({ commit }, payload) => {
  commit(types.CLICK_NOTE, payload)
}

export const deleNote = ({ commit }, payload) => {
  commit(types.DELETE_NOTE, payload)
}

export const filter = ({ commit }, payload) => {
  commit(types.FILTER, payload)
}

export const start = ({ commit }, payload) => {
  commit(types.START, payload)
}