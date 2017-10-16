<template>
  <div id="app">
      <Toolbar />
      <MainContent />
      <NoteEditor />
  </div>
</template>

<script>
import MainContent from '@/components/MainContent';
import Toolbar from '@/components/Toolbar';
import NoteEditor from '@/components/NoteEditor';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{MainContent,Toolbar,NoteEditor}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
