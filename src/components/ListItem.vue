<template>
  <a class="list-group-item" @click="chooseIt">
    <h4 class="list-group-item-heading"> {{title}} </h4>
  </a>
</template>
<script>
export default {
  props:{
    title:{
      type:String,
      default:'this is title'
    },
  },
  methods:{
    chooseIt(){
      this.$emit('chooseIt')
    }
  }
}
</script>

