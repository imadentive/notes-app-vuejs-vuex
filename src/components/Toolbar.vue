<template>
    <div id="toolbar">
        <i class="glyphicon glyphicon-plus" @click="add({id:new Date().getTime(),text:'hhhh'})"></i>
        <i class="glyphicon glyphicon-star" :class="{starred:$store.state.currentNoteisFav}"></i>
        <i class="glyphicon glyphicon-remove" @click="dele"></i>
        <!--{{ $store.state.currentNoteisFav }}-->
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import * as types from '@/store/mutation-types'
let add = types.ADD_NOTE;
let dele = types.DELETE_NOTE;
export default {
    data(){
        return{
            a:0
        }
    },
    computed:{
        ...mapGetters([
           
        ])
    },
    methods:{
        ...mapActions(
           { 
               add:'addNote',
               dele:dele
           },
        ),

    }
    
}
</script>
<style>

</style>



