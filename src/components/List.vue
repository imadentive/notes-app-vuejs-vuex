<template>
    <div class="container">
      <div class="list-group">
        <list-item v-for="(item,index) in filterNotes" :key='item.id' :note="item" />
      </div>
    </div>
</template>
<script>
import ListItem from '@/components/ListItem';
export default {
    data(){
      return{
      }
    },
    computed:{
      filterNotes () {
        if(this.$store.state.filter === 'fav') {
          return this.$store.state.notes.filter(
            note => note.isFav
          )
        } else {
          return this.$store.state.notes;
        }
      }
    },
  components:{ ListItem },
  methods:{}
}
</script>

