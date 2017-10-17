import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.CLICK_NOTE] (state, note) {
    //do somethings
    state.currentNote = note
  },
  [types.ADD_NOTE] (state, note) {
    state.notes.push(note)
    state.currentNote = note
  },
  [types.FILTER] (state, str) {
    //do somethings
    state.filter = str;

  },
  [types.START] (state) {
    //do somethings
    state.currentNote.isFav = !state.currentNote.isFav;
  },
  [types.DELETE_NOTE] (state, note) {
    var index = state.notes.indexOf(note);
    // console.log(state.notes)
    state.notes.splice(index,1)
    if (state.notes.length === 0){
      state.currentNote = {}
    } else {
      state.currentNote = state.notes[0]
    }

  }

}



