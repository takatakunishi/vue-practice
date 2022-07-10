<template>
  <div>
    <template v-if="detailItem">
      <div>
        <h2>
          <p class="h-24 p-3 flex items-center text-2xl font-bold text-red-600">タイトル</p>
          <p >{{detailItem.todo}}</p>
        </h2>
      </div>
    </template>
    <template v-else>
      <div>
        <h2>データが存在しません</h2>
        <router-link to="/">トップへ</router-link>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"
export default defineComponent({
  name: 'Detail',
  setup() {
    const store = useStore()
    const route = useRoute()
    const routerId = route.params.id
    const detailItem = store.state.todoList.find((e: any) => String(e.id) === routerId)
    return {detailItem}
  }
})
</script>