<template>
  <div>
    <h3>Methods</h3>
    <h3>{{title}}</h3>
    <button @click="changeTitle">Click to change text to uppercase</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: "this is a small title",
    }
  },
  methods: {
     changeTitle() {
        this.title = this.title.toUpperCase();
        return this.title;
  }
  }
}
</script>