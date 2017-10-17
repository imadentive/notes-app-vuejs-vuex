<template>
    <div id="toolbar">
        <i class="glyphicon glyphicon-plus" @click="add({id:new Date().getTime(),text:'this is concent', isFav: false})"></i>
        <i class="glyphicon glyphicon-star" :class="{starred:$store.state.currentNote.isFav}" @click="$store.dispatch('start')"></i>
        <i class="glyphicon glyphicon-remove" @click="$store.state.notes.length && dele($store.state.currentNote)"></i>
        <!--{{ $store.state.currentNoteisFav }}-->
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return{
        }
    },
    computed:{
    },
    methods:{
        ...mapActions(
           { 
               add:'addNote',
               dele:'deleNote'
           },
        ),

    }
    
}
</script>
<style>

</style>



