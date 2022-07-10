<template>
  <p class="text-3xl font-bold underline">
    Hello world!
  </p>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <TodoList /> -->
  <router-view />
</template>

<script lang="ts">
import TodoList from "./components/TodoList.vue"

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


