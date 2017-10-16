<template>
    <div class="container">
      <div class="list-group">
        <list-item v-for="(item,index) in $store.state.notes" :key='item.id' :title='item.text' />
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
    },
  components:{ ListItem },
  methods:{}
}
</script>

