<template>
<h2>Book: {{ name }} by {{ authorBook }} </h2>
</template>

<script>
export default {
  name: 'Book',
  props: ['name', 'authorBook'],
}
</script>
