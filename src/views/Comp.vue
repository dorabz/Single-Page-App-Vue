<template>
  <div>
    <h3>Component - stateful</h3>
    <h3>Number which gets 5</h3>
    <Converter></Converter>
    
  </div>
</template>
<script>
import Converter from "@/components/Converter"

export default {
  name: "Comp",
  components: {
    Converter,
  },
};
</script>