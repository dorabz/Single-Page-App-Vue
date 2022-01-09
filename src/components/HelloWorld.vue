<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <a>This is a small picture beacuse that's how inside of component likes it.</a>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
  
}
h2 {
  margin: 40px 0 0;
  color: mediumvioletred;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: mediumvioletred;
}
</style>
