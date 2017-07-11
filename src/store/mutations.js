import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.CLICK_NOTE] (state, index) {
    //do somethings
    state.currentNoteisFav = state.notes[index].isFav;
  },
  [types.ADD_NOTE] (state) {
    //do somethings
   
   
  },
  [types.DELETE_NOTE] (state) {
    //do somethings 
    return Object.assign({},state,)
   
  },

}



