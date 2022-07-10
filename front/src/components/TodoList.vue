<template>
  <div>
    <ul class="todolist">
      <li v-for="(todo, index) in state.todoList" :key="(todo.todo as string)">
        {{todo.todo}}
        <router-link :to="{name: 'detail', params: {id: todo.id}}">詳細</router-link>
        <CompleteButton :index="index"/>
      </li>
    </ul>
    <TodoInput/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import TodoInput from "./TodoInput.vue";
import CompleteButton from "./CompleteButton.vue";
import { useStore } from "vuex"

export default defineComponent({
  name: "TodoList",
  components: { TodoInput, CompleteButton },
  setup() {
    const store = useStore()
    const state = reactive<{ todoList: { id:number, todo: String }[] }>({
      todoList: store.state.todoList
    })
    // const addTodoAction = (value: string) => {
    //   state.todoList.push({todo: value})
    // }

    // const completeTodoAction = (targetIndex: number) => {
    //   state.todoList.splice(targetIndex, 1)
    // }
    return {state}
  }
})
</script>