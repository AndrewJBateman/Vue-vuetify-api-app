<template>
  <div id="app">
    <div id="nav">
      <app-header />
      <router-view />
    </div>
  </div>
</template>

<script>
import appHeader from "@/components/Header.vue"
export default {
  name: "layout",
  components: {
    appHeader,
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cairo&family=Pacifico&display=swap");
html,
#app {
  min-height: 100vh;
}
#app {
  font-family: "Cairo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
}
#app h2 {
  font-family: "Pacifico", cursive;
}
a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
a.router-link-exact-active {
  color: #0d5ea0;
  font-weight: bold;
}
</style>
