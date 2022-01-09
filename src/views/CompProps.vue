<template>
  <div>
    <h3>Component with props - stateless</h3>
    <h2>Favourite books</h2>
    <Book name="Anna Karenina" authorBook="Leo Tolstoy"/>
    <Book name="Pride and prejudice" authorBook="Jane Austen"/>
  </div>
</template>
<script>
import Book from "@/components/Book"

export default {
  name: "CompProps",
  components: {
    Book,
  },
};
</script>
