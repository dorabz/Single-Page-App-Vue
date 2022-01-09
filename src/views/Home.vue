<template>
  <div class="home">
    <h3>Scoped style</h3>
    <h2>I am regular text outside of component with picture</h2>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="I am pink styled scoped text inside of component with picture" />

    <h3>Component that emits event</h3>
    <!--In Home.vue we are calling a method named 'ChangeT($event)' on the event 'changeTitle'
      when the ChangeT function called it takes the parameter which we are passing from child in this case $event='Awesome'. Then we are simply changes the data value with this $event value
      Now we have successfully passed data from child to parent in vue-->
    <h1>{{ title }}</h1>
    <Child @changeTitle="ChangeT($event)" />

    <h3>Lazy component</h3>
    <div class="container-fluid p-2 d-flex justify-content-center">
    <lazy-component></lazy-component>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Child from "@/components/Child"

export default {
  name: "Home",
  components: {
    HelloWorld,
    Child
  },
  data() 
  {
   return{
     title:'I want to be updated'
         }
  },
  methods:{
    ChangeT(title)
    {
      this.title=title;
    },
}
};
</script>
