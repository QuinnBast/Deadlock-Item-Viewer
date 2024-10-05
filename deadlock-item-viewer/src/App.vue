<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="nav">
    <RouterLink to="/items" class="navLink">Items</RouterLink>
    <RouterLink to="/heroes" class="navLink">Heroes</RouterLink>
  </div>

  <div class="navBuffer"/>

  <RouterView />

  <p>Powered by <a href="https://deadlock-api.com/">Deadlock API</a>. Support their <a href="https://www.patreon.com/user?u=68961896">Patreon</a></p>
</template>

<style scoped>
.navLink {
  padding: 20px;
  font-size: 36px;
}

.nav {
  position: absolute;
  top: 0px;
  height: 40px;
}

.navBuffer {
  height: 40px;
}

</style>
