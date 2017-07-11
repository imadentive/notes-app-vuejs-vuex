<template>
  <div id="notes-list">
    <list-header/>
    <list />
  </div>
</template>

<script>
  import ListHeader from '@/components/ListHeader';
  import List from '@/components/List';
  export default {
      data(){
          return{

          }
      },
      components:{ListHeader,List}
  }
</script>

<style>

</style>
