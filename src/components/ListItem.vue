<template>
  <a class="list-group-item" :class="{active: note.id === $store.state.currentNote.id}" @click="clickNote(note)">
    <h4 class="list-group-item-heading"> {{note.text}} </h4>
  </a>
</template>
<script>
  import { mapActions } from 'vuex'
export default {
  props:{
    note:{
      type:Object,
      default:{}
    },
  },
  methods:{
    ...mapActions([
      'clickNote'
    ])
  }
}
</script>

