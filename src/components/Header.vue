<template>
  <header class="header">
    <div class="logo">
      <div class="logo__container">
        <img src="../assets/icon.png" alt="News app logo" class="logo__image" />
      </div>
      <h2>News</h2>
    </div>
    <nav class="nav">
      <h4 class="nav__link">
        <router-link to="/home">Home</router-link>
      </h4>
      <h4 class="nav__link">
        <router-link to="/top-news">Headlines</router-link>
      </h4>
      <h4 class="nav__link">
        <router-link to="/categories">Category</router-link>
      </h4>
    </nav>
  </header>
</template>
<script>
export default {
  name: "app-header",
}
</script>
<style>
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.logo {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
.logo__container {
  width: 50px;
  height: 50px;
  margin-right: 4px;
}
.logo__image {
  max-width: 100%;
  max-height: 100%;
}
.nav {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  justify-content: space-between;
  margin: 0 auto;
}
</style>
