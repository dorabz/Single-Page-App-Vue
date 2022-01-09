<template>
  <div id="nav">
    <router-link to="/">Scoped style & Event component & Lazy load comp</router-link> |
    <router-link to="/DataBind">Data binding - 1 & 2 + Computed prop</router-link>|
    <router-link to="/MethodComputed">Methods </router-link> |
    <router-link to="/Store">Store </router-link>|
    <router-link to="/CompProps">Component with props</router-link> |
    <router-link to="/Comp">Component stateful & Lifecycle hook</router-link> 
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 3px;
  border-radius: 3px;
}

#nav a.router-link-exact-active {
  color:white;
  background:rgb(175, 109, 122);
}
</style>
