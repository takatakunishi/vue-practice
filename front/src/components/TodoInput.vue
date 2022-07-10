<template>
  <input v-model="todoRef" type="text" />
  <button @click="add">登録</button>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: 'TodoInput',
  setup(props, context: SetupContext) {
    const store = useStore()
    const todoRef = ref<string>('')

    const lastId = () => {
      if (store.state.todoList.length === 0) {
        return 1
      } else {
        const lastItem = store.state.todoList.slice(-1)[0]
        return lastItem.id + 1
      }
    }
    const add = (e: any) => {
      const id = lastId()
      const value = todoRef.value
      store.commit('increment', {id, value})
      todoRef.value = ''
    }
    return {add, todoRef}
  }
})
</script>