<template>
  <div class="DataBind">
    <h3>One way data binding</h3>
    <div>
      <input type="text" :value="message">
    </div>
    <h3>Two way data binding</h3>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>  
    <h3>Computed properties</h3>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ alteredMessage }}"</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Type message and see output'
    } 
  } ,
  computed: {
    alteredMessage() { 
      return this.message.split('').reverse().join(''); 
    }
  },
};
</script>