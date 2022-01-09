<template>
  <button type="button" @click='passEvent'> Update text</button>
</template>

<script>
export default {
  name:'Child',
  methods:{
    passEvent()
    {
      this.$emit('changeTitle','Awesome') 
    }
  }
}
</script>
