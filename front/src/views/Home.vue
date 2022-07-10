<template>
  <div>
    <TodoList />
  </div>
</template>

<script lang="ts">
import TodoList from "../components/TodoList.vue"
import TodoInput from "../components/TodoInput.vue"
export default {
  name: 'Home',
  components: {
    TodoList,
    TodoInput
  }
}
</script>