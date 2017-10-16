<template>
  <a class="list-group-item" @click="">
    <h4 class="list-group-item-heading"> {{title}} </h4>
  </a>
</template>
<script>
  import { mapActions } from 'vuex'
export default {
  props:{
    title:{
      type:String,
      default:'this is title'
    },
  },
  methods:{
    ...mapActions([
      'addNote', // map `this.increment()` to `this.$store.dispatch('increment')`
    ])
  }
}
</script>

