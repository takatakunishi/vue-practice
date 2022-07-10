import { createStore } from "vuex";

export interface State {
  todoList: {id: number, todo: string, comment?: string[]}[]
}
export const store = createStore({
  state: {
    todoList:[]
  },
  mutations: {
    increment(state: State, { id, value }: {id:number, value: string}) {
      state.todoList.push({ id, todo: value, comment: [] })
      console.log("todo pushed!")
    },
    complete(state: State, targetIndex: number) {
      state.todoList.splice(targetIndex, 1)
    }
  },
  actions: {},
  modules: {}
})

export default store