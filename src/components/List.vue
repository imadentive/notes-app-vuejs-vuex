<template>
    <div class="container">
      <div class="list-group">
        <list-item v-for="(item,index) in notes" :key='item.id' :title='item.text' @chooseIt='handleIt(index)' />
      </div>
    </div>
</template>
<script>
import ListItem from '@/components/ListItem';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex'
import * as types from '@/store/mutation-types'
export default {
    data(){

        return{
            items:['1','2','3']
        }
    },
    computed:{
        ...mapGetters([
           'notes' 
        ])
    },
  components:{ ListItem },
  methods:{
      handleIt(index){
          this.types.CLICK_NOTE(index)
      },
      ...mapMutations([
      types.CLICK_NOTE // 映射 this.increment() 为 this.$store.commit('increment')
    ]),
  }
}
</script>

